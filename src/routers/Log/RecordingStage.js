'use strict';

import csp from 'js-csp';
import Router from 'routers/Router';
import CollectingStage from 'routers/Log/CollectingStage';
import TerminatingStage from 'routers/Log/TerminatingStage';

import { default as LogRecord } from 'record/Log';

export default class RecordingStage extends Router {

  constructor() {
    super(arguments);
    // Router name: 'log'
    this._name = 'log';

    // The devicelog router will emit log/error.
    this._deviceLogTopic = 'log';
  }

  start() {
    this._record = new LogRecord();
  }

  _onInitialized(initializedRouters) {
    super();
    this._routers.devicelog.subscribe(this::this._connectToDeviceLog);
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'collecting':
        this.stop();
        this._transferToCollectingStage();
        break;
      case 'terminating':
        this.stop();
        this._transferToTerminatingStage();
        break;
    }
  }

  _onLog(log) {
    this._record.push(log);
  }

  /**
   * Note: this router ignores the `transferredDeferred` because
   * after the stage transferred, there is no need to listen to
   * the devicelog router again, so we don't need to reconnect to it.
   */
  _connectToDeviceLog(publication, transferredDeferred) {
    csp.operations.pub.sub(publication,
        this._deviceLogTopic, this._inputChannel);
    this._consumeLogs();
  }

  _consumeLogs() {
    csp.go((function*() {
      let value = yield this._inputChannel;
      while (true) {
        this._onLog(value);
        value = yield this._inputChannel;
      }
    }).bind(this));
  }

  _transferToCollectingStage() {
    this._transferTo(CollectingStage);
  }

  _transferToTerminatingStage() {
    this._transferTo(TerminatingStage);
  }
}
