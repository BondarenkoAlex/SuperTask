// Karma configuration
// Generated on Wed Jun 07 2017 22:14:30 GMT+0300 (AST)
const path    = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.spec.js',
    ],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',

        // require specific files after Mocha is initialized
        require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],

        // custom ui, defined in required file above
        ui: 'bdd-lazy-var/global',

        // This will be exposed in a reporter as `result.mocha.body`
        expose: ['body'],
      },
      chai: {
        includeStack: true,
      },
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/**/*.js': ['webpack', 'sourcemap'/*, 'coverage'*/],
      'tests/**/*.spec.js': ['webpack', 'sourcemap'/*, 'coverage'*/],
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb'],
            },
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },

    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },

    babelPreprocessor: {
      options: {
        presets: ['airbnb',
          {
            debug: false,
          },
        ],
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'/*, 'coverage'*/],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },
  });
};
