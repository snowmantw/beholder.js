'use strict';

import csp from 'js-csp';

export default class ScreenRecord {
  
  constructor() {
    this._recordChannel = csp.chan();
  }

  connect(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'log', this._recordChannel);
  }

	*consume() {
    let value = yield this._recordChannel;
    while (true) {
        console.log('dummy screen record: ', value.payload);
        value = yield this._recordChannel;
    }
  }
}
