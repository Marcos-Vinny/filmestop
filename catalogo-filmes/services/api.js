import axios from 'axios';

const API_KEY = 'SUA_CHAVE_AQUI';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: 'pt-BR' },
});

export const getPopularMovies = () => api.get('/movie/popular');
export const getMovieDetails = (id) => api.get(`/movie/${id}`);

export default api;
