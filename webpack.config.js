'use strict';
var path = require('path');
module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './src/beholder.js'],
  devtool: 'inline-source-map',
  output: {
    filename: 'beholder.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs'
  },
  node: {__dirname: true, __filename: true},
  resolve: { root: path.resolve('./src') },
  externals: ['time'],
  module: {
    loaders: [
      { include: path.resolve(__dirname, './src'),
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
				query: {
          presets: ['es2015', 'stage-0'],
        }
			}
    ]
  }
};
