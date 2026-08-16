// hacker.mjs

// 1. Import the built-in modules
import os from 'os';
import crypto from 'crypto';

console.log("--- SYSTEM RECON ---");

// 2. Use 'os' to spy on your own computer
console.log("Operating System:", os.platform());
// Memory is in bytes, so we divide by 1024 twice to get Megabytes
console.log("Free RAM:", Math.round(os.freemem() / 1024 / 1024), "MB"); 

console.log("--- ENCRYPTION ---");

// 3. Use 'crypto' to generate a secure, random ID
const secretId = crypto.randomUUID();
console.log("Your Secret Hacker ID:", secretId);