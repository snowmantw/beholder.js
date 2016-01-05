'use strict';

import csp from 'js-csp';
import Command from 'modules/Command';

export default class Error extends Command {

  constructor() {
    super();

    // We need to merge `log` and `error` channels as one,
    // because errors in the device will as common logs.
    this._topicLog = 'log';
    this._topicError = 'error';
  }

  /**
   * Subscribe a log channel and then parse it.
   */
  errorFromLogChannel(publication, closeHandler) {
    csp.operations.pub.sub(publication, this._topicLog, this._inputChannel);
    this.consumeError(this._onPossibleLoggedError.bind(this));
  }

  /**
   * Subscribe an error channel and then handle it.
   */
  errorFromErrorChannel(publication, closeHandler) {
    csp.operations.pub.sub(publication, this._topicError, this._inputChannel);
    this.consumeError(this._onStandardError.bind(this));
  }

  _onStandardError(value) {
    console.log('>>> STANDARD ERROR: ', value.payload.toString());
  }

  _onPossibleLoggedError(value) {
    let log = value.payload.toString();
    if (log.match(/error/i)) {
      console.log('>>> LOGGED ERROR: ', value.payload.toString());
    }
  }

	consumeError(handler) {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (true) {
        handler(value);
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

}
