'use strict';

import getopt from 'node-getopt';
import fs from 'fs';

export default class Configure {
  constructor() {
		this.opts = getopt.create([
			['r', 'raptor=ARG' , 'where the raptor executable file is'],
			['p', 'phase=ARG' , 'where the running phase is'],
			['c', 'config=ARG', 'config file (command line arguments will surpass it)'],
      ['',  'adb=ARG', 'where the `adb` command is`'],
      ['m', 'modules=ARG+', 'invoke what modules'],
			['h', 'help', 'display this help'],
			['v', 'version', 'show version']
		])
		.bindHelp('Usage: beholder <test-file-path> --<optional options>');
	}

  setup() {
    return this.build(...this.getopts());
  }

  /**
   * Will throw error when carrying invalid options.
   */
  build(argv, options) {
    let testFilePaths = argv;
    this.validateTestFiles(testFilePaths);
    let configs = this.fromOptions(options);
    configs.tests = testFilePaths;
    this.validateModuleCommands(configs);
    return configs;
  }

  getopts() {
    let parsedOptions = this.opts.parseSystem();
		// parse command line and get the result.
		this.opts = parsedOptions.options;
    this.argv = parsedOptions.argv;
		return [this.argv, this.opts];
  }

  validateTestFiles(testFilePaths) {
    if (0 === testFilePaths.length) {
      throw new Error('Must specify test files.' +
        'Example: beholder test-1.js test-2.js');
    }
    testFilePaths.forEach((path) => {
      try {
        fs.accessSync(path);
      } catch(e) {
        console.error('Cannot access the test: ', path);
        throw e;
      }
    });
  }

  validateRaptor(configs) {
    try {
      fs.accessSync(configs.path.raptor);
    } catch(e) {
      console.error(`Cannot access the Raptor command: "${configs.path.raptor}"`);
      throw e;
    }
  }

  validatePhase(configs) {
    try {
      fs.accessSync(configs.path.phase);
    } catch(e) {
      console.error(`Cannot access the running phase: "${configs.path.phase}"`);
      throw e;
    }
  }

  validateAndroidDaemonBus(configs) {
    try {
      fs.accessSync(configs.path.adb);
    } catch(e) {
      console.error(`Cannot access the Android daemon bus: "${configs.path.adb}"`);
      throw e;
    }
  }

  validateModuleCommands(configs) {
    for (let moduleIdendity of configs.modules) {
      switch(moduleIdendity) {
        case 'raptor':
          this.validateRaptor(configs);
          break;
        case 'phase':
          this.validatePhase(configs);
          break;
        case 'adb':
          this.validateAndroidDaemonBus(configs);
          break;
      }
    }
  }

  fromOptions(options) {
    let defaultConfigs;
    options.config = options.config;
    if (options.config) {
      defaultConfigs = require(options.config);
    } else {
      defaultConfigs = this.generateDefaultConfigs();
    }

    // Overwrite the existent one in the default file.
    defaultConfigs.path.phase = options.phase || defaultConfigs.path.phase;
    defaultConfigs.path.raptor = options.raptor || defaultConfigs.path.raptor;
    defaultConfigs.path.adb = options.adb || defaultConfigs.path.adb;
    defaultConfigs.modules = options.modules || defaultConfigs.modules || [];
    if (!defaultConfigs.modules.includes('raptor')) {
      defaultConfigs.modules.push('raptor');
    }
    if (!defaultConfigs.modules.includes('phase')) {
      defaultConfigs.modules.push('phase');
    }
    return defaultConfigs;
  }

  generateDefaultConfigs() {
    return {
      path: {
        phase: '',
        raptor: ''
      },
      tests: []
    };
  }
}
