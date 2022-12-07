import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../api";
import "../Reviews.css";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <div>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Review...</p>
        </div>
      ) : (
        <div className="single-review-card">
          <p id="single-review-id">Review id: {review.review_id}</p>
          <p id="review-title">{review.title}</p>
          <p id="review-designer">Designed by: {review.designer}</p>
          <img
            src={review.review_img_url}
            id="review-img"
            alt={review.title}
          ></img>
          <div id="single-review-card-internal">
            <p id="review-body">{review.review_body}</p>
            <p id="single-review-category">Category: {review.category}</p>
          </div>
          <div className="single-review-grid-container">
            <Link
              to={`/reviews/${review.review_id}/comments`}
              id="comments-link"
            >
              <p id="comment-count">No. of comments: {review.comment_count}</p>
            </Link>
            <p id="votes">Votes: {review.votes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
