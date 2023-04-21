import { Component } from './Component.js';
import { Input } from './Input.js';
import { Label } from './Label.js';
import { Form } from './Form.js';

const title = new Component('h1', 'body', {
  textContent: 'Classes para o DOM',
});
title.render();

const form = new Form('body');

const label = new Label('Nome', form, { htmlFor: 'name' });
const input = new Input(form, { id: 'name' });

form.addChildren(label, input);
form.render();
