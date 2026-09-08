// 2. MULTILEVEL INHERITANCE
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + ' is eating.');
    }
}

class Mammal extends Animal {
    breathe() {
        console.log(this.name + ' is breathing air.');
    }
}

class Dolphin extends Mammal {
    swim() {
        console.log(this.name + ' is swimming.');
    }
}

const flipper = new Dolphin('Flipper');
flipper.eat();     // From Animal
flipper.breathe(); // From Mammal
flipper.swim();    // From Dolphin
