'use stric';

import path from 'path';
import child_process from 'child_process';
import csp from 'js-csp';
import Command from 'modules/Command';
import Defer from 'Defer';

export default class DeviceLog extends Command {

  constructor() {
    super();
    this._channel = csp.chan();
    this._closed = false;
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
console.log('adb logcat stdout: ' + data);
      csp.putAsync(this._channel, {'topic': 'log', 'payload':  data});
    });
    runTest.stderr.on('data', (data) => {
console.log('adb logcat stderr: ' + data);
      csp.putAsync(this._channel, {'topic': 'error', 'payload': data})
    });
    runTest.on('close', (status) => {
console.log('adb logcat child process exited with code ' + status);
      csp.putAsync(this._channel, {'topic': 'status', 'payload': status});
    });

    return this._channelCloseDeferred.promise;
  }
}
