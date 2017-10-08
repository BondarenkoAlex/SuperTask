const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ],
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
