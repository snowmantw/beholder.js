'use strict';

export default class Timeline {
  constructor(timestamp) {
    this._timestamp = timestamp;
    this._slots = {};
  }

  push(source, data) {
    if (this._slots[source]) {
      throw new Error('The same source should not have two data at the same time');
    }
    this._slots[source] = data;
  }
}
