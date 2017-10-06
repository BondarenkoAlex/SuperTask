module.exports = function (/*env*/) {
  const environment = process.env.NODE_ENV || 'development';

  return require(`./webpack/webpack.${environment}.config.js`);
};
