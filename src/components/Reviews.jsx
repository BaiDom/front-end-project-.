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
    <div className="page-container flex">
      <ReviewSort sortBy={sortBy} setSortBy={setSortBy} />
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews...</p>
        </div>
      ) : (
        <section className="reviews-section flex">
          <div className="reviews-cont">
            {reviews.map((review) => {
              return (
                <article
                  key={`${review.review_id}`}
                  className="review-card flex"
                >
                  <div id="review-card-internal">
                    <Link
                      to={`/reviews/${review.review_id}`}
                      className="review-card-link"
                      id={`review-card-link-${review.review_id}`}
                    >
                      <p id="review-category">-&nbsp;{review.category}</p>
                      <p id="review-title">{review.title}</p>
                      <p id="review-designer">Designed by: {review.designer}</p>
                      <img
                        src={review.review_img_url}
                        id="review-img"
                        alt={review.title}
                      ></img>
                      <p id="click">Click for full review!</p>
                    </Link>
                    <p id="comment-count">{review.comment_count} Comments</p>

                    <div id="review-vote-container">
                      <p id="votes">Votes for this review: {review.votes}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Reviews;
