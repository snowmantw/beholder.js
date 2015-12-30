'use strict';

import Configure from 'modules/Configure'
import Raptor from 'modules/Raptor';
import Log from 'modules/Log';
import Error from 'modules/Error';
import ScreenRecord from 'modules/ScreenRecord';

export async function main() {
  try {
    let raptor = new Raptor();
    let log = new Log();
    let errro = new Error();
    let record = new ScreenRecord();
    let configure = new Configure();

    let configs = configure.setup();
    for (let testFilePath of configs.tests) {
      await raptor.subscribe(
        log::log.connect,
        //error::error.connect,
        //record::record.connect
      ).invoke(configs, testFilePath);
    }
  } catch(e) {
    console.error(e, e.stack);
    throw e;
  }
}
main();
