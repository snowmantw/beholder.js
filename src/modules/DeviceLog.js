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
    console.log('>>>>> device log runs');
    this._channelCloseDeferred = new Defer();
    let runIt = child_process.spawn(
      adbPath,
      ['logcat'],
      { detached: true }
    );
    console.log('>>>>> device log runs spawn');
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      console.log('>>>>> data adb');
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      console.log('>>>>> error adb');
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runIt.on('close', (status) => {
      console.log('>>>>> close adb');
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });
    console.log('>>>>> device log runs spawn done');

    return this._channelCloseDeferred.promise.then(() => {
      // After close, kill the adb logcat process.
      // This is the 'stop' method this command has.
      // Since it mainly forwards to other module,
      // we only need to kill the listener.
      runIt.kill();
    }).catch((e) => {
      console.error(e);
      throw e;
    });
  }
}
