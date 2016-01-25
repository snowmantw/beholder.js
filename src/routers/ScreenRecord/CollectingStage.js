'use strict';

import child_process from 'child_process';
import path from 'path';
import csp from 'js-csp';
import Router from 'routers/Router';
import TerminatingStage from 'routers/ScreenRecord/TerminatingStage';

// TODO: We need to do time alignment in this stage when it's ready.
export default class CollectingStage extends Router {

  constructor(previousStageInstance) {
    super(previousStageInstance);
    this.configs = previousStageInstance.configs;
    this._name = this._previousStage._name;
    this._consoleTargetPath = this.configs.path.record.target.console;
    this._ffmpegPath = this.configs.path.ffmpeg;
    this._extractedFramesPath =
      this._buildExtractedFramesPath(this._consoleTargetPath);
  }

  start() {
    //ffmpeg -i <the file> ./temp/image%08d.png
		child_process.execFile(this._ffmpegPath,
      ['-i', this._consoleTargetPath, this._extractedFramesPath],
      (error) => {
        console.log('>>>>>> error: ', error);
        if (error) { this._transferredDeferred.reject(error); }
        if (!error) { this._transferredDeferred.resolve(); }
      });
    console.log('>>>> done FFMPEG');
    return this._transferredDeferred.promise;
  }

  _buildExtractedFramesPath(consoleTargetPath) {
    return `${consoleTargetPath}_extracted%08d.png`;
  }

  _onStageChange(stage) {
    switch(stage) {
      case 'terminating':
console.log('>>>> because of terminating shift to the new stage');
        this._transferToTerminatingStage();
        break;
    }
  }

  _transferToTerminatingStage() {
    this._transferTo(TerminatingStage);
  }
}
