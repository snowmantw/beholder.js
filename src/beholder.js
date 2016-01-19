'use strict';

import csp from 'js-csp';
import Configure from 'Configure'
import { default as Log } from 'modules/Log/RecordingStage';
//import Raptor from 'routers/Raptor';
//import Error from 'routers/Error';
//import ScreenRecord from 'routers/ScreenRecord';
//import DeviceLog from 'routers/DeviceLog';
//import Signal from 'routers/Signal';

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
  }

  start() {
    let configure = new Configure();
    this.configs = configure.setup();
    this._routers = {
      devicelog: new DeviceLog(this.configs),
      log: new Log(this.configs),
      signal: new Signal(this.configs)
    };
    this._initializedRouters();
  }

  _initializeRouters() {
    let mainRouter;
    let initialized = {};
    let mainRouterIdentity = this.configs.routers.__main__;

    for (let routerIdendity of this.configs.routers) {
      let router = this.routers[routerIdendity];
      if (!router) {
        console.error(`!!!!!!Cannot find router ${routerIdendity} from ${this.configs.routers}`);
        throw new Error(`Cannot find router ${routerIdendity} from ${this.configsrouterss}`);
      }
      this.subscribe(router::router.connectToController);
      initialized[routerIdendity] = router;
      router.start();
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
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'initialized', 'detail': initialized} });

    // Controller needs to listen to signals.
    //this.routers.signal.subscribe(this::this._connectToSignals);
    mainRouter.subscribe(this::this._connectToMainRouter);
  }

  async _terminate() {
    let waitAllTerminated = Promise.all(Object.keys(this._routersInitialized)
        .map((routerIdendity) => {
          let { module, afterRun } = this._routersInitialized[routerIdendity];
          return afterRun;
        }));
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': 'termination'} });
    await waitAllTerminated;
    // TODO: need to distinguish the difference between abnormal and normal termination ?
    process.exit(0);
  }

  _connectToMainRouter(publication, transferredDeferred) {
    csp.operations.pub.sub(publication, 'status', this._mainRouterChannel);
    this._mainRouterTransferredDeferred = transferredDeferred;
    this._consumeStageChanges();
  }

  _connectToSignals(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'status', this._signalChannel);
    this._signalCloseHandler = closeHandler;
    this._consumeSignals();
  }

	_consumeSignals() {
    csp.go((function*() {
      let value = yield this._signalChannel;
      while (true) {
        console.log('>>>>> consume signal');
        if ('termination' === value.payload) {
          console.log('>>>>> got signal termination', 'Controller');
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
      while (true) {
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
//
/*
let configure = new Configure();
let configs = configure.setup();
let signal = new Signal();
let devicelog = new DeviceLog();
devicelog.run(configs);
signal.run();
*/
//setTimeout(() => {}, 30 * 1000);

/*
export async function main() {
  try {
    let raptor = new Raptor();
    let log = new LogRecordingStage();
    let error = new Error();
    let record = new ScreenRecord();
    let configure = new Configure();
    let devicelog = new DeviceLog();
    let signal = new Signal();

    let configs = configure.setup();

    // Must have signal handling.
    signal.run();

    // Run modules before connecting them.
    //record.run(configs);

    // Passive modules do not need configs: they only need channel results.
    log.run();
    error.run();

    for (let moduleIdendity of configs.modules) {
      switch(moduleIdendity) {

        case 'adb':
          signal.subscribe(
            devicelog::devicelog.connectSignals
          );
          devicelog.subscribe(
            log::log.connect,
            error::error.errorFromLogChannel,
            error::error.errorFromErrorChannel,
          ).run(configs);
          break;
        case 'raptor':
          signal.subscribe(
            raptor::raptor.connectSignals
          );
          for (let testFilePath of configs.tests) {
            raptor.subscribe(
              log::log.connect,
              error::error.connect,
              //record::record.connect
            ).run(configs, testFilePath);
          }
          break;
        case 'screenrecord':
          signal.subscribe(
            record::record.connectSignals
          );
          record.run(configs);
          break;
      }
    }

  } catch(e) {
    console.error('>>>>>>>> ERROR', e, e.stack);
    throw e;
  }
}

main();
*/
