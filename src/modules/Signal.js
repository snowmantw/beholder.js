'use strict';

import csp from 'js-csp';
import Command from 'modules/Command';
import Defer from 'Defer';

export default class Signal extends Command {

  constructor() {
    super();
  }

  run() {
    let signals = [
      'SIGHUP',
      'SIGINT',
      'SIGTERM'
    ];
    signals.forEach((signal) => {
      process.on(signal, () => {
        csp.putAsync(this._outputChannel, {'topic': 'data', 'payload':  'termination'});
      });
    });
    this._channelCloseDeferred = new Defer();
    return this._channelCloseDeferred.promise.then(() => {
      console.log('>>>>> close Signal handling means to exit');
      process.exit();
    });
  }
}
