const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');

let pageHeader = new baseComponent(null, 'pageHeader', {tag:tagName.header, class:'box-header'});
const pageTitle = new baseComponent(pageHeader, 'pageTitle',{tag:tagName.h3, class: 'box-title'});

const { I } = inject();

module.exports = {
    verifyPageTitle(expectedPageTitle) {
        I.see(expectedPageTitle, pageTitle);
    }
}