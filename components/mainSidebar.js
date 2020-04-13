const baseComponent = require('../lib/webpath/baseComponent');
const menuItem = require('../lib/webpath/menuItem');
const tagName = require('../lib/webpath/tagName');
const contentWrapper = require('./contentWrapper');

const mainSidebar = new baseComponent(contentWrapper.contentWrapper, 'mainSidebar', {tag:tagName.div, class:'main-sidebar'});



const menuDelivery = new menuItem(mainSidebar, 'menuDelivery', 'Delivery');
const menuSetting = new menuItem(mainSidebar, 'menuSetting', 'Settings');

const { I } = inject();

module.exports = {
  seeMenuSetting() {
    I.see(menuSetting.path);
  }
}