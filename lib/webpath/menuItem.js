const baseComponent = require('./baseComponent');
const tagName = require('./tagName');

const TAG = tagName.span;

class menuItem extends baseComponent{
  constructor(parent, name, mnuText) {
    super(parent,name, {tag:TAG}, {text:mnuText});
  }
}

module.exports = menuItem;