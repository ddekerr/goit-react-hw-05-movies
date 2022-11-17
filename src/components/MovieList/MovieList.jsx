import { MovieListContainer, MovieItem, MovieLink } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, homepage, location }) => {
  return (
    <MovieListContainer>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          {homepage ? (
            <MovieLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          ) : (
            <MovieLink to={`${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          )}
        </MovieItem>
      ))}
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
