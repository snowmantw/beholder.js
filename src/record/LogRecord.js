'use strict';

export default class LogRecord {
  constructor() {
    this._store = [];
  }

  push(data) {
    this._store.push(data);
  }
}
