'use strict';

import csp from 'js-csp';
import child_process from 'child_process';
import Router from 'routers/Router';
import Defer from 'Defer';
import Time from 'time';
import { commandDevice } from 'AndroidDaemonBus';

export default class DeviceLog extends Router {

  constructor(configs) {
    super(configs);
    this._adbPath = this.configs.path.adb;
    this._name = 'devicelog';
    this._commandDevice = commandDevice(this._adbPath);
    this._logs = [];
    this._errors = [];
  }

  start() {
    // Concat the first stage handler.
    this._transferToRecordingStage();
    this._fetchTimeInformation();

    // Kick-off it.
    this._stages.resolve();
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _fetchTimeInformation() {
    this._initialEpoch = this._fetchInitialEpoch();
    this._deviceTZ = this._commandDevice(
      'shell', 'getprop', 'persist.sys.timezone');
    this._deviceYear = parseInt(this._commandDevice(
      'shell', `TZ=${this._deviceTZ}`, 'date', '+%Y').toString(), 10);
  }

  _recording(defer) {
    // Turn all timestamps in the log to epoch, then substract them.
    let runIt = child_process.spawn(
      this._adbPath,
      ['logcat', '-v', 'time'],
      { detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (chunk) => {
      this._logs.push(chunk.toString());
    });
    runIt.stderr.on('data', (chunk) => {
      csp.putAsync(this._outputChannel,
        {'topic': 'error', 'source': this._name,
         'payload': chunk.toString()});
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
        console.error('Error when kill the device logging process', e);
        throw e;
      });
  }

  _collecting(defer) {
    // Some lines are overflowed from the previous year.
    let survivors = [];
    let strLogs = this._logs.join('');
    let lines = this._splitLines(strLogs);
    let maxOffset = 0;

    lines.map((line) => line.trim()).forEach((line) => {
      // Don't handle empty lines.
      if ('' === line) { return; }
      let {offset, content} = this._timeOffsetFromDateTime(line);
      // Something makes it cannot be parsed.
      if (!offset || offset < 0) { return; }

      if (offset > maxOffset) { maxOffset = offset; }
      // Suddenly some log is younger than previous one,
      // means those olders are too old (in the previous year,
      // due to the missing "year" in the log)
      else if (offset < maxOffset) {
        // Means that only logs after this line are valid.
        // So we empty it and start over.
        survivors.length = 0;
        maxOffset = offset;
      }
      survivors.push({offset, content});
    });

    survivors.forEach((payload) => {
      payload.type = 'devicelog';
      csp.putAsync(this._outputChannel,
        {'topic': 'log', 'source': this._name,
         'payload': payload});
    });
  }

  _terminating(defer) {}

  _splitLines(lines) {
    return lines.split('\r');
  }

  _timeOffsetFromDateTime(line) {
    let [date, time, ...content] = line.split(' ');
    let timeSlots = this._timeSlotsFromDateTime(date, time);
    if (isNaN(timeSlots.M)) {
      console.error('Cannot parse date-time from the log: ', line);
      return {};
    }
    // We need to append year on that date.
    timeSlots.Y = this._deviceYear;
    let offset = this._epochTimeFromDateTime(timeSlots) - this._initialEpoch;
    content = content.join(' ')
    return {offset, content};
  }

  _timeSlotsFromDateTime(date, time) {
    // ex: 12-31 19:18:38.309
    try {
      let [M,d] = date.split('-');
      let [hms, ms] = time.split('.');
      let [h, m, s] = hms.split(':');
      M = parseInt(M, 10) - 1;
      d = parseInt(d, 10);
      h = parseInt(h, 10);
      m = parseInt(m, 10);
      s = parseInt(s, 10);
      ms = parseInt(ms, 10);
      let slots = {M, d, h, m, s, ms};
      for (let name in slots) {
        if (isNaN(slots[name])) {
          throw new Error('Cannot convert slot into integer: ' + name);
        }
      }
      return slots;
    } catch(e) {
      return {};
    }
  }

  _epochTimeFromDateTime({Y, M, d, h, m, s, ms}) {
    let epoch = new Time.Date(Y,
        M,
        d,
        h,
        m,
        s,
        ms, this._deviceTZ);
    return epoch.getTime();
  }

  _fetchInitialEpoch() {
    let seconds = parseFloat(this._commandDevice(
      'shell', 'echo', '$EPOCHREALTIME'), 10);
    return Math.round(seconds * 1000);
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
