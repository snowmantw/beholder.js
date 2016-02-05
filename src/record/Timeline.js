'use strict';

export default class Timeline {
  constructor(offset) {
    this._offset = offset;
    this._slots = {};
  }

  push(source, type, content) {
    if (this._slots[source]) {
      this._slots[source].push({ type, content });
    } else {
      this._slots[source] = [{ type, content }];
    }
  }
}
