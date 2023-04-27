const Product = require('./Product');

module.exports = class Poster extends Product {
  constructor(name, height, width, description, price, inStock = 0) {
    super(name, description, price, (inStock = 0));
    this.height = height;
    this.width = width;
  }
};
