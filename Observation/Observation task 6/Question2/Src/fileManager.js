const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Configure Readline Interface for Interactive Terminal User Input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function runFileManager() {
  console.log("==================================================");
  console.log("   Node.js Interactive File System Manager");
  console.log("==================================================\n");

  try {
    // 1. Accept filename and initial content from user (interactive or CLI args fallback)
    let filename = process.argv[2];
    let initialContent = process.argv[3];
    let appendContent = process.argv[4];

    if (!filename) {
      filename = await askQuestion("Enter filename to create (e.g. sample.txt): ");
    }
    if (!filename.trim()) {
      filename = "user_document.txt";
    }

    const filePath = path.isAbsolute(filename) ? filename : path.join(__dirname, filename);

    if (!initialContent) {
      initialContent = await askQuestion("Enter initial content to write into file: ");
    }

    // 2. Create / Write File Operation
    console.log(`\n[STEP 1] Creating and writing to '${filename}'...`);
    fs.writeFileSync(filePath, initialContent, "utf8");
    console.log(`[SUCCESS] File '${filename}' written successfully (${Buffer.byteLength(initialContent)} bytes).`);

    // 3. Read Contents Operation
    console.log(`\n[STEP 2] Reading contents of '${filename}'...`);
    const currentContent = fs.readFileSync(filePath, "utf8");
    console.log("---------------- Current Content ----------------");
    console.log(currentContent);
    console.log("-------------------------------------------------");

    // 4. Accept Additional Content & Append Operation
    if (!appendContent) {
      appendContent = await askQuestion("\nEnter additional content to append: ");
    }

    console.log(`\n[STEP 3] Appending content to '${filename}'...`);
    fs.appendFileSync(filePath, "\n" + appendContent, "utf8");
    console.log(`[SUCCESS] Content appended successfully.`);

    // 5. Read and Display Final Contents
    console.log(`\n[STEP 4] Reading and displaying final contents of '${filename}'...`);
    const finalContent = fs.readFileSync(filePath, "utf8");
    console.log("================= FINAL CONTENTS =================");
    console.log(finalContent);
    console.log("==================================================");
  } catch (err) {
    console.error("\n[ERROR] File System operation failed:", err.message);
  } finally {
    rl.close();
  }
}

runFileManager();