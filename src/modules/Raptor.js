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

  setup({ path: { phase: phasePath,
                  raptor: raptorPath,
                  test: testFilePath }}) {
    let runTest = child_process.spawn(
        raptorPath, ['test', testFilePath],
        {'env': {'RUNNING_PHASE': phasePath}}
    );
    runTest.stdout.on('data', (data) => csp.putAsync(
      this._channel, {'topic': 'log', 'payload':  data}));
    runTest.stderr.on('data', (data) => csp.putAsync(
      this._channel, {'topic': 'error', 'payload': data}));
    return this;
  }

  /**
   * The stage 'run' completes only when one of subscribers calls 'close' to
   * finish the channel.
   */
  subscribe(...subs) {
    this._channelCloseDeferred = new Defer();
    let publication = csp.operations.pub(this._channel, (e) => e.topic);
    // Kick-off the test.
    // Subscriber should call the close method to close the channel.
    runTest.on('close', (status) => {
      csp.putAsync(this._channel, {'topic': 'status', 'payload': status});
    });
    // To give all subscribers a publication, so that they can do the subscription.
    // And give them the handler to close the channel.
    subs.forEach((sub) => {
      sub(publication, this.close.bind(this));
    });
    return this._channelCloseDeferred.promise;
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
