'use strict';

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
    console.log('............ in stop, try to get all stage defer promise: ', Date.now());
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      return router._currentStageDefer.promise;
    });

    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload': {'type': 'finalize'} });
    console.log('>>>> forwarded the finalize message');

    // To wait terminating stage done. It must be the stage before the this
    // method get invoked.
    await Promise.all(currentStagePromises);
    console.log('>>>> stop done');
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
  try {
    let takeIt = () => {
      let defer = new Defer();
      csp.takeAsync(this._inputChannel,
        (value) => { defer.resolve(value); });
      return defer.promise;
    }

    let message = await takeIt();
    console.log('>>>> first message: ', message);
    while(message !== csp.CLOSED) {
      console.log('"""""" try to loop receive the stage: """"""', Date.now());
      if ('finalize' === message.payload.type) {
        this.stop();
        break;
      } else if ('stagechange' === message.payload.type) {
        this._stage = message.payload.detail;
        // We need this await because we need to wait for the current stage change
        // to start the next change.
        await this._forwardStageChangeRequest(message.payload.detail);
        console.log('>>>>> after the forwarding in the loop');
      }
      message = await takeIt();
      console.log('>> updated the message from main router');
    }
  } catch(e) {
    console.error('""try to catch error', e);
    throw e;
  }}

  _forwardStageChangeRequest(stage) {
    let currentStagePromises = Object.keys(this._routers).map((name) => {
      let router = this._routers[name];
      console.log('............ in stagechange, try to get all stage defer promise: ', name, Date.now());
      return router._currentStageDefer.promise;
    });
console.log('>>> forward stage: ', stage);
    csp.putAsync(this._outputChannel, {'topic': 'status', 'source': this._name,
      'payload': {'type': 'stagechange', 'detail': stage} });
    return Promise.all(currentStagePromises).then(() => {console.log('>> after waiting all stage changes');}).catch((e) => { console.error(e);throw e; });
  }

}

let controller = new Controller();
controller.start();
//controller.test();
