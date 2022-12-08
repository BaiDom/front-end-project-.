import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Reviews.css";
import { getReviews } from "../api";
import ReviewsCategory from "./Reviews-category";

const Reviews = ({ currCategory, setCurrCategory }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (currCategory !== "")
    return (
      <ReviewsCategory
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
    );

  if (err) return <p>{err}</p>;

  return (
    <div>
      <h2 id="reviews-h2">Reviews.</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews...</p>
        </div>
      ) : (
        <ul id="review-card-ul">
          {reviews.map((review) => {
            return (
              <article key={review.id}>
                <li key={review.id} className="review-card">
                  <Link
                    to={`/reviews/${review.review_id}`}
                    key={review.id}
                    className="review-card-link"
                    id={`review-card-link-${review.review_id}`}
                  >
                    <p id="review-title">{review.title}</p>
                    <p id="review-designer">Designed by: {review.designer}</p>
                    <p id="review-category">Category: {review.category}</p>
                    <img
                      src={review.review_img_url}
                      id="review-img"
                      alt={review.title}
                    ></img>
                    <p id="click">Click for full review!</p>
                  </Link>
                  <div className="review-grid-container">
                    <div id="review-card-internal">
                      <Link
                        to={`/reviews/${review.review_id}/comments`}
                        className="comments-link"
                        id={`comments-link-${review.review_id}`}
                      >
                        <p id="comment-count">
                          {review.comment_count} Comments
                        </p>
                      </Link>
                      <div id="review-vote-container">
                        <p id="votes">Votes for this review: {review.votes}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </article>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
