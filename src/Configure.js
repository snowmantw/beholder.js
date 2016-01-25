'use strict';

import getopt from 'node-getopt';
import fs from 'fs';
import path from 'path';

export default class Configure {
  constructor() {
		this.opts = getopt.create([
			['r', 'raptor=ARG' , 'where the raptor executable file is'],
			['p', 'phase=ARG' , 'where the running phase is'],
			['c', 'config=ARG', 'config file (command line arguments will surpass it)'],
      ['',  'adb=ARG', 'where the `adb` command is'],
      ['',  'ffmpeg=ARG', 'where the `ffmpeg` command is'],
			['',  'record-target-device=ARG', 'where to put the record on the device'],
			['',  'record-target-console=ARG', 'where to pull the record to the console'],
      ['r', 'routers=ARG+', 'invoke what routers'],
      ['',  'main=ARG', 'default is Raptor; once it ends the process will end, too'],
			['h', 'help', 'display this help'],
			['v', 'version', 'show version']
		])
		.bindHelp('Usage: beholder <test-file-path> --<optional options>');
    // TODO: print all available routers after some special help command.
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

  validateFFMPEG(configs) {
    try {
      fs.accessSync(configs.path.ffmpeg);
    } catch(e) {
      console.error(`Cannot access the FFMPEG: "${configs.path.ffmpeg}"`);
      throw e;
    }
  }

	validateRecordConsoleTarget(configs) {
    try {
      fs.accessSync(path.dirname(configs.path.record.target.console));
    } catch(e) {
      console.error(`Cannot access the target to put the target: "${configs.path.record.target.console}"`);
      throw e;
    }
	}

  validateModuleCommands(configs) {
    for (let routerIdendity of configs.routers) {
      switch(routerIdendity) {
        case 'raptor':
          this.validateRaptor(configs);
          break;
        case 'phase':
          this.validatePhase(configs);
          break;
        case 'adb':
          this.validateAndroidDaemonBus(configs);
          break;
				case 'screenrecord':
          this.validateFFMPEG(configs);
          this.validateAndroidDaemonBus(configs);
					this.validateRecordConsoleTarget(configs);
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
    defaultConfigs.path.ffmpeg = options.ffmpeg || defaultConfigs.path.ffmpeg;

		// For ScreenRecord module.
    defaultConfigs.path.record = defaultConfigs.path.record || {
			target: { console: null, device: null }
		};
		defaultConfigs.path.record.target.device = options['record-target-device'] ||
			defaultConfigs.path.record.target.device;
		defaultConfigs.path.record.target.console = options['record-target-console'] ||
			defaultConfigs.path.record.target.console;

    defaultConfigs.routers = options.routers|| defaultConfigs.routers || [];
    defaultConfigs.routers.__main__ = options['main'] ||
      defaultConfigs.routers.__main__|| 'raptor';

    if (!defaultConfigs.routers.includes('signal')) {
      defaultConfigs.routers.push('signal');
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
