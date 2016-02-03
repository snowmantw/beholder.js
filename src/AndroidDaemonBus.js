'use strict';

import child_process from 'child_process';

export	function commandDevice(adbPath, envs) {
  return (...args) => {
    let result;
    checkDaemonServer();
    waitDevice();
    if (envs) {
      result = child_process.execFileSync(adbPath, args, {
        'env': envs
      });
    } else {
      result = child_process.execFileSync(adbPath, args);
    }
    waitDevice();
    return result;
  }
}

export function waitDevice(adbPath) {
  return () => {
		child_process.execFileSync(adbPath, ['wait-for-device']);
	}
}

export function checkDaemonServer(adbPath) {
  return () => {
		child_process.execFileSync(adbPath, ['start-server']);
  }
}
