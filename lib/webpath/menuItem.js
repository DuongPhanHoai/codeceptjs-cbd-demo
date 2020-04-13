const baseComponent = require('./baseComponent');
const tagName = require('./tagName');

const TAG = tagName.a;
const CLASS = 'main-menuitem';

class menuItem extends baseComponent{
  constructor(parent, name, mnuText) {
    super(parent,name, {tag:TAG, class:CLASS}, {text:mnuText});
  }
}

module.exports = menuItem;