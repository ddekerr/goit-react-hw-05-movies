import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { toast } from 'react-hot-toast';
import { Puff } from 'react-loader-spinner';

import { Main } from './Home.styled';

import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(movies => {
        setMovies(movies);
        setStatus('resolved');
      })
      .catch(e => {
        setStatus('rejected');
        toast.error(e);
      });
  }, []);

  return (
    <Main>
      {status === 'pending' && <Puff />}

      {movies.length > 0 && status === 'resolved' && (
        <MovieList movies={movies} homepage={true} location={location} />
      )}
    </Main>
  );
};

export default Home;
