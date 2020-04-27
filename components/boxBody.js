const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');

let pageContent = new baseComponent(null, 'pageContent', {tag:tagName.header, class:'box-body'});
const txtSearch = new baseComponent(pageContent, 'txtSearch',{tag: tagName.input,placeholder:'Search'});
const table = new baseComponent(pageContent, 'table', {}, {tag: tagName.table, class: 'table'});
const pagination = new baseComponent(pageContent, 'pagination', {}, {tag: tagName.div, class: 'table-pagination'});


const { I } = inject();

module.exports = {
    
}
