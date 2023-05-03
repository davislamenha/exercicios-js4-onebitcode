module.exports = class Transferencia {
  constructor(valor, remetente, beneficiario) {
    this.tipo = 'C';
    this.valor = valor;
    this.remetente = remetente;
    this.beneficiario = beneficiario;
    this.data = new Date();
  }
};
