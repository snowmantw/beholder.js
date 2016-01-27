'use strict';

import csp from 'js-csp';
import Configure from 'Configure'
import Signal from 'routers/Signal';
import DeviceLog from 'routers/DeviceLog';
import ScreenRecord from 'routers/ScreenRecord';
import Router from 'routers/Router';

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
      signal: new Signal(this.configs),
      controller: this
    };
    this._mainRouter = this._routers[mainRouterName];
    if (!this._mainRouter) { throw new Error('No main router: ' + mainRouterName); }
    for (let routerIdendity in this._routers) {
      let router = this._routers[routerIdendity];
      if ('controller' !== router.name) {
        this._routers.controller.subscribe(router::router.connectToController);
      }
    }

    this._mainRouter.subscribe(this::this._connectToMainRouter);
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'initialize', 'detail': this._routers} });
  }

  async stop() {
    if ('terminating' !== this._stage) {
      throw new Error('Must be in the terminating stage ' +
        'before calling stop (current one is: ' + this._stage + ' )');
    }
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      return router._currentStageDefer.promise;
    });

    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'finalize'} });

    // To wait terminating stage done. It must be the stage before the this
    // method get invoked.
    await currentStagePromises();
  }

  _connectToMainRouter(publication) {
    this._mainPublication = publication;
    csp.operations.pub.sub(publication, 'status', this._inputChannel);
    this._consumeMainRouterMessage();
  }

  _consumeMainRouterMessage() {
    csp.go((async function*() {
      let value = yield this._inputChannel;
      while (csp.CLOSED !== value) {
        if ('stagechange' === value.payload.type) {
          this._stage = value.payload.detail;
          // TODO: don't know if this causes problems.
          // We need this await because we need to wait for the current stage change
          // to start the next change.
          await this._forwardStageChangeRequest(value.payload.detail);
        }
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  _forwardStageChangeRequest(stage) {
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      return router._currentStageDefer.promise;
    });
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': 'stage'} });
    return Promise.all(currentStagePromises);
  }

}

let controller = new Controller();
controller.start();
