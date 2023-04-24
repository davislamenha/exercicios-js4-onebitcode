const Character = require('./Character');

class Warrior extends Character {
  #defense = 0;
  constructor(name, hp, ap, dp, shieldPoints) {
    super(name, hp, ap, dp);
    this.shieldPoints = shieldPoints;
    this.position = 'attack';
    this.#saveDP();
    this.#changeDP();
  }

  #saveDP() {
    this.#defense = this.dp;
  }

  changePosition(position = 'attack' || 'defense') {
    this.position = position;
    this.#changeDP();
    console.log(`${this.name} mudou para ${position} position.`);
    return this;
  }

  #changeDP() {
    if (this.position === 'attack') {
      this.dp = this.#defense;
    } else if (this.position === 'defense') {
      this.dp = this.#defense + this.ap;
    }
  }

  attack(enemy) {
    if (this.position === 'attack') {
      super.attack(enemy);
    } else {
      console.log('Você só pode atacar quando estiver na posição de ataque!');
    }
    return this;
  }
}

module.exports = Warrior;
