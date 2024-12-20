import { CreditApiResponse, Movie } from './types';

export const extractEditors = (credits: CreditApiResponse): string[] => {
  return credits.crew
    .filter(member => member.known_for_department === 'Editing')
    .map(member => member.name);
};

export const formatMoviesResponse = (movies: Movie[], page: number): object => ({
  page,
  movies
});
