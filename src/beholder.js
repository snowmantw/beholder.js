'use strict';

import Stage from 'modules/Command'
import Configure from 'modules/Configure'
import Raptor from 'modules/Raptor';
import LogRecordingStage from 'modules/LogRecordingStage';
import Error from 'modules/Error';
import ScreenRecord from 'modules/ScreenRecord';
import DeviceLog from 'modules/DeviceLog';
import Signal from 'modules/Signal';

class Beholder extends Command {

  constructor() {
    super();
    this._signalChannel = csp.chan();
  }

  start() {
    this.modules = {
      raptor: new Raptor(),
      log: new LogRecordingStage(),
      error: new Error(),
      screenrecord: new ScreenRecord(),
      configure: new Configure(),
      devicelog: new DeviceLog(),
      signal: new Signal()
    };
    this.configs = configure.setup();
  }

  _initializeModules() {
    let mainModule;
    let initialized = {};
    let mainModuleIdentity = this.configs.modules.__main_module__;

    for (let moduleIdendity of this.configs.modules) {
      let module = this.modules[moduleIdendity];
      let afterRun = module.run(this.configs);
      this.subscribe(module::module.connectToController);
      initialized[moduleIdendity] = { module, afterRun };
      if (mainModuleIdentity === moduleIdendity) {
        mainModule = module;
      }
    }
    if (!mainModule) {
      throw new Error(`Found no main module: ${mainModuleIdentity}`);
    }
    this._modulesInitialized = initialized;

    // So that modules could connect to each other by themselves.
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'initialized', 'detail': initialized} });

    // Controller needs to listen to signals.
    this.modules.signal.subscribe(this::this._connectToSignals);
    mainModule.subscribe(this::this._connectToMainModule);

    // TODO: the main need to be connected as well.
    // For example, the Raptor module.
    // Although it needs a stage transferring, rather than redirect to the termination.
  }

  async _terminate() {
    let waitAllTerminated = Promise.all(Object.keys(this._modulesInitialized)
        .map((moduleIdendity) => {
          let { module, afterRun } = this._modulesInitialized[moduleIdendity];
          return afterRun;
        }));
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': 'termination'} });
    await waitAllTerminated;
    process.exit(1);   // aborted; so it's a failure.
  }

  _connectToMainModule(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'stage', this._signalChannel);
    this._consumeStageChanges();
  }

  _connectToSignals(publication, closeHandler) {
    csp.operations.pub.sub(publication, 'status', this._signalChannel);
    this._consumeSignals();
  }

	_consumeSignals() {
    csp.go((function*() {
      let value = yield this._signalChannel;
      while (true) {
        if ('termination' === value.payload) {
          console.log('>>>>> got signal termination', 'Controller');
          this._terminate();
        }
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  /**
   * Main module should fire stage change messages, so other modules could
   * change their stage as well. And since modules have all the initialized
   * ones, they can handle the re-subscription issues by themselves.
   */
  _consumeStageChanges() {
    csp.go((function*() {
      let value = yield this._signalChannel;
      while (true) {
        this._dispatchStage(value.payload);
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  _dispatchStage(stage) {
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'stagechange', 'detail': stage} });
  }
}

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
        /*
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
          */
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
