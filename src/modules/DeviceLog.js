'use stric';

import path from 'path';
import child_process from 'child_process';
import csp from 'js-csp';
import Command from 'modules/Command';
import Defer from 'Defer';

export default class DeviceLog extends Command {

  constructor() {
    super();
  }

  run({ path: { adb: adbPath }}, testFilePath) {

    this._channelCloseDeferred = new Defer();
    let runTest = child_process.spawn(
      adbPath,
      ['logcat'],
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
