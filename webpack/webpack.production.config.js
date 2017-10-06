const merge          = require('webpack-merge');
const commonConfig   = require('./webpack.common.config.js');
const uglifyJsPlugin = require('./plugins/uglifyJsPlugin.config.js');

module.exports = merge(
  commonConfig,
  uglifyJsPlugin
);

