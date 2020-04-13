const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');

const pfgInfo = require ('../data/pfg.json');

let mainHeader = new baseComponent(null, 'loginPage', {tag:tagName.header, class:'main-header'});
const iconPFG = new baseComponent(mainHeader, 'iconPFG', {tag:tagName.a, class:'navbar-brand'});
const lnkSignUp = new baseComponent(mainHeader, 'lnkSignUp',{tag:tagName.a, text:'Sign Up'});
const lnkSignIn = new baseComponent(mainHeader, 'lnkSignIn',{tag:tagName.a, text:'Sign In'});

const { I } = inject();

module.exports = {
  clickSignIn() {
    I.click(lnkSignIn.path);
  },
  async launchPageToLogin() {
    I.amOnPage(pfgInfo.address);
    const noVi = await I.grabNumberOfVisibleElements(mainHeader);
    I.click(lnkSignIn.path);
  },
}