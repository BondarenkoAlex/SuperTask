const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: process.env.NODE_ENV === "development"
    ? "styles/[name].[contenthash].css"
    : 'styles/[name].css',
  allChunks: true,
});

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ]
};
