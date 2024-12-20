import dotenv from 'dotenv';

dotenv.config();

export const TMDB_API_BASE = 'https://api.themoviedb.org/3';
export const TMDB_BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN || '';
