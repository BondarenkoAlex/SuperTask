module.exports = {
  module: {
    rules: [{
      test: /\.(jpe?g|jpg|png|gif|svg)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    }],
  },
};
