export class Component {
  #element = null;
  constructor(tag, parent, attr) {
    this.tag = tag;
    this.parent = parent;
    this.attr = attr;
    this.build();
  }

  getElement() {
    return this.#element;
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.attr);
    return this;
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      const parent = document.querySelector(this.parent);
      parent.append(this.#element);
    }
  }
}
