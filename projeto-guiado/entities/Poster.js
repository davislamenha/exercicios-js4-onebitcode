const Product = require('./Product');

module.exports = class Poster extends Product {
  constructor(name, height, width, description, price, inStock) {
    super(name, description, price, inStock);
    this.height = height;
    this.width = width;
  }
};
