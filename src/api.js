import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://dead-puce-abalone-cap.cyclic.app/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data: { review } }) => {
    return review[0];
  });
};

export const getCommentsForReview = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data: { reviews } }) => {
      console.log(reviews, "reviews from api");
      return reviews;
    });
};
