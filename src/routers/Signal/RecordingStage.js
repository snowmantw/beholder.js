'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'Defer';

export default class RecordingStage extends Router {

  constructor(configsInstance) {
    super(arguments);
    this.configs = configsInstance;
    this._name = 'devicelog';
  }

  start() {
    let signals = [
      'SIGHUP',
      'SIGINT',
      'SIGTERM'
    ];
    console.log('>>> Signals run');
    signals.forEach((signal) => {
      console.log('>>>> book: ', signal);
      process.on(signal, () => {
        console.log('>>>>>> send kill signal');
        csp.putAsync(this._outputChannel, {'topic': 'data', 'payload':  'terminating'});
      });
    });

    this._transferredDeferred.promise =
      this._transferredDeferred.promise.then(() => {
        process.exit();
      }).catch((e) => {
        console.error(e);
        throw e;
      });
    return this._transferredDeferred.promise;
  }

  stop() {
    // Since this is an actually all-in-one router without any stage,
    // we need to implement the method in this stage.
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _onInitialized(initializedRouters) {
    super._onInitialized(arguments) ;
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
  }

  _transferToTerminatingStage() {
    // Don't actually transfer since we will do nothing in that stage.
    let deferred = this._transferredDeferred;
    this._transferredDeferred = new Defer();
    deferred.resolve();
  }
}
