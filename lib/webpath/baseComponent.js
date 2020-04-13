
function appendIndeedProperty (baseObject, name, value, anyPreviousCondition) {
  baseObject.path = anyPreviousCondition?`${baseObject.path} and ${name}='${value}'`:`${baseObject.path}[${name}='${value}'`;
  return true;
}
function appendPartlyProperty (baseObject, name, value, anyPreviousCondition) {
  baseObject.path = anyPreviousCondition?`${baseObject.path} and contains(${name},'${value}')`:`${baseObject.path}[contains(${name},'${value}')`;
  return true;
}
function appendStartWithProperty (baseObject, name, value, anyPreviousCondition) {
  baseObject.path = anyPreviousCondition?`${baseObject.path} and starts-with(${name},'${value}')`:`${baseObject.path}[starts-with(${name},'${value}')`;
  return true;
}

class baseComponent {
  /**
   * 
   * @param {baseComponent} parent the parent object
   * @param {String} name have to the variable name Ex: const baseButton = new baseComponent(anyParent,  'baseButton', ....
   * @param {JSON} indeedProperties which have to be exactly appearance in the element, available for properties as tag,id,name,class,type,text, innerText; Ex : {tag: 'input', type: 'text', id: 'username'}
   * @param {JSON} partlyProperties which have to be partly appearance in the element, available for properties as id,name,class,text; Ex : {class: 'ember-text'}
   */
  constructor(parent, name, indeedProperties = {}, partlyProperties = {}, startWithProperties = {}) {
    if (name)
      this.name = name;
    let anyCondition = false;
    if (indeedProperties && indeedProperties.xpath) {
      this.path = indeedProperties.xpath;
    } else {
      this.path = '//';
      this.path = indeedProperties.tag?`${this.path}${indeedProperties.tag}`:`${this.path}*`;
      if (indeedProperties) {
        anyCondition = indeedProperties.id?appendIndeedProperty(this, '@id', indeedProperties.id, anyCondition):anyCondition;
        anyCondition = indeedProperties.name?appendIndeedProperty(this, '@name', indeedProperties.name, anyCondition):anyCondition;
        anyCondition = indeedProperties.class?appendIndeedProperty(this, '@class', indeedProperties.class, anyCondition):anyCondition;
        anyCondition = indeedProperties.type?appendIndeedProperty(this, '@type', indeedProperties.type, anyCondition):anyCondition;
        anyCondition = indeedProperties.value?appendIndeedProperty(this, '@value', indeedProperties.value, anyCondition):anyCondition;
        anyCondition = indeedProperties.text?appendIndeedProperty(this, 'text()', indeedProperties.text, anyCondition):anyCondition;
        anyCondition = indeedProperties.innerText?appendIndeedProperty(this, '.', indeedProperties.innerText, anyCondition):anyCondition;
      }
      if (partlyProperties) {
        anyCondition = partlyProperties.id?appendPartlyProperty(this, '@id', partlyProperties.id, anyCondition):anyCondition;
        anyCondition = partlyProperties.name?appendPartlyProperty(this, '@name', partlyProperties.name, anyCondition):anyCondition;
        anyCondition = partlyProperties.class?appendPartlyProperty(this, '@class', partlyProperties.class, anyCondition):anyCondition;
        anyCondition = partlyProperties.type?appendPartlyProperty(this, '@type', partlyProperties.type, anyCondition):anyCondition;
        anyCondition = partlyProperties.value?appendPartlyProperty(this, '@value', partlyProperties.value, anyCondition):anyCondition;
        anyCondition = partlyProperties.text?appendPartlyProperty(this, 'text()', partlyProperties.text, anyCondition):anyCondition;
        anyCondition = partlyProperties.innerText?appendPartlyProperty(this, '.', partlyProperties.innerText, anyCondition):anyCondition;
      }
      if (startWithProperties) {
        anyCondition = startWithProperties.id?appendStartWithProperty(this, '@id', startWithProperties.id, anyCondition):anyCondition;
        anyCondition = startWithProperties.name?appendStartWithProperty(this, '@name', startWithProperties.name, anyCondition):anyCondition;
        anyCondition = startWithProperties.class?appendStartWithProperty(this, '@class', startWithProperties.class, anyCondition):anyCondition;
        anyCondition = startWithProperties.type?appendStartWithProperty(this, '@type', startWithProperties.type, anyCondition):anyCondition;
        anyCondition = startWithProperties.value?appendStartWithProperty(this, '@value', startWithProperties.value, anyCondition):anyCondition;
        anyCondition = startWithProperties.text?appendStartWithProperty(this, 'text()', startWithProperties.text, anyCondition):anyCondition;
        anyCondition = startWithProperties.innerText?appendStartWithProperty(this, '.', startWithProperties.innerText, anyCondition):anyCondition;
      }
    }
    this.parent = parent?parent:null;
    this.path = parent?`${parent.path}${this.path}`:`${this.path}`;
    this.path = (indeedProperties && indeedProperties.xpath)?this.path:anyCondition?`${this.path}]`:this.path;
    if (this.parent) this.parent[name] = this;
  }
}

module.exports = baseComponent;