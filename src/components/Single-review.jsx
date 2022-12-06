import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import "../Reviews.css";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  let { review_id } = useParams();

  //   console.log(reviewId, "review_id state before");
  //   console.log(review_id, "review id in single review");

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      console.log(review, "review");
    });
  }, [review_id]);
  //   console.log(reviewId, "review id state after");

  return (
    <div className="single-review-card">
      <p id="review-id">Review id: {review.review_id}</p>
      <p id="review-title">{review.title}</p>
      <p id="review-designer">Designed by: {review.designer}</p>
      <img src={review.review_img_url} id="review-img" alt={review.title}></img>
      <div id="review-card-internal">
        <p id="review-body">{review.review_body}</p>
      </div>
      <div className="review-grid-container">
        <p id="comment-count">No. of comments: {review.comment_count}</p>
        <p id="votes">Votes: {review.votes}</p>
      </div>
      <p id="review-category">Category: {review.category}</p>
    </div>
  );
};

export default SingleReview;
