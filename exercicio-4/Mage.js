const Character = require('./Character');

class Mage extends Character {
  constructor(name, hp, ap, dp, mp) {
    super(name, hp, ap, dp);
    this.mp = mp;
  }

  damage(enemy) {
    let damage = 0;
    const characterAttack = this.ap + this.mp;
    const enemyDefense = enemy.dp;

    if (enemyDefense > characterAttack) {
      damage = 0;
    } else damage = characterAttack - enemyDefense;

    return damage;
  }

  heal(target) {
    const cure = this.mp * 2;
    if (cure + target.hp >= target.maxHp()) {
      target.hp = target.maxHp();
    } else {
      target.hp += cure;
    }
    console.log(`${target.name} foi curado(a), seu HP agora é ${target.hp}.`);

    return this;
  }
}

module.exports = Mage;
