'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';

export default class TerminatingStage extends Router {

  constructor(previousStageInstance) {
    super(previousStageInstance);
    this._pathExtractedFrames = this._previousStage._pathExtractedFrames;
  }

  start() {
    // Send out the final data.
    csp.putAsync(this._outputChannel,
      {'topic': 'data', 'payload': this._pathExtractedFrames});
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }
}
