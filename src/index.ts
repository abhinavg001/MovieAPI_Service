import express from 'express';
import bodyParser from 'body-parser';
import { fetchMoviesByYear, fetchMovieCredits } from './api';
import { extractEditors } from './utils';

const app = express();
app.use(bodyParser.json());

app.get('/movies', async (req, res) : Promise<any> => {
  const { year, page = 1 } = req.query;

  if (!year || isNaN(Number(year))) {
    return res.status(400).json({ error: 'Invalid or missing year parameter' });
  }

  try {
    const moviesData = await fetchMoviesByYear(year as string, Number(page));
    const movies = await Promise.all(
      moviesData.results.map(async (movie) => {
        const credits = await fetchMovieCredits(movie.id);
        const editors = extractEditors(credits);
        return {
          title: movie.title,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          editors
        };
      })
    );

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
