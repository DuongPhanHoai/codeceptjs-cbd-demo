const header = require('../components/mainHeader');
const login = require('../components/loginForm');
const sidebar = require('../components/mainSidebar');

const pfgInfo = require('../data/pfg.json');


Feature('Check Customer page');

Before((I) => {
  header.launchPageToLogin();
  header.clickSignIn();
});

Scenario('Customer page loads successfully',(I) => {
  login.submitLogin(pfgInfo.email, pfgInfo.pwd);
  sidebar.seeMenuCustomers('Customers');
  
})