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
    // Two "signals": inputs from stdin and system signals.
    let terminatingSignals = [
      'SIGHUP',
      'SIGTERM',
      'SIGINT'
    ];
    console.log('>>> Signals run');
    this._nextStageBySignal = 'collecting';
    terminatingSignals.forEach((signal) => {
      process.on(signal, this::this._onStageTransferringSignal);
    });

    let stdin = process.openStdin();
    stdin.on('data', this::this._onInput);
  }

  _collecting() {
    console.log('>>> in Signal, collecting');
    this._nextStageBySignal = 'terminating';
  }

  _terminating(defer) {
    console.log('>>> in Signal, terminating');
    this._nextStageBySignal = null;
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'finalize'} });

    defer.promise = defer.promise.then(() => {
      // Stop reading the stdin.
      process.stdin.pause();
      console.log('>> in signal, process close stdin');
    });
  }

  _onInput(code) {
    // Polling stdin to make it continues listen to user inputs.
    // This handler deals with other 'signals' other than system signals.
  }

  _onStageTransferringSignal(signal) {
    if (this._nextStageBySignal) {
      csp.putAsync(this._outputChannel, {'topic': 'status',
        'payload':  {'type': 'stagechange', 'detail': this._nextStageBySignal }});
    }
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
