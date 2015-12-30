'use strict';

import csp from 'js-csp';

export default class Log {
  
  constructor() {
    this._logChannel = csp.chan();
  }

  connect(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'log', this._logChannel);
  }

	*consume() {
    let value = yield this._logChannel;
    while (true) {
        console.log('log: ', value.payload);
        value = yield this._logChannel;
    }
  }
}
