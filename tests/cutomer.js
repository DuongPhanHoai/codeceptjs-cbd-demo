const header = require('../components/mainHeader');
const login = require('../components/loginForm');
const sidebar = require('../components/mainSidebar');
const title = require('../components/boxHeader');
const customerPage = require('../components/boxBody');


const pfgInfo = require('../data/pfg.json');


Feature('Check Customer page');

Before((I) => {
  header.launchPageToLogin();
  header.clickSignIn();
});

Scenario('Customer page loads successfully',(I) => {
  login.submitLogin(pfgInfo.email, pfgInfo.pwd);
  sidebar.seeMenuCustomers('Customers');
  
}),

Scenario('Verify Customer table',(I) => {
  login.submitLogin(pfgInfo.email, pfgInfo.pwd);
  sidebar.gotoCustomers();
  title.verifyPageTitle('Customers');
  customerPage.verifySearchFieldExists();
  customerPage.verifyTableExists();
})