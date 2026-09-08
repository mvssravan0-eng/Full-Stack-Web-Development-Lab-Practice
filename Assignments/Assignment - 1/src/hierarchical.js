// 3. HIERARCHICAL INHERITANCE
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + ' is eating.');
    }
}

class Cat extends Animal {
    meow() {
        console.log(this.name + ' says Meow.');
    }
}

class Bird extends Animal {
    chirp() {
        console.log(this.name + ' says Chirp.');
    }
}

const myCat = new Cat('Whiskers');
const myBird = new Bird('Tweety');
myCat.eat();
myCat.meow();
myBird.eat();
myBird.chirp();
