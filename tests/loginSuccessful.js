const header = require('../components/mainHeader');
const login = require('../components/loginForm');
const sidebar = require('../components/mainSidebar');

const pfgInfo = require('../data/pfg.json');


Feature('Login successful');

Before( (I) => {
  header.launchPageToLogin();
  header.clickSignIn();
});

Scenario('Signin successful', (I) => {
  login.submitLogin(pfgInfo.email, pfgInfo.pwd);
  sidebar.seeMenuVolunteers('Volunteers');
})

