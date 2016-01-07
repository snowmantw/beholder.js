'use strict';

import csp from 'js-csp';
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
      process.on(signal, () => {
        console.log('>>>>>> signal received: ', signal);
        csp.putAsync(this._outputChannel, {'topic': 'status', 'payload':  'termination'});
      });
    });
  }
}
