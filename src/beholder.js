'use strict';

import csp from 'js-csp';
import Configure from 'Configure'
import Signal from 'routers/Signal';
import DeviceLog from 'routers/DeviceLog';
import ScreenRecord from 'routers/ScreenRecord';
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
      signal: new Signal(this.configs)
    };
    this._mainRouter = this._routers[mainRouterName];
    if (!this._mainRouter) { throw new Error('No main router: ' + mainRouterName); }
    for (let routerIdendity in this._routers) {
      let router = this._routers[routerIdendity];
      this.subscribe(router::router.connectToController);
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
    console.log('>>>> stop done');
  }

  _connectToMainRouter(publication) {
    this._mainPublication = publication;
    csp.operations.pub.sub(publication, 'status', this._inputChannel);
    this._consumeMainRouterMessage();
  }

  _consumeMainRouterMessage() {
    let fn = function*() {
      try {
        let value = yield this._inputChannel;
        while (value !== csp.CLOSED) {
          if ('finalize' === value.payload.type) {
            this.stop();
          } else if ('stagechange' === value.payload.type) {
            this._stage = value.payload.detail;
            // We need this await because we need to wait for the current stage change
            // to start the next change.
            this._forwardStageChangeRequest(value.payload.detail);
          }
          value = yield this._inputChannel;
          console.log('>>>>> to get the next value DONE');
        }
        console.log('>>>>> yielding stops');
      } catch(e) {
        console.error('""try to catch error', e);
        throw e;
      }
    }
    csp.go(fn.bind(this));
  }

  async _forwardStageChangeRequest(stage) {
    try {
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      console.log('>>> ', name, typeof router._currentStageDefer);
      return router._currentStageDefer.promise;
    });
console.log('>>> forward stage: ', stage);
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': stage} });
    await Promise.all(currentStagePromises);
    console.log('>>> after await');
    } catch(e) {
      console.error(e);
      throw e;
    }
  }

}

let controller = new Controller();
controller.start();
//controller.test();
