import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviewByCategory } from "../api";
import "../Reviews.css";

const ReviewsCategory = ({ currCategory, setCurrCategory }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewByCategory(currCategory).then((reviews) => {
      setCategoryList(reviews);
      setIsLoading(false);
    });
  }, [currCategory]);

  return (
    <section>
      <h2 id="reviews-h2">Reviews for {currCategory} Games.</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Reviews for {currCategory} Games...</p>
        </div>
      ) : (
        <section>
          {categoryList.map((review) => {
            return (
              <article className="review-card" id="review-cat-card">
                <p id="review-title">{review.title}</p>
                <p id="review-designer">Designed by:{review.designer}</p>
                <img
                  src={review.review_img_url}
                  id="review-img"
                  alt={review.title}
                ></img>
                <Link
                  to={`/reviews/${review.review_id}/comments`}
                  className="comments-link"
                  id={`comments-link-${review.review_id}`}
                >
                  <p id="comment-count">{review.comment_count} Comments</p>
                </Link>
                <p id="votes">Votes for this review: {review.votes}</p>
              </article>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default ReviewsCategory;
