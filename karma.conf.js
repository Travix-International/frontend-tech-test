// Karma configuration
const webpackconf = require('./webpack.test.js');

module.exports = function(config) {
  'use strict';
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      // polyfill
      'node_modules/babel-polyfill/dist/polyfill.js',
      //test files
      'test/unit/test_index.js'
    ],
    reporters: ['progress', 'coverage'],
     // optionally, configure the reporter
     coverageReporter: {
       dir : './coverage',
       reporters: [
         { type : 'lcov',  subdir : '.'},
         { type : 'text'}
       ]
     },
    //preprocessors
    preprocessors: {
      'test/unit/test_index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackconf,
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      captureConsole: false
    }
  });
};
