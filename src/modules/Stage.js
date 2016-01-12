'use strict';

import Command from 'modules/Command';

/**
 * Extend command to let it could be transferred.
 */
export default class Stage extends Command {

  constructor(states) {
    super();
    this._states = states;
  }

  /**
   * Stop the previous stage and then sync the data with the states.
   * This is necessary to make the next stage receive
   * previous' result.
   */
  async stop(method) {
    let result = await this.close();
    await method(this._states, result);
    return this;
  }

  async transfer(nextStageInstance) {
    this._states.transfer(nextStageInstance);
  }
}
