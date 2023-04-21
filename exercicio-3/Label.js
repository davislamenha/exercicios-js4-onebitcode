import { Component } from './Component.js';

export class Label extends Component {
  constructor(text, parent, attr) {
    super('label', parent, Object.assign({}, attr, { textContent: text }));
  }
}
