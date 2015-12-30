'use stric';

import path from 'path';
import child_process from 'child_process';
import csp from 'js-csp';
import Defer from 'Defer';

export default class Raptor {

  constructor() {
    this._channel = csp.chan();
    this._closed = false;
  }

  invoke({ path: { phase: phasePath,
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
      csp.putAsync(this._channel, {'topic': 'log', 'payload':  data});
    });
    runTest.stderr.on('data', (data) => {
console.log('stderr: ' + data);
      csp.putAsync(this._channel, {'topic': 'error', 'payload': data})
    });
    runTest.on('close', (status) => {
console.log('child process exited with code ' + status);
      csp.putAsync(this._channel, {'topic': 'status', 'payload': status});
    });
    
    return this._channelCloseDeferred.promise;
  }

  /**
   * The next stage 'invoke' completes only when one of subscribers calls 'close' to
   * finish the channel.
   */
  subscribe(...subs) {
    let publication = csp.operations.pub(this._channel, (e) => e.topic);

    // To give all subscribers a publication, so that they can do the subscription.
    // And give them the handler to close the channel.
    subs.forEach((sub) => {
      sub(publication, this.close.bind(this));
    });
    return this;
  }

  /**
   * Closing without error means it's normally ended.
   * Closing with error means ended abnormally.
   */
  close(error) {
    if (!this._closed) {
      this._channel.close();
      this._closed = true;
    }

    if (!error) {
      this._channelCloseDeferred.resolve(); 
    } else {
      this._channelCloseDeferred.reject(error);
    }
  }
}
