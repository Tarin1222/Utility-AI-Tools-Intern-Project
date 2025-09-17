const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // parse JSON bodies

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "utility_tools_with_react",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// ------------------ Contact Form Route ------------------
app.post("/contact", (req, res) => {
  console.log("Received contact data:", req.body);

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email and message are required" });
  }

  const sql = "INSERT INTO contact_form (email, message) VALUES (?, ?)";
  db.query(sql, [email, message], (err, result) => {
    if (err) {
      console.error("Error saving contact form:", err);
      return res.status(500).json({ message: "Error saving data" });
    }
    res.json({ message: "Contact form submitted successfully!" });
  });
});

// ------------------ SubscribeNow Form Route ------------------
app.post("/subscribenow", (req, res) => {
  console.log("Received subscribe data:", req.body);

  const { fullName, email, password, repeatPassword } = req.body;

  if (!fullName || !email || !password || !repeatPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO subscribers (fullName, email, password, repeatPassword) VALUES (?, ?, ?, ?)";
  db.query(sql, [fullName, email, password, repeatPassword], (err, result) => {
    if (err) {
      console.error("Error saving subscribe form:", err);
      return res.status(500).json({ message: "Error saving data" });
    }
    res.json({ message: "Successfully registered!" });
  });
});

// ------------------ Start Server ------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
