'use strict';

import csp from 'js-csp';
import Command from 'modules/Command';
import LogRecord from 'record/LogRecord';

import CollectingStage from 'modules/Log/CollectingStage';
import TerminatingStage from 'modules/Log/TerminatingStage';

/**
 * Collect data from original device logs.
 */
export default class RecordingStage extends Command {
  constructor() {
    super();
    this._record = new LogRecord();
    this._logsPublication = null;
    this._topicLog = 'log';
    this._devicelogChannel = csp.chan();
  }

  /**
   * Logs pop-up from the channel will be captrued and consumed by the
   * corresponding internal method.
   */
  connectToLogs(publication) {
    this._logsPublication = publication;
    csp.operations.pub.sub(publication, this._topic, this._inputChannel);
    // Start to iterate the channel.
    this._consumeLogs();
  }

  _consumeLogs() {
    csp.go((function*() {
      let value = yield this._devicelogChannel;
      while (true) {
        this._onLog(value);
        value = yield this._devicelogChannel;
      }
    }).bind(this));
  }

  _onInitialized(modules) {
    modules.devicelog.subscribe(this::this.connectToLogs);
  }

  _onLog(log) {
    this._record.push(log);
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'collecting':
        this._stop();
        this._stopListenControlChannel()
        this._transferToCollectingStage();
        break;
      case 'terminating':
        this._stop();
        this._stopListenControlChannel()
        this._transferToTerminatingStage();
        break;
    }
  }

  _stop() {
    csp.operations.pub.unsub(
      this._logsPublication, this._topicLog, this._devicelogChannel);
  }

  _transferToCollectingStage() {
    let collectingStage = new CollectingStage(this);
  }

  _transferToTerminatingStage() {
    let terminatingStage = new TerminatingStage(this);
  }
}
