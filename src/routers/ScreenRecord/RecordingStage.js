'use strict';

import fs from 'fs';
import os from 'os';
import child_process from 'child_process';
import temp from 'temp';
import csp from 'js-csp';
import Router from 'routers/Router';
import CollectingStage from 'routers/ScreenRecord/CollectingStage';
import TerminatingStage from 'routers/ScreenRecord/TerminatingStage';

export default class RecordingStage extends Router {

  constructor(configsInstance) {
    super(configsInstance);
    this.configs = configsInstance;
    this._name = 'screenrecord';
		this._userPreferences = null;
    this._preferenceName = 'layers.screen-recording.enabled';
		this._preferencesPath = '/system/b2g/defaults/pref/user.js';
		this._preferencesTempFilePath = temp.path();
    this._deviceTargetPath = this.configs.path.record.target.device;
    this._consoleTargetPath = this.configs.path.record.target.console;
		this._adbPath = this.configs.path.adb;
  }

  start() {
    this._fetchPreferences(this._preferencesPath);
    this._setPreference();
    this._runCommand(this._deviceTargetPath, this._consoleTargetPath);
    return this._transferredDeferred.promise;
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

	_runCommand(deviceTargetPath, consoleTargetPath) {
    let runIt = child_process.spawn(
      this._adbPath,
      ['shell', 'screenrecord', deviceTargetPath],
      { detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runIt.on('close', (status) => {
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });

    this._transferredDeferred.promise =
      this._transferredDeferred.promise.then(() => {
        return new Promise((resolve, reject) => {
          try {
            // The recording command needs a SIGINT to stop recording.
            runIt.kill('SIGINT');
            runIt.on('exit', () => {
              // Heuristically waiting header writing done.
              setTimeout(() => {
                // TODO: wait the killing done or racing?
                this._commandDevice('pull', deviceTargetPath, consoleTargetPath);
                if('darwin' === os.platform()) {
                  // Or the file won't open.
                  this._changeDarwinDefaultGroup(consoleTargetPath);
                }
                console.log('>>>>> pull down', Date.now());
                resolve();
              }, 500);
            });
          } catch(e) {
            console.error('Error occurs when handling the pulling');
            reject(e);
          }
        });
      }).catch((e) => {
        console.error(e);
        throw e;
      });
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
			this._commandDevice('reboot');
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
			this._commandDevice('reboot');
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
			this._commandDevice('root');
			this._commandDevice('remount');
			this._commandDevice('push', this._preferencesTempFilePath, this._preferencesPath);
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
			this._commandDevice('shell', 'cat', preferencePath).toString();
		try {
			this._userPreferences = this._evalPrefs(strPrefs);
			return this._userPreferences;
		} catch(e) {
			console.error('Error occurs when reading the preferences: ', e);
			throw e;
		}
	}

	_commandDevice(...args) {
		let result = child_process.execFileSync(this._adbPath, args);
		this._waitDevice();
		return result;
	}

	_waitDevice() {
		child_process.execFileSync(this._adbPath, ['wait-for-device']);
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

  _transferToCollectingStage() {
    this._transferTo(CollectingStage);
  }

  _transferToTerminatingStage() {
    this._transferTo(TerminatingStage);
  }
}
