'use strict';

import util from 'util';
import fs from 'fs';
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
    // XXX: make chunks and a better serializing way to prevent writing blocks.
    let strTimeline = JSON.stringify(this._timeline);
    let writingDefer = new Defer();
    let stream = fs.createWriteStream(this.configs.path.output);

    console.log(this._name, Date.now(),
      `Write the file "${ this.configs.path.output }" with report of timeline collecting out:`,
      util.inspect(this._timeline));

    if (!stream.write(strTimeline)) {
      stream.on('drain', () => {
        stream.write(strTimeline);
      });
    }
    stream.on('error', writingDefer.reject);
    stream.end();
    stream.on('finish', writingDefer.resolve);

    defer.promise = defer.promise.then(() => {
      return writingDefer.promise;
    }).catch((e) => {
      console.error('Error occured when waiting the file writing out');
      throw e;
    });
  }

  _onInitialize(routers) {
    super._onInitialize.apply(this, arguments);
    Object.keys(routers).forEach((name) => {
      let router = routers[name];
      switch (name) {
        case 'screenrecord':
        case 'devicelog':
          router.subscribe(this._connect.bind(this));
          break;
      }
    });
    this._consumeMessage();
  }

  _connect(publication) {
    csp.operations.pub.sub(publication, 'log', this._inputChannel);
  }

  _consumeMessage() {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (csp.CLOSED !== value) {
        console.log(this._name, Date.now(),
          `Received a message of collected data: ${ util.inspect(value) } `);
        this._onInput(value);
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  /**
   * Once we collect different channels into one, we only care about their common attributes.
   */
  _onInput(value) {
    let source = value.source;
    if (!value.payload) { return; }
    if (!this._checkLogValid(value.payload)) { return; }
    let { offset, type, content } = value.payload;
    if (!this._timeline[offset]) {
      this._timeline[offset] = new TimelineRecord(offset);
    }
    this._timeline[offset].push(source, type, content);
  }

  _checkLogValid(log) {
    if (!log.offset || !log.type || !log.content) {
      return false;
    } else {
      return true;
    }
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
