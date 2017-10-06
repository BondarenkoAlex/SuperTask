module.exports = {
  module: {
    rules: [{
      test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    }],
  }
}

