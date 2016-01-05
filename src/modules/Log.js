'use strict';

import csp from 'js-csp';
import Command from 'modules/Command';

export default class Log extends Command {

  constructor() {
    super();
    this._topic = 'log';
  }
}
