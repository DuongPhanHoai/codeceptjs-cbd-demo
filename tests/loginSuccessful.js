const header = require('../components/mainHeader');
const login = require('../components/loginForm');
const sidebar = require('../components/mainSidebar');

const pfgInfo = require('../data/pfg.json');


Feature('Login successful');

Before((I) => {
  header.launchPageToLogin();
});

Scenario('Signin successful', async (I) => {
  login.submitLogin(pfgInfo.email, pfgInfo.pwd);
  sidebar.seeMenuSetting();
}).tag('@regression').tag('@smoke');

