const baseComponent = require('../lib/webpath/baseComponent');
const menuItem = require('../lib/webpath/menuItem');
const tagName = require('../lib/webpath/tagName');

const mainSidebar = new baseComponent(null, 'mainSidebar', {tag:tagName.div, class:'main-sidebar'});

const menuDelivery = new menuItem(mainSidebar, 'menuDelivery', 'Delivery');
const menuVolunteers = new menuItem(mainSidebar, 'menuSetting', 'Volunteers');
const menuCustomers = new menuItem(mainSidebar, 'menuCustomers', 'Customers');

const { I } = inject();

module.exports = {
  seeMenuVolunteers(mnuName) {
    I.waitForElement(menuVolunteers.path);
    I.see(mnuName, menuVolunteers.path);
  },

  seeMenuCustomers(mnuName){
    I.waitForElement(menuCustomers.path);
    I.see(mnuName, menuCustomers.path);
  }
}