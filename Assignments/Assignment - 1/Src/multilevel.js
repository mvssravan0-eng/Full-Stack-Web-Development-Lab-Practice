// Base Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Intermediate Class
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Derived Class
class Puppy extends Dog {
    weep() {
        console.log(`${this.name} is weeping.`);
    }
}

const puppy = new Puppy("Max");
puppy.eat();
puppy.bark();
puppy.weep();
