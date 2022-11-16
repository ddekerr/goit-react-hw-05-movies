import { MovieListContainer, MovieItem, MovieLink } from './MovieList.styled';

export const MovieList = ({ movies, homepage, location }) => {
  return (
    <MovieListContainer>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          {homepage ? (
            <MovieLink to={`movies/${id}`} state={{ from: location}}>{title}</MovieLink>
          ) : (
            <MovieLink to={`${id}`} state={{ from: location}}>{title}</MovieLink>
          )}
        </MovieItem>
      ))}
    </MovieListContainer>
  );
};
