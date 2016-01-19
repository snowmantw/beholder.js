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
    console.log('>>> Signals run');
    signals.forEach((signal) => {
      console.log('>>>> book: ', signal);
      process.on(signal, () => {
        console.log('>>>>>> send kill signal');
        csp.putAsync(this._outputChannel, {'topic': 'data', 'payload':  'termination'});
      });
    });
    this._channelCloseDeferred = new Defer();
    console.log('>>>> SIGNAL runs end');
    return this._channelCloseDeferred.promise.then(() => {
      console.log('>>>>> close Signal handling means to exit');
      process.exit();
    });
  }
}
