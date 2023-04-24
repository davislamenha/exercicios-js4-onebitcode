class Character {
  #maxHp = 0;
  constructor(name, hp, ap, dp) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    this.#saveHP();
  }

  #saveHP() {
    this.#maxHp = this.hp;
  }

  attack(enemy) {
    const damage = this.damage(enemy);
    if (damage >= enemy.hp) {
      enemy.hp = 0;
      console.log(`${enemy.name} foi eliminado!`);
    } else {
      enemy.hp -= damage;
      console.log(
        `${enemy.name} sofreu ${damage} de dano! Restou ${enemy.hp} Pontos de Vida.`,
      );
    }
    return this;
  }

  damage(enemy) {
    let damage = 0;
    const characterAttack = this.ap;
    const enemyDefense = enemy.dp;

    if (enemyDefense > characterAttack) {
      damage = 0;
    } else damage = characterAttack - enemyDefense;

    return damage;
  }

  maxHp() {
    return this.#maxHp;
  }
}

module.exports = Character;
