module.exports = class Prestacao {
  constructor(valor, numeroDaParcela) {
    this.valor = valor;
    this.numeroDaParcela = numeroDaParcela;
    this.situacao = 'Pendente';
  }
};
