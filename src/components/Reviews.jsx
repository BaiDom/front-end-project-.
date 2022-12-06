import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Reviews.css";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <p>Loading...</p>
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
                    {/* <p id="review-id">Review id: {review.review_id}</p> */}
                    <p id="review-title">{review.title}</p>
                    <p id="review-designer">Designed by: {review.designer}</p>
                    <img
                      src={review.review_img_url}
                      id="review-img"
                      alt={review.title}
                    ></img>
                    <div className="review-grid-container">
                      <div id="review-card-internal">
                        <p id="comment-count">
                          No. of comments: {review.comment_count}
                        </p>
                        <p id="votes">Votes: {review.votes}</p>
                        <p id="review-category">Category: {review.category}</p>
                      </div>
                    </div>
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
