'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import TerminatingStage from 'routers/Log/TerminatingStage';

// TODO: We need to do time alignment in this stage when it's ready.
export default class CollectingStage extends Router {

  constructor(previousStageInstance) {
    super(previousStageInstance);
    this._name = this._previousStage._name;
    this._record = this._previousStage._record;
  }

  start() {
    // TODO: We need to do time alignment in this stage when it's ready.
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'terminating':
        this._transferToTerminatingStage();
        break;
    }
  }

  _transferToTerminatingStage() {
    this._transferTo(TerminatingStage);
  }
}
