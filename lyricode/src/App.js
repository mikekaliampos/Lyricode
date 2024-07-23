import React, { useState } from 'react';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const fetchLyrics = async () => {
    if (!artist || !title) {
      setLyrics('Please enter both artist and title');
      return;
    }

    try {
      const response = await fetch(`/api/lyrics?artist=${encodeURIComponent(artist)}&title=${encodeURIComponent(title)}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      setLyrics('Error fetching lyrics');
    }
  };

  return (
    <div className="App">
      <h1>Song Lyrics</h1>
      <div>
        <input 
          type="text" 
          placeholder="Artist" 
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={fetchLyrics}>Get Lyrics</button>
      </div>
      <div id="lyrics">{lyrics}</div>
    </div>
  );
}

export default App;
