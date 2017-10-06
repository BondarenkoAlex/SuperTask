const webpack = require('webpack');
const project = require('./../project.config.js');

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: project.env,
      DEBUG: false
    })
  ]
};
