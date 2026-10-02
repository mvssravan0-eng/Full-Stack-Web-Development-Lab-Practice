const math = require('./math');

console.log(math.add(5, 3));          // Output: 8
console.log(math.subtract(10, 4));     // Output: 6
console.log(math.multiply(10, 5));     // Output: 50
console.log(math.divide(10, 5));       // Output: 2
console.log(math.modulus(10, 3));      // Output: 1
console.log(math.exponention(2, 3));   // Output: 8

// Testing the square function from the same module object
console.log(math.square(4));           // Output: 16
console.log(math.square(9));           // Output: 81