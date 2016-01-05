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

    this._channelCloseDeferred = new Defer();
    let runTest = child_process.spawn(
      raptorPath,
      ['test', phasePath, testFilePath],
      { detached: true }
    );
    runTest.unref();
    runTest.stdout.on('data', (data) => {
console.log('stdout: ' + data);
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runTest.stderr.on('data', (data) => {
console.log('stderr: ' + data);
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runTest.on('close', (status) => {
console.log('child process exited with code ' + status);
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });

    return this._channelCloseDeferred.promise;
  }
}
