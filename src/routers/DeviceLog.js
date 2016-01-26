'use strict';

import csp from 'js-csp';
import child_process from 'child_process';
import Router from 'routers/Router';
import Defer from 'Defer';

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
    console.log('>>>>> device log runs');
    let runIt = child_process.spawn(
      this._adbPath,
      ['logcat'],
      { detached: true }
    );
    console.log('>>>>> device log runs spawn');
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      console.log('>>>>> error adb');
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runIt.on('close', (status) => {
      console.log('>>>>> close adb');
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });
    console.log('>>>>> device log runs spawn done');

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

  _collecting(defer) {}
  _terminating(defer) {}

  _onInitialized(initializedRouters) {
    super._onInitialized.apply(this, arguments);
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