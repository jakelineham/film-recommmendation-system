const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/search', async (req, res) => {
  const filmName = req.query.filmName;

  //If the query is empty return nothing
  if (!filmName) {
    return res.json([]);
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${filmName}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_KEY}`  
        }
      }
    );

    const searchResults = await response.json();

    res.json(searchResults.results);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Could not connect to TMDB API'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});