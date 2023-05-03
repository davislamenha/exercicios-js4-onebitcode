module.exports = class Conta {
  #saldo = 0;
  constructor(usuario) {
    this.depositos = [];
    this.emprestimos = [];
    this.transferencias = [];
    this.usuario = usuario;
  }

  get verSaldo() {
    return this.#saldo;
  }

  depositar(deposito) {
    this.#saldo += deposito.valor;
    this.depositos.push(deposito);
  }

  emprestimo(emprestimo) {
    this.#saldo += emprestimo.valor;
    this.emprestimos.push(emprestimo);
  }

  transferencia(transferencia) {
    if (transferencia.remetente.email === this.usuario.email) {
      transferencia.tipo = 'D';
      this.#saldo -= transferencia.valor;
      this.transferencias.push(transferencia);
    } else if (transferencia.beneficiario.email === this.usuario.email) {
      this.#saldo += transferencia.valor;
      this.transferencias.push(transferencia);
    }
  }
};
