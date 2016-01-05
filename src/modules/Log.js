'use strict';

import csp from 'js-csp';

export default class Log {

  constructor() {
    this._logChannel = csp.chan();
    this._topic = 'log';
  }
}
