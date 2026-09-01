// Prototype Object
const carPrototype = {
    init(brand) {
        this.brand = brand;
    },
    drive() {
        console.log(`${this.brand} is driving.`);
    }
};

// Create a new object inheriting from carPrototype
const myCar = Object.create(carPrototype);
myCar.init("Tesla");
myCar.drive();
