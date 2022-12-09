import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://dead-puce-abalone-cap.cyclic.app/api",
});

export const getReviews = (sort_by, category) => {
  let params = {
    category: category,
    sort_by: sort_by,
  };
  return gamesApi.get("/reviews", { params }).then(({ data: { reviews } }) => {
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
      return reviews;
    });
};

export const updateUpVotes = (review_id, vote) => {
  const patchBody = {
    inc_votes: vote,
  };
  return gamesApi
    .patch(`/reviews/${review_id}`, patchBody)
    .then(({ data: { review } }) => {
      return review[0];
    });
};

export const postComment = (review_id, commentObj) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, commentObj)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data: { categories } }) => {
    return categories;
  });
};
