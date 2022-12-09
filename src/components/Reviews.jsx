import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Reviews.css";
import { getReviews } from "../api";
import ReviewsCategory from "./Reviews-category";
import ReviewSort from "./Sort-func";

const Reviews = ({ currCategory, setCurrCategory, sortBy, setSortBy }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getReviews(sortBy, currCategory).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [sortBy, currCategory]);

  if (currCategory !== null)
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
      <ReviewSort sortBy={sortBy} setSortBy={setSortBy} />
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews...</p>
        </div>
      ) : (
        <ul id="review-card-ul">
          {reviews.map((review) => {
            return (
              <article key={`${review.review_id}`}>
                <li className="review-card">
                  <p id="review-title">{review.title}</p>
                  <div id="review-card-internal">
                    <Link
                      to={`/reviews/${review.review_id}`}
                      className="review-card-link"
                      id={`review-card-link-${review.review_id}`}
                    >
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
                      <p id="comment-count">{review.comment_count} Comments</p>

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
