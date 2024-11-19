import React, { useState, useEffect } from 'react';
import './Reviews.css'; // External CSS file

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch reviews from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const username = localStorage.getItem('username');
        console.log("username is ",username);
        const response = await fetch(`http://localhost:5000/reviews/${username}`);
        // console.log(response.username);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        console.log("hello", data.reviews);
        setReviews(data.reviews);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Customer Reviews</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h2 className="review-author">{review.name}</h2>
              <p className="review-content">Review: {review.comment}</p>
              <span className="review-rating">Rating: {review.rating}/5</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;