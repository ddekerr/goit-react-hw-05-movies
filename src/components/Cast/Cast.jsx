import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from 'services/moviesAPI';
import { ActorsList, Actor, Foto } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCreditsById(movieId).then(setActors);
  }, [movieId]);

  if (actors.length === 0) {
    return <div>Cast</div>;
  }

  return (
    <ActorsList>
      {actors.map(({ id, character, name, profile_path }) => {
        // console.log(profile_path);
        return (
          <Actor key={id}>
            <Foto
              src={'https://image.tmdb.org/t/p/w500' + profile_path}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </Actor>
        );
      })}
    </ActorsList>
  );
};
