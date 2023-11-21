import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, updateUpVotes } from "../api";
import "../css/Single-review.css";
import Comments from "./Comments";

const SingleReview = ({ user }) => {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();
  const [err, setErr] = useState(null);
  const [vote, setVote] = useState(0);

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setVote(review.votes);
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
    <div className="page-container sr-flex">
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Review...</p>
        </div>
      ) : (
        <div className="sixty">
          <div className="single-review-card" key={`key-${review.review_id}`}>
            <div className="single-card-top">
              <p id="single-review-id">- Review id: {review.review_id} -</p>
              <p id="single-review-category">- Category: {review.category} -</p>
            </div>

            <img
              src={review.review_img_url}
              id="single-review-img"
              alt={review.title}
            ></img>
            <div id="single-review-card-internal">
              <p id="single-review-title">{review.title}</p>
              <p id="single-review-designer">Designed by: {review.designer}</p>
              <div className="review-body-cont">
                <p id="single-review-body">{review.review_body}</p>
              </div>
              <div className="single-review-grid-container">
                <p id="single-review-comment-count">
                  No. of comments: {review.comment_count}
                </p>

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
        </div>
      )}
      <div className="forty">
        <Comments vote={vote} review={review} user={user} />
      </div>
    </div>
  );
};

export default SingleReview;
