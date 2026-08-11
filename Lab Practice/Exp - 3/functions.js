// 1. Basic Function declaration
function greetUser(userName) {
  return `Hello, ${userName}! Welcome back.`;
}

// Calling the function
const message = greetUser("Alex");
console.log(message); // Output: Hello, Alex! Welcome back.


// 2. Function with multiple parameters & math calculation
function calculateDiscount(price, discountPercent) {
  const savings = (price * discountPercent) / 100;
  const finalPrice = price - savings;
  return finalPrice;
}

// Calling the calculation function
const laptopPrice = calculateDiscount(1000, 15);
console.log("Final Price: $" + laptopPrice); // Output: Final Price: $850


// 3. Arrow Function syntax (Modern ES6 alternative)
const multiply = (a, b) => a * b;

console.log("Product:", multiply(6, 7)); // Output: Product: 42



// 1. Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius.toFixed(1); // Round to 1 decimal place
}

// Calling the conversion function
console.log("75°F in Celsius is:", fahrenheitToCelsius(75), "°C"); // Output: 23.9 °C
console.log("32°F in Celsius is:", fahrenheitToCelsius(32), "°C"); // Output: 0.0 °C


// 2. Arrow function to format user display names with optional default parameters
const formatUserHandle = (username, role = "Member") => {
  const cleanUsername = username.trim().toLowerCase();
  return `@${cleanUsername} [${role.toUpperCase()}]`;
};

// Calling the formatting function
console.log(formatUserHandle("  JohnDoe  ", "Admin")); // Output: @johndoe [ADMIN]
console.log(formatUserHandle("Sarah88"));            // Output: @sarah88 [MEMBER]