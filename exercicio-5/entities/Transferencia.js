module.exports = class Transferencia {
  constructor(valor, remetente, beneficiario) {
    this.valor = valor;
    this.remetente = remetente;
    this.beneficiario = beneficiario;
    this.data = new Date();
  }
};
