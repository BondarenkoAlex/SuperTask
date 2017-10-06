const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: process.env.NODE_ENV === "development"
        ? "styles/[name].[contenthash].css"
        : 'styles/[name].css',
      allChunks: true,
    })
  ]
};
