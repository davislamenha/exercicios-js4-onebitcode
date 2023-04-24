const Character = require('./Character');

class Thief extends Character {
  constructor(name, hp, ap, dp) {
    super(name, hp, ap, dp);
  }

  damage(enemy) {
    return super.damage(enemy) * 2;
  }
}

module.exports = Thief;
