const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname, "student_data.txt");
const initialData = "Learning Node.js File System Module.\n";

// Write to file
fs.writeFileSync(filename, initialData);
console.log("File created successfully.");
console.log("Initial Content:\n" + fs.readFileSync(filename, "utf8"));

// Append to file
const newData = "This is appended text for observation task 5.\n";
fs.appendFileSync(filename, newData);
console.log("File updated successfully.");
console.log("Final Content:\n" + fs.readFileSync(filename, "utf8"));