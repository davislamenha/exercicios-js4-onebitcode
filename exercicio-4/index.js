const Thief = require('./Thief');
const Warrior = require('./Warrior');
const Mage = require('./Mage');

const davis = new Warrior('Davis', 500, 100, 50, 100);
const higor = new Thief('Higor', 500, 200, 50);
const matheus = new Mage('Matheus', 200, 50, 20, 100);

davis.attack(higor);
higor.attack(davis);
matheus.attack(higor).heal(davis);
davis.changePosition('defense').attack(higor);
higor.attack(davis);
console.table({ davis, higor, matheus });
