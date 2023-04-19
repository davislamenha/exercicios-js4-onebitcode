class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      return console.log('login realizado com sucesso!');
    } else {
      return console.log('login não realizado, tente novamente!');
    }
  }
}

const davis = new User(
  'Davis Lamenha Sampaio',
  'davislamenha@gmail.com',
  '123456',
);

davis.login('davislamenha@gmail.com', '123456');
davis.login('davislamenha@gmail.com', '123');
