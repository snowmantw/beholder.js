'use strict';

import csp from 'js-csp';

export default class Error {
  
  constructor() {
    this._logChannel = csp.chan();
  }

  connect(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'error', this._logChannel);
  }

	*consume() {
    let value = yield this._logChannel;
    while (true) {
        console.log('error: ', value.payload);
        value = yield this._logChannel;
    }
  }
}
