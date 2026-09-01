// Base Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Derived Class 1
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Derived Class 2
class Cat extends Animal {
    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.eat();
dog.bark();
cat.eat();
cat.meow();
