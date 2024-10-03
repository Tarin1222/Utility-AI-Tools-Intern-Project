const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5502;

// Middleware to parse JSON body
app.use(express.json());

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

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
      jsonData = JSON.parse(data);
    } catch {
      jsonData = [];
    }

    jsonData.push(newData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send('Error writing to file.');
      }
      res.status(200).send('Data saved successfully.');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
