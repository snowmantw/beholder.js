'use strict';

import util from 'util';
import csp from 'js-csp';
import Configure from 'Configure'
import Signal from 'routers/Signal';
import DeviceLog from 'routers/DeviceLog';
import ScreenRecord from 'routers/ScreenRecord';
import Timeline from 'routers/Timeline';
import Router from 'routers/Router';

import Defer from 'Defer';

class Controller extends Router {

  constructor() {
    super();
    this.name = 'controller';
    this._mainRouter = null;
    this._mainPublication = null;
    this._routers = null;
    this._stage = null;
  }

  start() {
    let configure = new Configure();
    this.configs = configure.setup();
    let mainRouterName = this.configs.routers.__main__;
    this._routers = {
      screenrecord: new ScreenRecord(this.configs),
      devicelog: new DeviceLog(this.configs),
      //log: new Log(this.configs),
      timeline: new Timeline(this.configs),
      signal: new Signal(this.configs)
    };
    this._mainRouter = this._routers[mainRouterName];
    if (!this._mainRouter) { throw new Error('No main router: ' + mainRouterName); }
    for (let routerIdentification in this._routers) {
      let router = this._routers[routerIdentification];
      this.subscribe(router::router.connectToController);
    }

    this._mainRouter.subscribe(this::this._connectToMainRouter);
    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload': {'type': 'initialize', 'detail': this._routers} });
  }

  async stop() {
    try {
      if ('terminating' !== this._stage) {
        throw new Error('Must be in the terminating stage ' +
          'before calling stop (current one is: ' + this._stage + ' )');
      }
      let currentStagePromises = Object.keys(this._routers).map((name) => {
        let router = this._routers[name];
        return router._currentStageDefer.promise;
      });

      console.log(this._name, Date.now(), `Send |finalize| message out`);
      csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
        'payload': {'type': 'finalize'} });

      // To wait terminating stage done. It must be the stage before the this
      // method get invoked.
      await Promise.all(currentStagePromises);
    } catch(e) {
      console.error(e);
      throw e;
    }
  }

  _connectToMainRouter(publication) {
    this._mainPublication = publication;
    csp.operations.pub.sub(publication, 'status', this._inputChannel);
    this._consumeMainRouterMessage();
  }

  async _consumeMainRouterMessage() {
    let takeIt = () => {
      let defer = new Defer();
      csp.takeAsync(this._inputChannel,
        (value) => {
          console.log(this._name, Date.now(), `Received message: ${ util.inspect(value) }`);
          defer.resolve(value); });
      return defer.promise;
    }

    let message = await takeIt();
    while(message !== csp.CLOSED) {
      if ('finalize' === message.payload.type) {
        this.stop();
        break;
      } else if ('stagechange' === message.payload.type) {
        this._stage = message.payload.detail;
        // We need this await because we need to wait for the current stage change
        // to start the next change.
        await this._forwardStageChangeRequest(message.payload.detail);
      }
      message = await takeIt();
    }
  }

  _forwardStageChangeRequest(stage) {
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      return router._currentStageDefer.promise;
    });

    console.log(this._name, Date.now(),
      `Send the |stagechange| message out; stage: ${ stage }`);
    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload': {'type': 'stagechange', 'detail': stage} });
    return Promise.all(currentStagePromises);
  }

}

let controller = new Controller();
controller.start();
//controller.test();
