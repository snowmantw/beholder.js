'use strict';

import csp from 'js-csp';
import Defer from 'Defer';

export default class Router {

  /**
   * After constructor this router should be able to listen to control messages.
   */
  constructor(previousStageInstance) {
    this._name = '__router__';  // Extend by client.
    this._controlChannel = csp.chan();
    this._outputChannel = csp.chan();
    this._inputChannel = csp.chan();
    this._publication = csp.operations.pub(
      this._outputChannel, (e) => e.topic);
    this._previousStage = previousStageInstance;

    // Only when all transferring stuff done, this Defer will be resolved.
    this._transferredDeferred = new Defer();
    this._consumeControlMessage();
  }

  /**
   * After started the router should be able to emit message to the output channel.
   */
  start() {
    throw new Error('Instance should extend this method.');
  }

  /**
   * Only be invoked when the last stage of the router need to be finished.
   * In most of cases, this means the end of the program.
   * Therefore only the last stage need to implement this to release resources
   * or finalize all functions.
   *
   * Other intermediate stages will be transferred, which is another exit of
   * the router to clear itself.
   */
  stop() {
    throw new Error('Instance should extend this method.');
  }

  subscribe(...subs) {
    subs.forEach((sub) => {
      sub(this._publication, this._transferredDeferred.promise);
    });
    return this;
  }

  connectToController(publication) {
    this._controllerPublication = publication;
    csp.operations.pub.sub(publication, 'status', this._controlChannel);
    this._consumeControlMessage();
  }

  _consumeControlMessage() {
    csp.go((function*() {
      let value = yield this._controlChannel;
      while (csp.CLOSED !== value) {
        let {type, detail} = value.payload;
        switch(value.payload.type) {
          case 'initialized':
        console.log('>>>>>>>> value of control: ', Object.keys(value.payload.detail), Object.keys(detail));
            this._onInitialized(detail);
            break;
          case 'stagechange':
            this._stopListenToControlChannel();
            this._closeChannels();
            this._onStageChange(value.payload.detail);
            break;
        }
        value = yield this._controlChannel;
      }
    }).bind(this));
  }

  _onInitialized(initializedRouters) {
    console.log('>>>>>> default onInitialized ', Object.keys(initializedRouters));
    this._routers = initializedRouters;
    console.log('>>>>>> (confirm) default onInitialized ', Object.keys(this._routers));
  }

  /**
   * Only intermediate stages need to implement this method, since it doesn't exit
   * via the `stop` method, but the state transferring.
   */
  _onStageChange(stage) {
    throw new Error('Instance should extend this method.');
  }

  _stopListenToControlChannel() {
    csp.operations.pub.unsub(
      this._controllerPublication, 'status', this._controlChannel);
  }

  _closeChannels() {
    this._inputChannel.close();
    this._outputChannel.close();
  }

  _transferTo(routerStageClass) {
    // Extend this procedure if it's necessary.
    let nextStage = new routerStageClass(this);
    this._routers[this._name] = nextStage;
    this._transferredDeferred.resolve();
    nextStage.start();
  }
}
