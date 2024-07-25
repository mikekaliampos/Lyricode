const express = require('express');
const path = require('path');
const getLyrics = require('./getLyrics');
const getAlbumArt = require('./getAlbumArt'); // Import the getAlbumArt function

const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// API endpoint to get lyrics and album art
app.get('/api/lyrics', async (req, res) => {
  const { artist, title } = req.query;

  if (!artist || !title) {
    return res.status(400).send('Artist and title are required');
  }

  const options = {
    apiKey: "10k-h_7H_x7F8xXbWj8Fdw5acduy6_75rEN_LPA0nkBHtLPDzSapsIa2X5rVdajm",
    title,
    artist,
    optimizeQuery: true,
    authHeader: true // Make sure to pass the authHeader option if required by the API
  };

  try {
    const lyrics = await getLyrics(options);
    const albumArt = await getAlbumArt(options); // Fetch the album art
    res.json({ lyrics, albumArt });
  } catch (error) {
    res.status(500).send('Error fetching lyrics or album art');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
