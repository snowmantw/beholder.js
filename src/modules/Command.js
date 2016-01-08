'use stric';

import path from 'path';
import csp from 'js-csp';
import Defer from 'Defer';

export default class Command {

  constructor() {
    this._outputChannel = csp.chan();
    this._inputChannel = csp.chan();
    this._publication = csp.operations.pub(
      this._outputChannel, (e) => e.topic);
    this._closed = false;
    // See `connect`.
    this._topic = '';
  }

  /**
   * To run the command and start to generate data.
   * Control method could `await` the promise to pending the session
   * until the channel gets closed.
   */
  run() {
    this._channelCloseDeferred = new Defer();
    return this._channelCloseDeferred.promise;
  }

  /**
   * The stage 'run' completes only when one of subscribers calls 'close' to
   * finish the channel.
   */
  subscribe(...subs) {
    // To give all subscribers a publication, so that they can do the subscription.
    // And give them the handler to close the channel.
    subs.forEach((sub) => {
      sub(this._publication, this.close.bind(this));
    });
    return this;
  }

  /**
   * Closing without error means it's normally ended.
   * Closing with error means ended abnormally.
   */
  close(error) {
    if (!this._closed) {
      this._outputChannel.close();
      this._closed = true;
    }

    if (!error) {
      this._channelCloseDeferred.resolve();
    } else {
      this._channelCloseDeferred.reject(error);
    }
  }

  /**
   * Connect to another channel to receive data.
   * It needs a inner member 'topic' to filter the related data.
   * Or, override this method to gain fully control.
   */
  connect(publication, closeHandler) {
    csp.operations.pub.sub(publication, this._topic, this._inputChannel);
    // Start to iterate the channel.
    this.consume();
  }

  /**
   * To consume the data.
   * It needs a inner member 'onTopic' to filter the related data.
   * Or, override this method to gain fully control.
   */
	consume() {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (true) {
        this._onTopic(value);
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  _onTopic(value) {
    // console.log(this.constructor.name, '>>>> ', this._topic,': ', value.payload.toString());
  }
}
