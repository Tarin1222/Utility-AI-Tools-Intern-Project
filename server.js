const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // For CORS issues if needed

const app = express();
const PORT = process.env.PORT || 5502;

// Middleware to parse JSON body and handle CORS
app.use(express.json());
app.use(cors()); // Allow all origins for development, remove in production or restrict it

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route to save the prompt to a JSON file
app.post('/api/savePrompt', (req, res) => {
  const newData = req.body;

  // Path to your JSON file
  const filePath = path.join(__dirname, 'prompts.json');

  // Append the new data to the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file.');
    }

    let jsonData;
    try {
      jsonData = JSON.parse(data); // Parse existing data
    } catch {
      jsonData = []; // If file is empty or corrupted, start with empty array
    }

    jsonData.push(newData); // Add new data

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send('Error writing to file.');
      }
      res.status(200).send('Data saved successfully.');
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
