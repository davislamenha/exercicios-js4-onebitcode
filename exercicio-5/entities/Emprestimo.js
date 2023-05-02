const Prestacao = require('./Prestacao');

module.exports = class Emprestimo {
  static #juros = 0.1;
  constructor(valor, numeroDeParcelas) {
    this.valor = valor;
    this.numeroDeParcelas = numeroDeParcelas;
    this.data = new Date();
    this.parcelas = [];
    this.#calcularParcelas();
  }

  static get pegarTaxa() {
    return Emprestimo.#juros * 100 + '%' + ' a.m.';
  }

  static set alterarJuros(taxa) {
    return (Emprestimo.#juros = taxa / 100);
  }

  #calcularParcelas() {
    for (let i = 0; i < this.numeroDeParcelas; i++) {
      const juros = Emprestimo.#juros;
      const valor = (this.valor + this.valor * juros) / this.numeroDeParcelas;
      const parcela = new Prestacao(+valor.toFixed(2), i + 1);
      this.parcelas.push(parcela);
    }
  }
};
