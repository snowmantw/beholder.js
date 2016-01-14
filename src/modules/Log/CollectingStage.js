'use strict';

import csp from 'js-csp';
import Command from 'modules/Command';

import CollectingStage from 'modules/Log/CollectingStage';
import TerminatingStage from 'modules/Log/TerminatingStage';

/**
 * Collect data from original device logs.
 */
export default class CollectingStage extends Command {
  constructor(recordingInstance) {
    super();
    this._record = recordingInstance._record;
  }

  onStageChange(stage) {
    switch(stage) {
      case 'terminating':
        this._stopListenControlChannel()
        this._transferToTerminatingStage();
        break;
    }
  }

  _transferToTerminatingStage() {
    let terminatingStage = new TerminatingStage(this);
  }
}
