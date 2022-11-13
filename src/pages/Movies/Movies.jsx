import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { fetchMoviesByName } from 'services/moviesAPI';
import { SearchForm, SearchInput, SubmitButton } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    fetchMoviesByName(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = ({ search }) => {
    if (search === '') {
      return;
    }

    setSearchQuery(search);
  };

  return (
    <>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <SearchInput
            type="text"
            autoFocus
            placeholder="Search movies"
            name="search"
          />
          <SubmitButton type="submit">Search</SubmitButton>
        </SearchForm>
      </Formik>

      <MovieList movies={movies} homepage={false} />
    </>
  );
};
