const express = require("express");
const app = express();
const PORT = 3000;

const navbar = `
<nav style="padding: 10px; background-color: #f0f0f0;">
  <a href="/" style="margin-right:15px; text-decoration:none; font-weight:bold;">Home</a>
  <a href="/students" style="margin-right:15px; text-decoration:none; font-weight:bold;">Students</a>
  <a href="/about" style="text-decoration:none; font-weight:bold;">About</a>
</nav>
<hr>
`;

app.get("/", (req, res) => {
  res.send(navbar + "<h1 style='color: blue;'>Welcome to Student Portal</h1>");
});

app.get("/students", (req, res) => {
  res.send(navbar + `
    <h1 style='color: green;'>Enrolled Students</h1>
    <ul>
      <li>V S Sravan M</li>
      <li>Alice Smith</li>
      <li>Bob Johnson</li>
      <li>Charlie Brown</li>
    </ul>
  `);
});

app.get("/about", (req, res) => {
  res.send(navbar + "<h1 style='color: purple;'>About Us</h1><p>This is a student management portal built with Express.js.</p>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});