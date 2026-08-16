// 1. Creating an array of numbers
const numbers = [10, 25, 40, 5, 80, 15];

// 2. Accessing elements by index (starts at 0)
console.log("First number:", numbers[0]); // Output: 10
console.log("Third number:", numbers[2]); // Output: 40

// 3. Modifying an item
numbers[1] = 30; // Changes 25 to 30

// 4. Adding and removing items
numbers.push(100);  // Adds 100 to the end
numbers.shift();    // Removes the first item (10)

// 5. Checking the array length
console.log("Total items:", numbers.length);

// 6. Common Array Operations
// Filter numbers greater than 20
const bigNumbers = numbers.filter(num => num > 20);
console.log("Numbers > 20:", bigNumbers);

// Multiply every number by 2
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);




// Sample array of products in a shopping cart
const cart = [
  { id: 101, name: "Wireless Mouse", price: 25, inStock: true },
  { id: 102, name: "Mechanical Keyboard", price: 85, inStock: false },
  { id: 103, name: "USB-C Cable", price: 12, inStock: true },
  { id: 104, name: "Gaming Monitor", price: 220, inStock: true }
];

// 1. Array.prototype.find() - Find a single item by ID
const item = cart.find(product => product.id === 103);
console.log("Selected Item:", item.name); // Output: USB-C Cable

// 2. Array.prototype.filter() - Get only items that are in stock
const availableItems = cart.filter(product => product.inStock);
console.log("Available Items Count:", availableItems.length); // Output: 3

// 3. Array.prototype.some() - Check if any item exceeds $200
const hasExpensiveItem = cart.some(product => product.price > 200);
console.log("Has item > $200?:", hasExpensiveItem); // Output: true

// 4. Array.prototype.map() - Get an array of just the product names
const itemNames = cart.map(product => product.name);
console.log("Product Names:", itemNames);