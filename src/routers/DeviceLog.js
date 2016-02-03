'use strict';

import csp from 'js-csp';
import child_process from 'child_process';
import Router from 'routers/Router';
import Defer from 'Defer';
import { commandDevice } from 'AndroidDaemonBus';

export default class DeviceLog extends Router {

  constructor(configs) {
    super(configs);
    this._adbPath = this.configs.path.adb;
    this._name = 'devicelog';
  }

  start() {
    // Concat the first stage handler.
    this._transferToRecordingStage();
    // Kick-off it.
    this._stages.resolve();
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _recording(defer) {
    this._initialEpoch = this._fetchInitialEpoch();
    this._deviceYear = (new Date(this._initialEpoch)).getUTCFullYear();

    // Turn all timestamps in the log to epoch, then substract them.
    let runIt = child_process.spawn(
      this._adbPath,
      ['logcat', '-v', 'time'],
      { env: {'TZ': 'Etc/UTC'}, detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      let lines = this._splitLines(data.toString());
      lines.map((line) => line.trim()).forEach((line) => {
        // Don't care empty lines.
        if ('' === line) { return; }
        let timeOffsetLine = this._timeOffsetFromDateTime(line);
        // Something makes it cannot be marked.
        if (!timeOffsetLine) { return; }
      console.log(':::::::::::: line: ', timeOffsetLine);
        csp.putAsync(this._outputChannel,
          {'topic': 'log', 'source': this._name,
           'payload': timeOffsetLine });
      });
    });
    runIt.stderr.on('data', (data) => {
      let lines = this._splitLines(data.toString());
      lines.map((line) => line.trim()).forEach((line) => {
        // Don't care empty lines.
        if ('' === line) { return; }
        let timeOffsetLine = this._timeOffsetFromDateTime(line);
        // Something makes it cannot be marked.
        if (!timeOffsetLine) { return; }
      console.log(':::::::::::: line: ', timeOffsetLine);
        csp.putAsync(this._outputChannel,
          {'topic': 'error', 'source': this._name,
           'payload': timeOffsetLine });
      });
    });
    runIt.on('close', (status) => {
      csp.putAsync(this._outputChannel,
        {'topic': 'status', 'payload': status, 'source': this._name});
    });

    defer.promise =
      defer.promise.then(() => {
        // After close, kill the adb logcat process.
        // This is the 'stop' method this command has.
        // Since it mainly forwards to other module,
        // we only need to kill the listener.
        runIt.kill();
      }).catch((e) => {
        console.error(e);
        throw e;
      });
  }

  _collecting(defer) {
  }

  _terminating(defer) {}

  _splitLines(lines) {
    return lines.split('\n');
  }

  _timeOffsetFromDateTime(data) {
    let [date, time, ...others] = data.split(' ');
    console.log('date, time, others: {', date, '}', '{', time, '} -- ', data);
    let offset = this._epochTimeFromDateTime(this._deviceYear, date, time) - this._initialEpoch;
    if (isNaN(offset)) { return; }
console.log('>>', time, date, this._epochTimeFromDateTime(this._deviceYear, date, time), this._initialEpoch);
    others.unshift(offset);
    return others.join(' ');
  }

  _epochTimeFromDateTime(year, date, time) {
    console.log('year, date, time: ', year, date, time);
    // ex: 12-31 19:18:38.309
    // We need to append year on that date.

    let [M,d] = date.split('-');
    let [hms, ms] = time.split('.');
    let [h, m, s] = hms.split(':');
    return Date.UTC(year, M, d, h, m, s, ms);
  }

  _fetchInitialEpoch() {
    let initialEpoch = commandDevice(
      this._adbPath)('shell', 'TZ=Etc/UTC', 'date', '"+%s"');
    return parseInt(initialEpoch.toString(), 10);
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'collecting':
        this._transferToCollectingStage();
        break;
      case 'terminating':
        this._transferToTerminatingStage();
        break;
    }
  }

  _transferToRecordingStage() {
    this._transferTo(this._recording);
  }

  _transferToCollectingStage() {
    this._transferTo(this._collecting);
  }

  _transferToTerminatingStage() {
    this._transferTo(this._terminating);
  }
}
