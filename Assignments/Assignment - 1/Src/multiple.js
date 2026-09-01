// Base Class
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Mixin 1
const CanWalk = {
    walk() {
        console.log(`${this.name} is walking.`);
    }
};

// Mixin 2
const CanSwim = {
    swim() {
        console.log(`${this.name} is swimming.`);
    }
};

// Apply Mixins using Object.assign
Object.assign(Person.prototype, CanWalk, CanSwim);

const person = new Person("Sravan");
person.walk();
person.swim();
