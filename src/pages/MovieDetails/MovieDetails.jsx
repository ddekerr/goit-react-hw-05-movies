import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/moviesAPI';

import {
  Main,
  GoBackLink,
  MovieContainer,
  ImageThumb,
  Image,
  Information,
  Additional,
  AdditionalList,
  AdditionalItem,
  AdditionalLink,
} from './MovieDetails.styled';

const additional = [
  { id: 1, info: 'cast' },
  { id: 2, info: 'reviews' },
];

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  const { title, vote_average, overview, genres, poster_path } = movie;
  const userScore = Math.floor(vote_average * 10);

  return (
    <Main>
      <GoBackLink to={location.state?.from ?? '/movies'}>Go back</GoBackLink>

      <MovieContainer>
        <ImageThumb>
          <Image src={'https://image.tmdb.org/t/p/w500' + poster_path} />
        </ImageThumb>
        <Information>
          <h1>{title}</h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(g => g.name).join(' ')}</p>
        </Information>
      </MovieContainer>

      <Additional>
        <p>Additional information </p>
        <AdditionalList>
          {additional.map(({ id, info }) => (
            <AdditionalItem key={id}>
              <AdditionalLink to={info}>{info}</AdditionalLink>
            </AdditionalItem>
          ))}
        </AdditionalList>
      </Additional>

      <Outlet />
    </Main>
  );
};

export default MovieDetails;
