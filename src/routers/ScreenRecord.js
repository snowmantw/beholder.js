'use strict';

import csp from 'js-csp';
import temp from 'temp';
import os from 'os';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import Router from 'routers/Router';
import Defer from 'Defer';
import { checkDaemonServer, commandDevice } from 'AndroidDaemonBus';

export default class ScreenRecord extends Router {

  constructor(configs) {
    super(configs);
    this._name = 'screenrecord';
    // XXX: Currently we only have 16ms.
    this._recordFPS = 16;
    this._extractedFrameFileType = 'png';
		this._userPreferences = null;
    this._preferenceName = 'layers.screen-recording.enabled';
		this._preferencesPath = '/system/b2g/defaults/pref/user.js';
		this._preferencesTempFilePath = temp.path();
    this._deviceTargetPath = this.configs.path.record.target.device;
    this._consoleTargetPath = this.configs.path.record.target.console;
		this._adbPath = this.configs.path.adb;

    this._ffmpegPath = this.configs.path.ffmpeg;
    this._extractedFramesPath =
      this._buildExtractedFramesPath(this._consoleTargetPath);
  }

  start() {
    // Concat the first stage handler.
    this._transferToRecordingStage();
    // Kick-off it.
    this._stages.resolve();
  }

  stop() {
    this._stopListenToControlChannel();
    this._closeChannels();
  }

  _recording(defer) {
    checkDaemonServer(this._adbPath);
    this._fetchPreferences(this._preferencesPath);
    this._setPreference();

    let runIt = child_process.spawn(
      this._adbPath,
      ['shell', 'screenrecord', this._deviceTargetPath],
      { detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      csp.putAsync(this._outputChannel,
        {'topic': 'log', 'source': this._name, 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      csp.putAsync(this._outputChannel,
        {'topic': 'error', 'source': this._name, 'payload': data})
    });
    runIt.on('close', (status) => {
      csp.putAsync(this._outputChannel,
        {'topic': 'status', 'source': this._name, 'payload': status});
    });

    let onKillDefer = new Defer();
    runIt.on('exit', () => {
      setTimeout(() => {
      try {
        commandDevice(this._adbPath)('pull',
          this._deviceTargetPath, this._consoleTargetPath);
        if('darwin' === os.platform()) {
          // Or the file won't open.
          this._changeDarwinDefaultGroup(this._consoleTargetPath);
        }
        onKillDefer.resolve();
      } catch(e) {
          console.error('Error while transferring in ScreenRecord', e);
          throw e;
      }
      }, 500);
    });

    defer.promise =
      defer.promise.then(() => {
        runIt.kill('SIGINT');
        return onKillDefer.promise;
      }).catch((e) => {
        console.error(e);
        throw e;
      });
  }

  _collecting(defer) {
    if (0 === fs.lstatSync(this._consoleTargetPath).size) {
      // Recorded nothing.
      return;
    }
		let watcher = fs.watch(path.dirname(this._consoleTargetPath),
    (event, filename) => {
			if (filename && '.' + this._extractedFrameFileType === path.extname(filename)) {
        let fullPath = `${path.dirname(this._consoleTargetPath) + path.sep + filename}`;
        csp.putAsync(this._outputChannel, {'topic': 'log', 'source': this._name,
          'payload': {'type': 'extractedframe', 'detail': fullPath} });
			}
		});

    let commandDefer = new Defer();
    //ffmpeg -i <the file> ./temp/image%08d.png
    child_process.execFile(this._ffmpegPath,
      ['-i', this._consoleTargetPath, this._extractedFramesPath],
      (error) => {
        watcher.close();
        console.log('........... The end of extracting frames ', Date.now());
        if (error) {
          console.error(error);
          commandDefer.reject(error);
        } else {
          commandDefer.resolve();
        }
    });
    return commandDefer.promise;
  }

  _terminating(defer) {
    csp.putAsync(this._outputChannel,
      {'topic': 'data', 'source': this._name, 'payload': this._pathExtractedFrames});
  }

	_setPreference() {
		let userPreferences = this._fetchPreferences(this._preferencesPath);
		if (!!userPreferences[this._preferenceName]) {
			return;  // The preference has been set
		}
		userPreferences[this._preferenceName] = true;
		try {
			this._putPreferences(userPreferences);
		} catch(e) {
			console.error('Error occurs when put the updated preferences back', e);
			throw e;
		} finally {
			this._clearLocalPreferences();
      commandDevice(this._adbPath)('reboot');
		}
	}

	_unsetPreference() {
		let userPreferences = this._fetchPreferences(this._preferencesPath);
		if (!this._userPreferences[this._preferenceName]) {
			return;  // The preference has been unset
		}
		delete this._userPreferences[this._preferenceName];
		try {
			this._putPreferences(this._userPreferences);
		} catch(e) {
			console.error('Error occurs when put the updated preferences back', e);
			throw e;
		} finally {
			this._clearLocalPreferences();
			commandDevice(this._adbPath)('reboot');
		}
	}

	_putPreferences(preferences) {
		try {
			let lines = Object.keys(preferences).map(function(key) {
				let value = preferences[key];
        if ('string' !== typeof value) {
          return `pref('${key}', ${value});`;
        } else {
          return `pref('${key}', "${value}");`;
        }
			});
			fs.writeFileSync(this._preferencesTempFilePath, lines.join('\n'));
			commandDevice(this._adbPath)('root');
			commandDevice(this._adbPath)('remount');
			commandDevice(this._adbPath)('push',
        this._preferencesTempFilePath, this._preferencesPath);
		} finally {
			fs.access(this._preferencesTempFilePath, fs.F_OK, (accessError) => {
				if (!accessError) {
					fs.unlinkSync(this._preferencesTempFilePath);
				}
			});
		}
	}

	// Clear the cached and contaminated version.
	_clearLocalPreferences() {
		delete this._userPreferences;
	}

	_fetchPreferences(preferencePath) {
		if (this._userPreferences) {
			return this._userPreferences;
		}
		let strPrefs =
			commandDevice(this._adbPath)('shell', 'cat', preferencePath);
		try {
			this._userPreferences = this._evalPrefs(strPrefs);
			return this._userPreferences;
		} catch(e) {
			console.error('Error occurs when reading the preferences: ', e);
			throw e;
		}
	}

	// Otherwise it's difficult to grep the preference and it's value.
	_evalPrefs(strPrefs) {
		let preferences = {};
		let pref = function(entry, value) {
			preferences[entry] = value;
		};
		eval(strPrefs); //eslint-disable-line
		return preferences;
	}

  _changeDarwinDefaultGroup(recordFilePath) {
    child_process.execSync(`chgrp staff ${recordFilePath}`);
  }

  _buildExtractedFramesPath(consoleTargetPath) {
    return `${consoleTargetPath}_%08d_.${this._extractedFrameFileType}`;
  }

  _onInitialized(initializedRouters) {
    super._onInitialized.apply(this, arguments);
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'collecting':
        this._transferToCollectingStage();
        break;
      case 'terminating':
        this._transferToTerminatingStage();
        break;
    }
  }

  _transferToRecordingStage() {
    this._transferTo(this._recording);
  }

  _transferToCollectingStage() {
    this._transferTo(this._collecting);
  }

  _transferToTerminatingStage() {
    this._transferTo(this._terminating);
  }
}
