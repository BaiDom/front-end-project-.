import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Reviews.css";
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
      <h1 className="reviews-h1">Reviews</h1>
      <div className="reviews-section-upper">
        Welcome to the reviews section of the site, here you will find reviews
        for all of the boardgames featured on this site.
      </div>

      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews...</p>
        </div>
      ) : (
        <section className="reviews-section flex">
          <div className="reviews-cont">
            <ReviewSort sortBy={sortBy} setSortBy={setSortBy} />
            <div className="reviews-grid">
              {reviews.map((review) => {
                return (
                  <article
                    key={`${review.review_id}`}
                    className="review-card flex"
                  >
                    <div id="review-card-internal">
                      <img
                        src={review.review_img_url}
                        id="review-img"
                        alt={review.title}
                        loading="lazy"
                      ></img>
                      <div className="title-cont">
                        <p id="review-title">{review.title}</p>
                      </div>
                      <p id="review-category">-&nbsp;{review.category}</p>
                      <Link
                        to={`/reviews/${review.review_id}`}
                        className="review-card-link"
                        id={`review-card-link-${review.review_id}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <div className="click-for-more">
                          Click for More Info.
                        </div>
                      </Link>
                      {/* <div id="review-vote-container">
                      <div id="comment-count">💬 {review.comment_count}</div>
                      <div id="votes">👍 {review.votes}</div>
                    </div> */}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Reviews;
