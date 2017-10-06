const project = require('./project.config.js');

const babelLoader        = require('./loaders/babel-loader.config.js');
//const cssLoader          = require('./loaders/css-loader.config.js');
const scssLoader         = require('./loaders/scss-loader.config.js');
//const imageLoader        = require('./loaders/image-loader.config.js');
const fileLoader        = require('./loaders/file-loader.config.js');
const htmlWebpackPlugin  = require('./plugins/htmlWebpackPlugin.config.js');
const commonsChunkPlugin = require('./plugins/commonsChunkPlugin.config.js');
const environmentPlugin  = require('./plugins/environmentPlugin.config.js');

const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const __DEV__  = project.env === 'development';
const __PROD__ = project.env === 'production';
//const __TEST__ = project.env === 'test';

module.exports = merge({
    devtool: __DEV__
      ? 'cheap-inline-module-source-map'
      : 'source-map',
    context: path.resolve(project.basePath, project.srcDir),
    entry: {
      main: project.main,
      vendor: project.vendors,
    },
    output: {
      path: path.resolve(project.basePath, `${project.outDir}`),
      publicPath: project.publicPath,
      filename: __DEV__
        ? '[name].[hash].js'
        : '[name].js',
    },
    externals: project.externals,
    resolve: {
      modules: [
        path.resolve(project.basePath, project.srcDir),
        'node_modules',
      ],
      extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ],
  },
  babelLoader,
  //cssLoader,
  scssLoader,
  //imageLoader,
  fileLoader,
  htmlWebpackPlugin,
  commonsChunkPlugin,
  environmentPlugin
);

