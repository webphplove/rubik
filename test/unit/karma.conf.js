// Karma configuration

const webpackConfig = require('../../build/webpack.base.conf');

delete webpackConfig.entry;


module.exports = config => {
  config.set({
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    frameworks: ['mocha', 'sinon-chai'],

    files: ['./file.js'],

    preprocessors: {
      './file.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    // reporters: ['spec', 'coverage'],

    reporters: ['progress'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    concurrency: Infinity
  })
}
