exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://192.168.45.173:8080',
      show: true,
      windowSize: '1200x1024'
    }
  },
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