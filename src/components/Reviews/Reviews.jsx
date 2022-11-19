import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/moviesAPI';
import { ReviwsList, Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>There is no reviews yet</div>;
  }

  return (
    <ReviwsList>
      {reviews.map(({ id, author, content }) => (
        <Review key={id}>
          <p>
            <b>{author}</b>
          </p>
          <p>{content}</p>
        </Review>
      ))}
    </ReviwsList>
  );
};

export default Reviews;
