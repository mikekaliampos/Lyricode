import React, { useEffect, useState } from 'react';

function App() {
  const [lyrics, setLyrics] = useState('Loading...');

  useEffect(() => {
    async function fetchLyrics() {
      try {
        const response = await fetch('/api/lyrics');
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        setLyrics('Error fetching lyrics');
      }
    }

    fetchLyrics();
  }, []);

  return (
    <div className="App">
      <h1>Song Lyrics</h1>
      <div id="lyrics">{lyrics}</div>
    </div>
  );
}

export default App;
