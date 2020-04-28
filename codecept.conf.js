exports.config = {
  name: 'codeceptjs-demo',
  // tests: ['./initCheck.js', './tests/**/*.js'],
  // tests: './*_test.js',
  tests: './tests/**/*.js',
  output: './reports',
  helpers: {
    WebDriver: {
      url: 'http://192.168.45.173:8080',
      browser: 'chrome'
    }
  },
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ["chrome", "firefox"]
    }
  }, /**/
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  "plugins": {
    "allure": {
      "enabled": true
    }
  }
}