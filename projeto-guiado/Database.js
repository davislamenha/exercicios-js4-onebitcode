module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
    return this;
  }

  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  saveBook(book) {
    const bookExist = this.findBookByName(book.name);
    if (!bookExist) {
      this.#storage.authors.push(book);
    }
    return this;
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock(quantity);
    return this;
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
    return this;
  }

  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  savePoster(poster) {
    const posterExist = this.findPosterByName(poster.name);
    if (!posterExist) {
      this.#storage.authors.push(poster);
    }
    return this;
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity);
    return this;
  }

  removeBooksFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
    return this;
  }

  saveUser(user) {
    const userExist = this.#storage.users.find((u) => u.email === user.email);
    if (!userExist) {
      this.#storage.users.push(user);
    }
    return this;
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
    return this;
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((o) => o.data));
    return this;
  }
};
