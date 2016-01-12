'use strict';

import Stage from 'modules/Stage'
import Configure from 'modules/Configure'
import Raptor from 'modules/Raptor';
import Log from 'modules/Log';
import Error from 'modules/Error';
import ScreenRecord from 'modules/ScreenRecord';
import DeviceLog from 'modules/DeviceLog';
import Signal from 'modules/Signal';

class Beholder extends Stage {

  constructor() {
    super();
    this._signalChannel = csp.chan();
  }

  start() {
    this.modules = {
      raptor: new Raptor(),
      log: new Log(),
      error: new Error(),
      screenrecord: new ScreenRecord(),
      configure: new Configure(),
      devicelog: new DeviceLog(),
      signal: new Signal()
    };
    this.configs = configure.setup();
  }

  _initializeModules() {
    let initialized = {};
    for (let moduleIdendity of this.configs.modules) {
      let module = this.modules[moduleIdendity];
      let afterRun = module.run(this.configs);
      this.subscribe(module::module.connectToController);
      initialized[moduleIdendity] = { module, afterRun };
    }
    this._modulesInitialized = initialized;

    // So that modules could connect to each other by themselves.
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'modules-initialized', 'detail': initialized} });

    // Controller needs to listen to signals.
    this.modules.signal.subscribe(this::this._connectToSignals);
  }

  async _terminate() {
    let waitAllTerminated = Promise.all(Object.keys(this._modulesInitialized)
        .map((moduleIdendity) => {
          let { module, afterRun } = this._modulesInitialized[moduleIdendity];
          return afterRun;
        }));
    csp.putAsync(this._outputChannel, {'topic': 'status',
      'payload': {'type': 'termination'} });
    await waitAllTerminated;
    process.exit(1);   // aborted; so it's a failure.
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
}

export async function main() {
  try {
    let raptor = new Raptor();
    let log = new Log();
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
