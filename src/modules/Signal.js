'use strict';

import Command from 'modules/Command';

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
      process.on(signal, function() {
        csp.putAsync(this._outputChannel, {'topic': 'status', 'payload':  'termination'});
      });
    });
  }
}
