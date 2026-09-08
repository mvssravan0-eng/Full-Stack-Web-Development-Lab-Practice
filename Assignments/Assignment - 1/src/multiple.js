// 5. MULTIPLE INHERITANCE (Using Mixins)
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + ' is eating.');
    }
}

const Swimmer = {
    swim() {
        console.log(this.name + ' is swimming in the water.');
    }
};

const Flyer = {
    fly() {
        console.log(this.name + ' is flying in the sky.');
    }
};

class Duck extends Animal {
    constructor(name) {
        super(name);
    }
}

// Assigning multiple behaviors to the Duck prototype
Object.assign(Duck.prototype, Swimmer, Flyer);

const donald = new Duck('Donald');
donald.eat();
donald.swim(); // From Swimmer Mixin
donald.fly();  // From Flyer Mixin
