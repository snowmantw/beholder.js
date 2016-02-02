'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import Defer from 'Defer';
import { default as TimelineRecord } from 'record/Timeline';

export default class Timeline extends Router {

  constructor(configs) {
    super(configs);
    this._name = 'timeline';
    this._timeline = {};
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

  _recording() {}
  _collecting() {}

  /**
   * In fact we only need one stage. However, to keep interface aligned,
   * we do the same thing like other routers.
   */
  _terminating(defer) {
    console.log('........... try to output timeline: ', JSON.stringify(this._timeline));
    csp.putAsync(this._outputChannel,
      {'topic': 'data', 'source': this._name, 'payload': this._timeline});
  }

  _onInitialized(routers) {
    super._onInitialized.apply(this, arguments);
    Object.keys(routers).forEach((name) => {
      let router = routers[name];
      switch (name) {
        case 'screenrecord':
        case 'devicelog':
          router.subscribe(this._connect);
          break;
      }
    });
  }

  _connect(publication) {
    csp.operations.pub.sub(publication, 'log', this._input);
    csp.operations.pub.sub(publication, 'error', this._input);
    this._consumeMessage();
  }

  _consumeMessage() {
    csp.go((function*() {
      let value = yield this._input;
      while (csp.CLOSED !== value) {
        this._onInput(value);
        value = yield this._input;
      }
    }).bind(this));
  }

  /**
   * Once we collect different channels into one, we only care about their common attributes.
   */
  _onInput(value) {
    let source = value.source;
    let { timestamp, data } = value.payload.detail;
    if (!this._timeline[timestamp]) {
      this._timeline[timestamp] = new TimelineRecord(timestamp);
    }
    this._timeline[timestamp].push(source, data);
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
