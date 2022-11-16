import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/moviesAPI';

import { Main, GoBackLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Main>
      <GoBackLink to={location.state.from}>Go back</GoBackLink>
      {movie && <div>{movie.id}</div>}
      <Outlet />
    </Main>
  );
};
