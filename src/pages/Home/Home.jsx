import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';

import { Main, MovieList, MovieItem, MovieLink } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Main>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`movies/${id}`}>{title}</MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </Main>
  );
};
