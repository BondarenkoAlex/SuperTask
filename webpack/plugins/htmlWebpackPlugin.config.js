const project           = require('./../project.config.js');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(project.basePath, `${project.publicDir}/index.html`),
      filename: 'index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
