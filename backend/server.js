const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS for frontend
app.use(cors());

// Serve static music files
app.use(express.static(path.join(__dirname, 'music')));

// Define full URLs for frontend to use
const songs = [
  {
    title: "Devara",
    file: "devara.mp3",
    url: `http://localhost:${PORT}/music/devara.mp3`
  },
  {
    title: "Dabidi Dibidi",
    file: "dakumaha.mp3",
    url: `http://localhost:${PORT}/music/dakumaha.mp3`
  }
];

// GET /songs returns list of songs with full URLs
app.get('/songs', (req, res) => {
  res.json(songs);
});

// Start backend
app.listen(PORT, () => {
  console.log(`🎧 Music server running at http://localhost:${PORT}`);
});


