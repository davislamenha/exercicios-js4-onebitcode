const App = require('./App');

App.criarUsuario('Davis Lamenha Sampaio', 'davis@gmail.com');
App.criarUsuario('Ana Barros', 'ana@gmail.com');
App.criarUsuario('Dione Lucia', 'dione@gmail.com');

App.depositar(500, 'davis@gmail.com');
App.emprestimo(20000, 46, 'dione@gmail.com');
App.transferencia(100, 'ana@gmail.com', 'dione@gmail.com');
App.transferencia(10000, 'dione@gmail.com', 'ana@gmail.com');

console.log(App.buscarUsuario('davis@gmail.com').conta.verSaldo);
console.log(App.buscarUsuario('ana@gmail.com').conta.verSaldo);
console.log(App.buscarUsuario('dione@gmail.com').conta.verSaldo);

console.table([App.buscarUsuario('davis@gmail.com').conta.depositos[0]]);
console.table([App.buscarUsuario('ana@gmail.com').conta.transferencias[0]]);
console.table([App.buscarUsuario('dione@gmail.com').conta.emprestimos[0]]);
