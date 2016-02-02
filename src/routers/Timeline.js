'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'defer';

export default class Timeline extends Router {

  constructor(configs) {
    super(configs);
    this._name = 'timeline';
  }

  start() {
    this._transferToRecordingStage();
    this._stages.resolve();
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _recording(defer) {}
  _collecting() {}
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
