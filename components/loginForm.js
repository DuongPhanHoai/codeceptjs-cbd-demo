const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');
const contentWrapper = require('./contentWrapper');


const loginForm = new baseComponent(contentWrapper.contentWrapper, 'loginForm', {tag:tagName.form, name:'loginForm'});
const txtEmail = new baseComponent(loginForm, 'txtEmail', {tag: tagName.input,id:'email'});
const txtPassword = new baseComponent(loginForm, 'txtPassword', {tag: tagName.input,id:'password'});
const btnSignIn = new baseComponent(loginForm, 'btnSignIn', {tag: tagName.button,text:'Sign in'});

const { I } = inject();

module.exports = {
  submitLogin(email,pwd) {
    I.waitForElement(loginForm.path);
    I.fillField(txtEmail.path, email);
    I.fillField(txtPassword.path, pwd);
    I.click(btnSignIn.path);    
  }
}



