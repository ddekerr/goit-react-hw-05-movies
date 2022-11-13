import { MovieListContainer, MovieItem, MovieLink } from './MovieList.styled';

export const MovieList = ({ movies, homepage }) => {
  return (
    <MovieListContainer>
      {movies.map(({ id, title }) => {
        return (
          <MovieItem key={id}>
            {homepage ? (
              <MovieLink to={`movies/${id}`}>{title}</MovieLink>
            ) : (
              <MovieLink to={`${id}`}>{title}</MovieLink>
            )}
          </MovieItem>
        );
      })}
    </MovieListContainer>
  );
};
