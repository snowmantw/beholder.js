'use strict';

import csp from 'js-csp';
import child_process from 'child_process';
import Router from 'routers/Router';
import Defer from 'Defer';

export default class RecordingStage extends Router {

  constructor(configsInstance) {
    super(arguments);
    this.configs = configsInstance;
    this._adbPath = this.configs.path.adb;
    this._name = 'devicelog';
  }

  start() {
    console.log('>>>>> device log runs');
    let runIt = child_process.spawn(
      this._adbPath,
      ['logcat'],
      { detached: true }
    );
    console.log('>>>>> device log runs spawn');
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      console.log('>>>>> data adb');
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

  this._transferredDeferred.promise =
    this._transferredDeferred.promise.then(() => {
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

  stop() {
    // Since this is an actually all-in-one router without any stage,
    // we need to implement the method in this stage.
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _onInitialized(initializedRouters) {
    super._onInitialized(arguments);
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
  _transferToCollectingStage() {
    // Don't actually transfer since we will do nothing in that stage.
    let deferred = this._transferredDeferred;
    this._transferredDeferred = new Defer();
    deferred.promise.resolve();
  }

  _transferToTerminatingStage() {
    // Don't actually transfer since we will do nothing in that stage.
    let deferred = this._transferredDeferred;
    this._transferredDeferred = new Defer();
    deferred.promise.resolve();
  }
}
