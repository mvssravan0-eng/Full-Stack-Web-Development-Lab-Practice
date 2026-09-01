// Base Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Derived Class
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog = new Dog("Buddy");
dog.eat();
dog.bark();
