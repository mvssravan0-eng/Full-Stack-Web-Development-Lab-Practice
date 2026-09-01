// Base Class
class Character {
    constructor(name) {
        this.name = name;
    }
}

// Multilevel inheritance
class Hero extends Character {
    fight() {
        console.log(`${this.name} is fighting.`);
    }
}

// Mixin for special ability
const CanFly = {
    fly() {
        console.log(`${this.name} is flying high!`);
    }
};

Object.assign(Hero.prototype, CanFly);

const hero = new Hero("Super-Sravan");
hero.fight();
hero.fly();
