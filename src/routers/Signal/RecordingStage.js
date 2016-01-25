'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'Defer';

export default class RecordingStage extends Router {

  constructor(configsInstance) {
    super(configsInstance);
    this.configs = configsInstance;
    this._name = 'signal';
    this._interrupted = 0;
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
        this._interrupted += 1;
        console.log('>>>>>> send kill signal', this._interrupted);
        if (1 === this._interrupted) {
          csp.putAsync(this._outputChannel, {'topic': 'status',
            'payload':  {'type': 'stagechange', 'detail': 'collecting'}});
        } else if (2 === this._interrupted) {
          csp.putAsync(this._outputChannel, {'topic': 'status',
            'payload':  {'type': 'stagechange', 'detail': 'terminating'}});
        }
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
  }

  _transferToTerminatingStage() {
    // Don't actually transfer since we will do nothing in that stage.
    let deferred = this._transferredDeferred;
    this._transferredDeferred = new Defer();
    deferred.resolve();
  }
}
