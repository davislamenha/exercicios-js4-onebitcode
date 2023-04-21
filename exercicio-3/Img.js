import { Component } from './Component.js';

export class Img extends Component {
  constructor(src, parent, attr) {
    super('img', parent, Object.assign({}, attr, { src: src }));
  }

  changeImg(src) {
    this.getElement().setAttribute('src', src);
    return this;
  }
}
