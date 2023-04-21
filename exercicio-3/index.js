import { Component } from './Component.js';
import { Input } from './Input.js';
import { Label } from './Label.js';
import { Form } from './Form.js';
import { Img } from './Img.js';

const title = new Component('h1', 'body', {
  textContent: 'Classes para o DOM',
});
title.render();

const form = new Form('body');

const label = new Label('Nome', form, { htmlFor: 'name' });
const input = new Input(form, { id: 'name' });

form.addChildren(label, input);
form.render();

const image = new Img(
  'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/gollum-o-senhor-dos-aneis.webp',
  'body',
  { width: '300', height: '300' },
);
image.render();
image.changeImg(
  'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151019-14270-1x1de9d.png?w=960',
);
