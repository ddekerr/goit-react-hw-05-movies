import axios from 'axios';

const API_KEY = 'fd7e9d42e4eb94adcf7c367528854213';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies(currentPage = 1) {
  const config = {
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
      page: currentPage,
    },
  };

  return axios.get('trending/movie/week', config);
}

export async function fetchMoviesByName(query, currentPage = 1) {
  const config = {
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
      page: currentPage,
      query: query,
    },
  };

  return axios.get('search/movie', config);
}

export async function fetchMovieDetailsById(id) {
  const config = {
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  return axios.get(`movie/${id}`, config);
}

export async function fetchMovieCreditsById(id) {
  const config = {
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  return axios.get(`movie/${id}/credits`, config);
}

export async function fetchMovieReviewsById(id) {
  const config = {
    baseUrl: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  return axios.get(`movie/${id}/reviews`, config);
}
