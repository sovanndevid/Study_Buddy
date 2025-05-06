const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow cross-origin requests
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Initialize responses.json if it doesn't exist
fs.readFile('responses.json', (err, data) => {
  if (err) {
    // File doesn't exist, create a new empty array
    fs.writeFile('responses.json', '[]', (err) => {
      if (err) console.error('❌ Error creating responses.json:', err);
    });
  }
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const review = req.body;
  console.log('✅ New Review Received:', review);

  // Read existing reviews, append the new one, and write back to the file
  fs.readFile('responses.json', 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Failed to read responses.json:', err);
      return res.status(500).send('Error reading reviews');
    }
  
    try {
      const reviews = JSON.parse(data); // Ensure proper JSON parsing
      reviews.push(review);
  
      fs.writeFile('responses.json', JSON.stringify(reviews, null, 2), (err) => {
        if (err) {
          console.error('❌ Failed to save review:', err);
          return res.status(500).send('Error saving review');
        }
        res.send('✅ Review submitted successfully!');
      });
    } catch (error) {
      console.error('❌ JSON parse error:', error);
      return res.status(500).send('Error parsing JSON data');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
