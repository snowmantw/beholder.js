'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'Defer';

export default class Signal extends Router {

  constructor(configs) {
    super(configs);
    this._name = 'signal';
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

  _recording() {
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
  }

  _collecting() {
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
  }

  _terminating() {}

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
