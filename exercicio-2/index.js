const Author = require('./Author');

const davis = new Author('Davis Lamenha Sampaio');
davis.createPost('Front-end', '.......').addComment('Maylis', 'Top!');
console.log(davis);
console.log(davis.posts);
