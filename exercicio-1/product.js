class Product {
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  addToStock(quantity) {
    this.inStock += quantity;
    return this.inStock;
  }

  calculateDiscount(percent) {
    const discount = this.price * (percent / 100);
    const discountPrice = this.price - discount;
    return discountPrice;
  }
}
