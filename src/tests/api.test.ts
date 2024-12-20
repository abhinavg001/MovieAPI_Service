import { fetchMoviesByYear, fetchMovieCredits } from '../api';

describe('API Calls', () => {
  it('should fetch movies by year', async () => {
    const response = await fetchMoviesByYear('2019', 1);
    expect(response.results).toBeDefined();
  });

  it('should fetch movie credits', async () => {
    const response = await fetchMovieCredits(475557); // Example movie ID
    expect(response.crew).toBeDefined();
  });
});
