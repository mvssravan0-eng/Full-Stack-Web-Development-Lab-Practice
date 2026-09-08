// 4. PROTOTYPAL INHERITANCE
const vehicle = {
    type: 'Generic Vehicle',
    move() {
        console.log(this.type + ' is moving.');
    }
};

const car = Object.create(vehicle);
car.type = 'Car';
car.honk = function() {
    console.log('Beep beep!');
};

car.move();
car.honk();
