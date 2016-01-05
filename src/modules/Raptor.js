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
    let runTest = child_process.spawn(
      raptorPath,
      ['test', testFilePath],
      { detached: true }
    );
    runTest.unref();
    runTest.stdout.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runTest.stderr.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runTest.on('close', (status) => {
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });

    return this._channelCloseDeferred.promise;
  }
}
