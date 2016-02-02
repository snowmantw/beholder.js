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
    this._nextStageBySignal = 'collecting';
    terminatingSignals.forEach((signal) => {
      process.on(signal, this::this._onStageTransferringSignal);
    });

    let stdin = process.openStdin();
    stdin.setRawMode(true);
    stdin.on('data', this::this._onInput);
  }

  _collecting(defer) {
    this._nextStageBySignal = 'terminating';
  }

  _terminating(defer) {
    this._nextStageBySignal = null;
    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload': {'type': 'finalize'} });

    defer.promise = defer.promise.then(() => {
      // Stop reading the stdin.
      process.stdin.pause();
    });
  }

  _onInput(code) {
    // Polling stdin to make it continues listen to user inputs.
    // This handler deals with other 'signals' other than system signals.
    if ('\u001B' === code.toString() || 'a' === code.toString()) {
      this._onStageTransferringSignal();
    }
  }

  _onStageTransferringSignal() {
    if (this._stopSendingStageChange) {
      return;
    }
    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload':  {'type': 'stagechange', 'detail': this._nextStageBySignal }});

    // If interrupts fired multiple times in this stage, we need a way
    // to block the multiple stagechange event. This is a simple way to
    // do that.
    if ('terminating' === this._nextStageBySignal) {
      // We cannot remove the signal listeners because we still need to
      // prevent user interrupting the program before all steps done.
      this._stopSendingStageChange = true;
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

  _removeSignalHandler() {
    let terminatingSignals = [
      'SIGHUP',
      'SIGTERM',
      'SIGINT'
    ];
    terminatingSignals.forEach((signal) => {
      // So we don't fire stagechange according to the signal anymore.
      process.removeAllListeners(signal);
    });
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
