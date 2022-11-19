import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Puff } from 'react-loader-spinner';
import { fetchMoviesByName } from 'services/moviesAPI';

import {
  MoviesContainer,
  SearchForm,
  SearchInput,
  SubmitButton,
} from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const searchQuery = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    // ignore first loading
    if (!searchQuery) return;

    setInputValue(searchQuery);

    setStatus('pending');
    fetchMoviesByName(searchQuery)
      .then(response => {
        setMovies(response);
        setStatus('resolved');
      })
      .catch(e => {
        setStatus('rejected');
        toast.error(e);
      });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.search;
    const query = value.trim();

    if (query === '') {
      setSearchParams({});
      return;
    }

    setSearchParams({ search: query });
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <MoviesContainer>
      <SearchForm autoComplete="off" onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoFocus
          placeholder="Search movies"
          name="search"
          value={inputValue}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>

      {status === 'pending' && <Puff />}

      {movies.length > 0 && (
        <MovieList movies={movies} homepage={false} location={location} />
      )}
    </MoviesContainer>
  );
};

export default Movies;
