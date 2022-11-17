import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesAPI';

import { Main } from './Home.styled';

import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Main>
      {movies.length > 0 && <MovieList movies={movies} homepage={true} location={location} />}
    </Main>
  );
};
