import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById, updateUpVotes } from "../api";
import "../Reviews.css";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();
  const [err, setErr] = useState(null);
  const [vote, setVote] = useState(0);

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setVote(review.votes);
      console.log(review, "review");
      setIsLoading(false);
    });
  }, [review_id]);

  const handleVote = (review_id, voteChange) => {
    setVote(vote + voteChange);
    updateUpVotes(review_id, voteChange).catch((err) => {
      setErr("Oopsie something went wrong! Give it another go eh?");
    });
  };

  if (err) return <p>{err}</p>;

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
          <p id="single-review-category">Category: {review.category}</p>
          <img
            src={review.review_img_url}
            id="review-img"
            alt={review.title}
          ></img>
          <div id="single-review-card-internal">
            <p id="review-body">{review.review_body}</p>
            <div className="single-review-grid-container">
              <Link
                to={`/reviews/${review.review_id}/comments`}
                id="comments-link"
              >
                <p id="single-review-comment-count">
                  No. of comments: {review.comment_count}
                </p>
              </Link>
              <div id="single-review-vote-container">
                <p id="single-review-votes">Votes for this review: {vote}</p>
                <button
                  className="review-vote-button"
                  id="single-rev-up-vote"
                  onClick={() => {
                    handleVote(review.review_id, 1);
                  }}
                >
                  👍
                </button>
                <button
                  className="review-vote-button"
                  id="single-rev-down-vote"
                  onClick={() => {
                    handleVote(review.review_id, -1);
                  }}
                >
                  👎
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
