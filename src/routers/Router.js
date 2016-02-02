'use strict';

import csp from 'js-csp';
import Defer from 'Defer';

export default class Router {

  /**
   * After constructor this router should be able to listen to control messages.
   */
  constructor(configs) {
    this.configs = configs;
    this._name = '__router__';  // Extend by client.
    this._controlChannel = csp.chan();
    this._outputChannel = csp.chan();
    this._inputChannel = csp.chan();
    this._publication = csp.operations.pub(
      this._outputChannel, (e) => e.topic);

    // Every step of this Defer's promise would be a stage method.
    this._stages = new Defer();
    this._consumeControlMessage();
  }

  /**
   * After started the router should be able to emit message to the output channel.
   * The router should concat the starting stage to the stages defer, and then
   * resolve it to kick-off the whole process.
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
      sub(this._publication);
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
          case 'initialize':
            this._onInitialize(detail);
            this.start();
            break;
          case 'finalize':  // After the latest stage to resolve that stage promise.
            this._closeChannels();
            // Resolve the promise of the last stage.
            this._stopCurrentStage();
            break;
          case 'stagechange':
            this._stopCurrentStage();
            // Should dispatch & start a new stage.
            this._onStageChange(value.payload.detail);
            break;
        }
        value = yield this._controlChannel;
      }
    }).bind(this));
  }

  _onInitialize(initializedRouters) {
    this._routers = initializedRouters;
  }
  /**
   * Only intermediate stages need to implement this method, since it doesn't exit
   * via the `stop` method, but the state transferring.
   */
  _onStageChange(stage) {
    throw new Error('Instance should extend this method.');
  }

  _stopCurrentStage() {
    // Wait the previous steps in the stage method, and then kick-off the ending
    // promise of the after-stage defer.
    this._stages.promise = this._stages.promise.then(() => {
      this._currentStageDefer.resolve();
    });
  }

  _closeChannels() {
    this._inputChannel.close();
    this._outputChannel.close();
    this._controlChannel.close();
  }

  _transferTo(stageMethod) {
    // 1. Every stage has a stage method.
    // 2. Stage method will perform some tasks asynchronously
    // 3. After all those tasks it will solve the promise it returns
    // 4. And we will resolve another promise to notify outside world
    //    the stage is done.
    //
    // As a result, when transferring:
    // 1. In theory the current stage method has been executed but might not be resolved yet.
    // 2. It should has been attached to the pending stage
    // 3. So the new method should attach to the pending promise as well
    // 4. Means it should be executed and we append its promise.
    //

    this._stages.promise =
      this._stages.promise.then((function() {
        let mark = Date.now();
        console.log('............ Update the current stage defer ', this._name, mark);
        // The "after stage" defer.
        this._currentStageDefer = new Defer();
        this._currentStageDefer.promise = this._currentStageDefer.promise.then(() => {
          console.log('OOOOOOOOOO start to resolve the stage defer: ', this._name, mark, Date.now());
        });

        console.log('................ Call stage method and wait it');
        // The method is doing things in this stage, so wait it.
        return stageMethod.call(this, this._currentStageDefer);
      }).bind(this)).catch((err) => {
        console.error(`Execute stage method ${stageMethod.name} with error: `, err);
        throw err;
      });
  }
}
