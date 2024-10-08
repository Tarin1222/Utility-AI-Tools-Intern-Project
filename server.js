const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/submitForm', (req, res) => {
  const { fullName, email, password, repeatPassword } = req.body;

  // Validate input data (You can extend this for better validation)
  if (!fullName || !email || !password || password !== repeatPassword) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Prepare data in CSV format
  const csvData = `"Full Name","Email","Password"\n"${fullName}","${email}","${password}"\n`;

  // Append data to the CSV file
  fs.appendFile('submissions.csv', csvData, (err) => {
    if (err) {
      console.error('Error writing to CSV file', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(200).json({ message: 'Form submitted and saved to CSV!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
