import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Reviews.css";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h2 id="reviews-h2">Reviews</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews...</p>
        </div>
      ) : (
        <ul id="review-card-ul">
          {reviews.map((review) => {
            return (
              <Link
                to={`/reviews/${review.review_id}`}
                key={review.id}
                id="review-card-link"
              >
                <article key={review.id}>
                  <li key={review.id} className="review-card">
                    <p id="review-title">{review.title}</p>
                    <p id="review-designer">Designed by: {review.designer}</p>
                    <img
                      src={review.review_img_url}
                      id="review-img"
                      alt={review.title}
                    ></img>
                    <div className="review-grid-container">
                      <div id="review-card-internal">
                        <Link
                          to={`/reviews/${review.review_id}/comments`}
                          id="comments-link"
                        >
                          <p id="comment-count">
                            No. of comments: {review.comment_count}
                          </p>
                        </Link>
                        <p id="votes">Votes: {review.votes}</p>
                        <p id="review-category">Category: {review.category}</p>
                      </div>
                    </div>
                    <p id="click">Click to see more!</p>
                  </li>
                </article>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
