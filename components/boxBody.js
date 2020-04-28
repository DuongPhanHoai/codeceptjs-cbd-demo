const baseComponent = require('../lib/webpath/baseComponent');
const tagName = require('../lib/webpath/tagName');
const TableBase = require('../lib/webpath/tableBase');

let pageContent = new baseComponent(null, 'pageContent', {tag:tagName.header, class:'box-body'});
const txtSearch = new baseComponent(pageContent, 'txtSearch',{tag: tagName.input,placeholder:'Search'});
const tableBase = new TableBase(pageContent, 'table');
const pagination = new baseComponent(pageContent, 'pagination', {}, {tag: tagName.div, class: 'table-pagination'});


const { I } = inject();

module.exports = {
    
    verifySearchFieldExists(){
        I.see(txtSearch);
    },

    verifyTableExists(){
        I.see(tableBase);
    }
}
