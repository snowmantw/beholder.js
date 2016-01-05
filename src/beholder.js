'use strict';

import Command from 'modules/Command'
import Configure from 'modules/Configure'
import Raptor from 'modules/Raptor';
import Log from 'modules/Log';
import Error from 'modules/Error';
import ScreenRecord from 'modules/ScreenRecord';
import DeviceLog from 'modules/DeviceLog';

export async function main() {
  try {
    let raptor = new Raptor();
    let log = new Log();
    let error = new Error();
    let record = new ScreenRecord();
    let configure = new Configure();
    let devicelog = new DeviceLog();

    let configs = configure.setup();

    // Run modules before connecting them.
    //record.run(configs);

    // Passive modules do not need configs: they only need channel results.
    log.run();
    error.run();

    for (let moduleIdendity of configs.modules) {
      switch(moduleIdendity) {
        case 'adb':
          devicelog.subscribe(
            log::log.connect,
            error::error.errorFromLogChannel,
            error::error.errorFromErrorChannel,
          ).run(configs);
          break;
        case 'raptor':
          for (let testFilePath of configs.tests) {
            raptor.subscribe(
              log::log.connect,
              error::error.connect,
              //record::record.connect
            ).run(configs, testFilePath);
          }
          break;
      }
    }

  } catch(e) {
    console.error('>>>>>>>> ERROR', e, e.stack);
    throw e;
  }
}

main();
