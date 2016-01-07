'use strict';

import fs from 'fs';
import temp from 'temp';
import csp from 'js-csp';
import child_process from 'child_process';
import Command from 'modules/Command';
import Defer from 'Defer';

export default class ScreenRecord extends Command {

  constructor() {
    super();
		this._userPreferences = null;
    this._preferenceName = 'layers.screen-recording.enabled';
		this._preferencesPath = '/system/b2g/defaults/pref/user.js';
		this._preferencesTempFilePath = temp.path();
		this._adbPath = '';
  }

	run({path: { adb: adbPath,
							 record: { target: { device: deviceTargetPath,
																	 console: consoleTargetPath } }
						 }}) {
		this._adbPath = adbPath;
		this._fetchPreferences(this._preferencesPath);
    console.log('>>>> call setPreference');
		this._setPreference();
		return this._runCommand(deviceTargetPath, consoleTargetPath);
	}

  connectSignals(publication, closeHandler) {
    csp.operations.pub.sub(publication, this._topic, this._inputChannel);
    this._consumeSignals();
  }

	_consumeSignals() {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (true) {
        if ('termination' === value.payload) {
          this.close();
        }
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

	_runCommand(deviceTargetPath, consoleTargetPath) {
    this._channelCloseDeferred = new Defer();
    console.log('>>>> start to record: ', deviceTargetPath, '|', consoleTargetPath);
    let runIt = child_process.spawn(
      this._adbPath,
      ['shell', 'screenrecord', deviceTargetPath],
      { detached: true }
    );
    runIt.unref();
    runIt.stdout.on('data', (data) => {
console.log('>>>>>> recording the device');
      csp.putAsync(this._outputChannel, {'topic': 'log', 'payload':  data});
    });
    runIt.stderr.on('data', (data) => {
      csp.putAsync(this._outputChannel, {'topic': 'error', 'payload': data})
    });
    runIt.on('close', (status) => {
      csp.putAsync(this._outputChannel, {'topic': 'status', 'payload': status});
    });

    return this._channelCloseDeferred.promise.then(() => {
console.log('>>>>>>> pulling the record');
			child_process.execFileSync(this._adbPath,
				['pull', deviceTargetPath, consoleTargetPath]);
		});
	}

	_setPreference() {
		let userPreferences = this._fetchPreferences(this._preferencesPath);
console.log('>>>>> already set it');
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
}
