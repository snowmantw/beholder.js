'use strict';

export default class Log {
  constructor() {
    this._store = [];
  }

  push(data) {
    this._store.push(data);
  }
}
