// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-06-03 using
// generator-karma 0.8.1

module.exports = function(config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    // files: [
    //   'dist/libs/angular/angular.js',
    //   'dist/libs/jquery/jquery.js',
    //   'dist/libs/underscore/underscore.js',
    //   'dist/libs/angular-ui-router/release/angular-ui-router.js',
    //   'dist/libs/angular-mocks/angular-mocks.js',
    //   'dist/libs/angular-sanitize/angular-sanitize.js',
    //   'dist/scripts/**/*.js',
    //   'dist/views/**/*.html',
    //   'spec/**/*.js'
    // ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Preprocessors
    preprocessors: {
      'dist/views/**/*.html' : ['ng-html2js'],
      'dist/scripts/**/*.js' : ['coverage']
    },

    // HTML to JS
    // ngHtml2JsPreprocessor: {
    //   stripPrefix : 'dist/'
    // },

    // Reporters - Generates the Coverage
    reporters: [
      'progress',
      'coverage'
    ],

    // Output coverage file
    coverageReporter: {
      type : 'lcov',
      subdir: 'report-lcov',

      // output path
      dir : 'spec/coverage/'
    },

    // Which plugins to enable
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
