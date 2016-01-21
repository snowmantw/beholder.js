'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';

export default class TerminatingStage extends Router {

  constructor(previousStageInstance) {
    super(previousStageInstance);
    this._record = this._previousStage._record;
  }

  start() {
    // Send out the final data.
    csp.putAsync(this._outputChannel,
      {'topic': 'data', 'payload': this._record});
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }
}
