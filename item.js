const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    items.push(this);
  }

  static find(name) {
    let searchItem = items.find(v => v.name === name);
    if(searchItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return searchItem
  }

  static findAll(){
    return items
  }

  static remove(name) {
    let index = items.findIndex(v => v.name === name);
    if (index === -1) {
      throw {message: "Not Found", status: 404}
    }
    items.splice(index, 1);
  }

  static update(name, data) {
    let searchItem = Item.find(name);
    if (searchItem === undefined) {
      throw {message: "Not Found", status: 404}
    }
    searchItem.name = data.name;
    searchItem.price = data.price;
    return searchItem;
  }
}

module.exports = Item;