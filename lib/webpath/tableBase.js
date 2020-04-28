const baseComponent = require('./baseComponent');
const tagName = require('./tagName');

const TAG = tagName.table;

class TableBase extends baseComponent{
    constructor(parent, name) {
      super(parent,name, {tag:TAG});
    }
  }
  
  module.exports = TableBase;

