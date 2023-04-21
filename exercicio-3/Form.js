import { Component } from './Component.js';

export class Form extends Component {
  constructor(parent, attr) {
    super('form', parent, attr);
  }

  addChildren(...children) {
    children.forEach((child) => {
      this.getElement().appendChild(child.getElement());
    });
  }
}
