const event = require('codeceptjs').event;
const { setConf, updateTestResultByName, createNewResultCol } = require('@davidkent/gsheet-js-api');

const defaultConfig = {
  confDir: "gconf",
  spreadSheetID: "1CEMjD7V2aIXFRxkhiVL2dZWI9J5Vy5rrXbV00KOwDXw",
  sheetName: "targetResult"
};

function getTestName (test) {
  if (test) {
    let fullTitle = test.title;
    if (test.tags && test.tags.length > 0)
      for (let i = 0; i < test.tags.length; i++)
        if (test.tags[i])
          fullTitle = fullTitle.replace(test.tags[i], '');
    fullTitle = fullTitle.trim();
    return fullTitle;
  }
}

module.exports = function (config) {
  config = Object.assign(defaultConfig, config);
  if (config.confDir)
    setConf(config.confDir);

  // Add a column before all
  console.log('\n\n--- Add new test column --\n\n');
  createNewResultCol(config.sheetName, config.spreadSheetID);

  // END TEST CASE
  event.dispatcher.on(event.test.failed, (test) => {
    console.log('\n\n--- Writing result to report as failed --\n\n');
    updateTestResultByName(getTestName(test), 'failed', config.sheetName, true, config.spreadSheetID);
  });
  event.dispatcher.on(event.test.passed, (test) => {
    console.log('\n\n--- Writing result to report as passed --\n\n');
    updateTestResultByName(getTestName(test), 'passed', config.sheetName, true, config.spreadSheetID);
  });
}