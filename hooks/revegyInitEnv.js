const credentialInfo = require('../data/credentials');

module.exports = {
  bootstrap: function(done) {
    console.log ('>>>>>>>> >>>>>>>> >>>>>>>> Init Revegy Environment Variables >>>>>>>> >>>>>>>> >>>>>>>>');
    // Setup Environment variable for URL
    global.revegyURL = credentialInfo.url;
    if (process.env.REVEGY_URL) {
      console.log(`Environment REVEGY_URL=${process.env.REVEGY_URL}`);
      global.revegyURL = process.env.REVEGY_URL;
    }
    else
      console.log(`Environment REVEGY_URL not exists`);
  
    // Setup Environment variable for USername
    global.revegyUsername = credentialInfo.username;
    if (process.env.REVEGY_USERNAME) {
      console.log(`Environment REVEGY_USERNAME=${process.env.REVEGY_USERNAME}`);
      global.revegyUsername = process.env.REVEGY_USERNAME;
    }
    else
      console.log(`Environment REVEGY_USERNAME not exists`);
  
    // Setup Environment variable for Password
    global.revegyPassword = credentialInfo.password;
    if (process.env.REVEGY_PASSWORD) {
      console.log(`Environment REVEGY_PASSWORD=${process.env.REVEGY_PASSWORD}`);
      global.revegyPassword = process.env.REVEGY_PASSWORD;
    }
    else
      console.log(`Environment REVEGY_PASSWORD not exists`);

    // Setup Environment variable for timeout
    global.timeout = 15;
    if (process.env.TIMEOUT) {
      console.log(`Environment TIMEOUT=${process.env.TIMEOUT}`);
      global.timeout = process.env.TIMEOUT;
    }
    else
      console.log(`Environment TIMEOUT not exists, using default as {global.timeout}`);

    done();
  },
  teardown: function(done) {
    
    done();
  }
}