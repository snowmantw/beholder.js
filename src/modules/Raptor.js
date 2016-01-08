'use stric';

import path from 'path';
import child_process from 'child_process';
import csp from 'js-csp';
import Command from 'modules/Command';
import Defer from 'Defer';

export default class Raptor extends Command {

  constructor() {
    super();
  }

  run({ path: { phase: phasePath,
                raptor: raptorPath}}, testFilePath) {
    // TODO: keep the phase path for tests need different phases from different
    // directories in the future.
    this._channelCloseDeferred = new Defer();
    let runIt = child_process.spawn(
      raptorPath,
      ['test', testFilePath],
      { detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runIt.on('close', (status) => {
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });

    return this._channelCloseDeferred.promise.then(() => {
      // After close, kill the adb logcat process.
      runIt.kill();
    });
  }

  connectSignals(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'status', this._inputChannel);
    this._consumeSignals();
  }

	_consumeSignals() {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (true) {
        if ('termination' === value.payload) {
          console.log('>>>>> got signal termination', 'Raptor');
          this.close();
        }
        value = yield this._inputChannel;
      }
    }).bind(this));
  }
}
