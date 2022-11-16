import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/moviesAPI';
import { SearchForm, SearchInput, SubmitButton } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    // ignore first loading
    if (!searchQuery) return;

    fetchMoviesByName(searchQuery).then(setMovies);
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

  return (
    <>
      <SearchForm autoComplete="off" onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoFocus
          placeholder="Search movies"
          name="search"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>

      {movies.length > 0 && (
        <MovieList movies={movies} homepage={false} location={location} />
      )}
    </>
  );
};
