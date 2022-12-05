import { useEffect, useState } from "react";
import "../Reviews.css";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <article>
              <li key={review.id} className="review-card">
                <p id="review-title">{review.title}</p>
                <p id="review-designer">Designed by: {review.designer}</p>
                <img
                  src={review.review_img_url}
                  height="150px"
                  id="review-img"
                  alt={review.title}
                ></img>
                <p id="review-category">Category: {review.category}</p>
                <p id="review-body">{review.review_body}</p>
                <p id="comment-count">
                  No. of comments: {review.comment_count}
                </p>
                <p id="votes">Votes: {review.votes}</p>
                <p id="review-id">Review id: {review.review_id}</p>
              </li>
            </article>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
