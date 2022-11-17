import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/moviesAPI';
import { ReviwsList, Review } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviwsList>
      {reviews.map(({ id }) => (
        <Review key={id}>
          <p></p>
          <p></p>
        </Review>
      ))}
    </ReviwsList>
  );
};
