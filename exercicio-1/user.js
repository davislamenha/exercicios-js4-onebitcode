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
