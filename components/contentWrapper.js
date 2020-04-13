const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');

contentWrapper = new baseComponent(null, 'contentWrapper', {tag:tagName.div, class:'content-wrapper'});


const { I } = inject();

module.exports = {
  contentWrapper
}