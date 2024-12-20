import axios from 'axios';
import { TMDB_API_BASE, TMDB_BEARER_TOKEN } from './config';
import { MovieApiResponse, CreditApiResponse } from './types';

const httpClient = axios.create({
  baseURL: TMDB_API_BASE,
  headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` }
});

export const fetchMoviesByYear = async (year: string, page: number): Promise<MovieApiResponse> => {
  const response = await httpClient.get<MovieApiResponse>('/discover/movie', {
    params: { primary_release_year: year, sort_by: 'popularity.desc', page }
  });
  return response.data;
};

export const fetchMovieCredits = async (movieId: number): Promise<CreditApiResponse> => {
  try {
    const response = await httpClient.get<CreditApiResponse>(`/movie/${movieId}/credits`);
    return response.data;
  } catch {
    return { crew: [] }; // Return empty crew if API fails
  }
};
