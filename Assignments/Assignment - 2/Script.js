// ==========================================
// ASSIGNMENT 2: STUDENT MANAGEMENT SYSTEM
// Database: collegeDB | Collection: students
// ==========================================

// Switch to (or create) the collegeDB database
db = db.getSiblingDB('collegeDB');

// Clean up previous collection run (optional)
db.students.drop();

print("\n-------------------------------------------");
print("1. INSERTING STUDENT RECORDS");
print("-------------------------------------------");

db.students.insertMany([
  {
    rollNo: "23CM001",
    name: "Ravi Kumar",
    branch: "CSE-AIML",
    year: 3,
    marks: 85,
    email: "ravi@example.com"
  },
  {
    rollNo: "23CM002",
    name: "Ananya Sharma",
    branch: "CSE-AIML",
    year: 3,
    marks: 92,
    email: "ananya@example.com"
  },
  {
    rollNo: "23ECE015",
    name: "Rahul Verma",
    branch: "ECE",
    year: 2,
    marks: 45,
    email: "rahul@example.com"
  },
  {
    rollNo: "23CM045",
    name: "Sneha Reddy",
    branch: "CSE-AIML",
    year: 3,
    marks: 78,
    email: "sneha@example.com"
  },
  {
    rollNo: "23ME008",
    name: "Vikram Singh",
    branch: "MECH",
    year: 4,
    marks: 68,
    email: "vikram@example.com"
  }
]);
print("Records inserted successfully.");

print("\n-------------------------------------------");
print("2. DISPLAY ALL STUDENTS");
print("-------------------------------------------");
printjson(db.students.find().toArray());

print("\n-------------------------------------------");
print("3. DISPLAY STUDENTS FROM BRANCH: CSE-AIML");
print("-------------------------------------------");
printjson(db.students.find({ branch: "CSE-AIML" }).toArray());

print("\n-------------------------------------------");
print("4. DISPLAY STUDENTS SCORING > 75 MARKS");
print("-------------------------------------------");
printjson(db.students.find({ marks: { $gt: 75 } }).toArray());

print("\n-------------------------------------------");
print("5. SEARCH STUDENT BY ROLL NO: 23CM001");
print("-------------------------------------------");
printjson(db.students.find({ rollNo: "23CM001" }).toArray());

print("\n-------------------------------------------");
print("6. SEARCH STUDENTS BY CONDITION (year = 3)");
print("-------------------------------------------");
printjson(db.students.find({ year: 3 }).toArray());

print("\n-------------------------------------------");
print("7. UPDATE MARKS FOR ROLL NO 23CM001 TO 90");
print("-------------------------------------------");
db.students.updateOne(
  { rollNo: "23CM001" },
  { $set: { marks: 90 } }
);
printjson(db.students.find({ rollNo: "23CM001" }).toArray());

print("\n-------------------------------------------");
print("8. UPDATE EMAIL AND BRANCH FOR ROLL NO 23ME008");
print("-------------------------------------------");
db.students.updateOne(
  { rollNo: "23ME008" },
  { $set: { email: "vikram.singh@newmail.com", branch: "MECH-ROBOTICS" } }
);
printjson(db.students.find({ rollNo: "23ME008" }).toArray());

print("\n-------------------------------------------");
print("9. DELETE STUDENT WITH ROLL NO: 23ECE015");
print("-------------------------------------------");
db.students.deleteOne({ rollNo: "23ECE015" });
print("Record deleted successfully.");

print("\n-------------------------------------------");
print("10. DISPLAY STUDENTS IN DESCENDING ORDER OF MARKS");
print("-------------------------------------------");
printjson(db.students.find().sort({ marks: -1 }).toArray());

print("\n-------------------------------------------");
print("11. CREATE INDEX ON rollNo AND DEMONSTRATE EXPLAIN");
print("-------------------------------------------");
db.students.createIndex({ rollNo: 1 }, { unique: true });
print("Index created on rollNo.");

print("\nExecution Stats with Index:");
printjson(db.students.find({ rollNo: "23CM002" }).explain("executionStats").executionStats);

print("\n-------------------------------------------");
print("REAL-TIME EXTENSION QUERIES");
print("-------------------------------------------");

print("\na. Students scoring above 80:");
printjson(db.students.find({ marks: { $gt: 80 } }).toArray());

print("\nb. Students scoring below 50:");
printjson(db.students.find({ marks: { $lt: 50 } }).toArray());

print("\nc. Highest-scoring student:");
printjson(db.students.find().sort({ marks: -1 }).limit(1).toArray());

print("\nd. Students sorted by marks (Descending):");
printjson(db.students.find().sort({ marks: -1 }).toArray());

print("\n===========================================");
print("ASSIGNMENT EXECUTED SUCCESSFULLY!");
print("===========================================\n");