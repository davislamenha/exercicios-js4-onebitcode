const App = require('./App');

const app = new App();

app.createAuthor('J. R. R. Tolkien', 'British', '...');
app.createAuthor('Rick Riordan', 'American', '...');

const authors = app.getAuthors();

app.createBook(
  'O Hobbit',
  '...',
  'fantasy',
  300,
  authors[0],
  '...',
  19.99,
  100,
);
app.createBook(
  'A Sociedade do Anel',
  '...',
  'fantasy',
  400,
  authors[0],
  '...',
  24.99,
  100,
);
app.createBook(
  'O Ladrão de Raios',
  '...',
  'fantasy',
  500,
  authors[1],
  '...',
  24.99,
  100,
);
app.createBook(
  'A Pirâmide Vermelha',
  '...',
  'fantasy',
  600,
  authors[1],
  '...',
  24.99,
  100,
);

app.createPoster('Poster Naruto Akatsuki', '150cm', '200cm', '...', 10, 20);
app.createPoster('Poster One Piece Luffy', '300cm', '200cm', '...', 20, 20);
app.createPoster('Poster Attack on Titan', '300cm', '100cm', '...', 15, 20);

const books = app.getBooks();
const posters = app.getPosters();

app.createUser('Davis', 'davislamenha@email.com', '123456');

const users = app.getUsers();

const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
];

const items2 = [
  {
    product: books[3],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 5,
  },
  {
    product: posters[0],
    quantity: 1,
  },
  {
    product: posters[2],
    quantity: 5,
  },
  {
    product: posters[1],
    quantity: 2,
  },
];
app.createOrder(items, users[0]);
app.createOrder(items2, users[0]);

app.showDatabase();
