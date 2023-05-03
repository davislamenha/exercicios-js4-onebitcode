const Deposito = require('./entities/Deposito');
const Emprestimo = require('./entities/Emprestimo');
const Transferencia = require('./entities/Transferencia');
const Usuario = require('./entities/Usuario');

module.exports = class App {
  static #usuarios = [];

  static criarUsuario(nome, email) {
    if (!App.buscarUsuario(email)) {
      const usuario = new Usuario(nome, email);
      this.#usuarios.push(usuario);
    } else console.log('Este usuário já está cadastrado!');
  }

  static buscarUsuario(email) {
    const usuario = this.#usuarios.find((usuario) => usuario.email === email);
    return usuario ?? null;
  }

  static depositar(valor, email) {
    const usuario = App.buscarUsuario(email);
    const deposito = new Deposito(valor, email);
    usuario.conta.depositar(deposito);
  }

  static transferencia(valor, emailRementente, emailBeneficiario) {
    const remetente = App.buscarUsuario(emailRementente);
    const beneficiario = App.buscarUsuario(emailBeneficiario);
    const transferenciaRementente = new Transferencia(
      valor,
      remetente,
      beneficiario,
    );
    const transferenciaBeneficiario = new Transferencia(
      valor,
      remetente,
      beneficiario,
    );
    if (remetente.conta.verSaldo >= valor) {
      remetente.conta.transferencia(transferenciaRementente);
      beneficiario.conta.transferencia(transferenciaBeneficiario);
    } else console.log('Saldo Insuficiente!');
  }

  static emprestimo(valor, numeroDeParcelas, email) {
    const usuario = App.buscarUsuario(email);
    const emprestimo = new Emprestimo(valor, numeroDeParcelas);
    usuario.conta.emprestimo(emprestimo);
  }

  alterarTaxaDeJuros(taxa) {
    Emprestimo.alterarJuros(taxa);
    return Emprestimo.pegarTaxa;
  }
};
