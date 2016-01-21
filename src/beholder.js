'use strict';

import csp from 'js-csp';
import Configure from 'Configure'
import { default as Log } from 'routers/Log/RecordingStage';
//import Raptor from 'routers/Raptor';
//import Error from 'routers/Error';
//import ScreenRecord from 'routers/ScreenRecord';
import { default as DeviceLog } from 'routers/DeviceLog/RecordingStage';
import { default as Signal } from 'routers/Signal/RecordingStage';

/**
 * This launcher & controller module will send initialized
 * message to all other modules, and then forward stage changes
 * from the main module. Itself doesn't belong to the command-module
 * system, but can deal with the protocol.
 **/
class Beholder {

  constructor() {
    this._outputChannel = csp.chan();
    this._mainRouterChannel = csp.chan();
    this._signalChannel = csp.chan();

    this._publication = csp.operations.pub(
      this._outputChannel, (e) => e.topic);
  }

  start() {
    let configure = new Configure();
    this.configs = configure.setup();
    this._routers = {
      devicelog: new DeviceLog(this.configs),
      log: new Log(this.configs),
      signal: new Signal(this.configs)
    };
    this._initializeRouters();
  }

  _initializeRouters() {
    let mainRouter;
    let initialized = {};
    let mainRouterIdentity = this.configs.routers.__main__;

    this._transferredPromises = [];

    for (let routerIdendity of this.configs.routers) {
      let router = this._routers[routerIdendity];
      console.log('>>>> router.name: ', router._name, this.configs.routers);
      if (!router) {
        console.error(`!!!!!!Cannot find router ${routerIdendity} from ${this.configs.routers}`);
        throw new Error(`Cannot find router ${routerIdendity} from ${this.configs.routers}`);
      }
      router.connectToController(this._publication);
      console.log('>>>> register: ', routerIdendity);
      initialized[routerIdendity] = router;
      this._transferredPromises.push(router.start());
      if (mainRouterIdentity === routerIdendity) {
        mainRouter = router;
      }
    }

    if (!mainRouter) {
      throw new Error(`Found no main module: ${mainRouterIdentity}`);
    }
    this._routersInitialized = initialized;

    // So that modules could connect to each other by themselves.
    // TODO::::: problematic line
    console.log('>>>>> before sending the initialized: ', Object.keys(initialized));
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'initialized', 'detail': initialized} });

    console.log('>>>> beholder sent the initialized message');

    // Controller needs to listen to signals.
    this._routers.signal.subscribe(this::this._connectToSignals);
    mainRouter.subscribe(this::this._connectToMainRouter);
  }

  async _terminate() {
    let waitAllTerminated = Promise.all(this._transferredPromises);
    console.log('>>>> terminating sent');
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': 'terminating'} });
    await waitAllTerminated;

    console.log('>>>> after wait it');
    // TODO: need to distinguish the difference between abnormal and normal terminating ?
    process.exit(0);
  }

  _connectToMainRouter(publication, transferredDeferred) {
    csp.operations.pub.sub(publication, 'status', this._mainRouterChannel);
    this._mainRouterTransferredDeferred = transferredDeferred;
    this._consumeStageChanges();
  }

  _connectToSignals(publication, transferredDeferred) {
    csp.operations.pub.sub(publication, 'data', this._signalChannel);
    this._signalTransferredDeferred = transferredDeferred;
    this._consumeSignals();
  }

	_consumeSignals() {
    csp.go((function*() {
      let value = yield this._signalChannel;
      while (csp.CLOSED !== value) {
        console.log('>>>>> consume signal: ', value);
        if ('terminating' === value.payload) {
          console.log('>>>>> got signal terminating', 'Controller');
          this._terminate();
        }
        value = yield this._signalChannel;
      }
    }).bind(this));
  }

  /**
   * Main module should fire stage change messages, so other modules could
   * change their stage as well. And since modules have all the list of initialized
   * ones, they can handle the re-subscription issues by themselves.
   */
  _consumeStageChanges() {
    csp.go((function*() {
      let value = yield this._mainRouterChannel;
      while (csp.CLOSED !== value) {
        console.log('>>>>> consume main');
        if ('stagechange' === valule.payload.type) {
          this._dispatchStage(value.payload);
        }
        value = yield this._mainRouterChannel;
      }
    }).bind(this));
  }

  /**
   * Re-dispatch again. Since this is a Facade.
   */
  _dispatchStage(stagePayload) {
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': stagePayload });
  }
}

let beholder = new Beholder();
beholder.start();
