const express = require('express');
const path = require('path');
const getLyrics = require('./getLyrics');
const getSong = require('./getSong');

const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// API endpoint to get lyrics
app.get('/api/lyrics', async (req, res) => {
  const options = {
    apiKey: "10k-h_7H_x7F8xXbWj8Fdw5acduy6_75rEN_LPA0nkBHtLPDzSapsIa2X5rVdajm",
    title: 'not like us',
    artist: 'kendrick lamar',
    optimizeQuery: true
  };

  try {
    const lyrics = await getLyrics(options);
    res.json({ lyrics });
  } catch (error) {
    res.status(500).send('Error fetching lyrics');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
