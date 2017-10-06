const project = require('./../project.config.js');
const path              = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(project.basePath, './public/*.html'),
        to: path.resolve(project.basePath, `${project.outDir}/[name].[ext]`),
      },
    ])
  ]
};
