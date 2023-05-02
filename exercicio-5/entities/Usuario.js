const Conta = require('./Conta');

module.exports = class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.conta = new Conta(this);
  }
};
