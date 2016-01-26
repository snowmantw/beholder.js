'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'Defer';

export default class RecordingStage extends Router {

  constructor(configsInstance) {
    super(configsInstance);
    this.configs = configsInstance;
    this._name = 'signal';
  }

  start() {
    let terminatingSignals = [
      'SIGHUP',
      'SIGTERM',
      'SIGINT'
    ];
    console.log('>>> Signals run');
    terminatingSignals.forEach((signal) => {
      console.log('>>>> book: ', signal);
      process.on(signal, () => {
        if (this._stagechangedOnce) { return; }
        this._stagechangedOnce = true;
        console.log('>>>>>> send stagechange signal');
        csp.putAsync(this._outputChannel, {'topic': 'status',
          'payload':  {'type': 'stagechange', 'detail': 'collecting'}});
        //csp.putAsync(this._outputChannel, {'topic': 'data', 'payload':  'terminating'});
      });
    });

    return this._transferredDeferred.promise;
  }

  stop() {
    // Since this is an actually all-in-one router without any stage,
    // we need to implement the method in this stage.
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  // XXX: only for test (need a way to trigger stage change).
  _resetSignalHanlder() {
    let terminatingSignals = [
      'SIGHUP',
      'SIGTERM',
      'SIGINT'
    ];
    console.log('>>> Signals run');
    terminatingSignals.forEach((signal) => {
      console.log('>>>> book: ', signal);
      process.on(signal, () => {
        console.log('>>>>>> send kill signal');
        csp.putAsync(this._outputChannel, {'topic': 'status',
          'payload':  {'type': 'stagechange', 'detail': 'terminating'}});
        //csp.putAsync(this._outputChannel, {'topic': 'data', 'payload':  'terminating'});
      });
    });

    return this._transferredDeferred.promise;
  }

  _onInitialized(initializedRouters) {
    super._onInitialized.apply(this, arguments) ;
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
    deferred.resolve();
    this._resetSignalHanlder();
  }

  _transferToTerminatingStage() {
    // Don't actually transfer since we will do nothing in that stage.
    let deferred = this._transferredDeferred;
    this._transferredDeferred = new Defer();
    deferred.resolve();
  }
}
