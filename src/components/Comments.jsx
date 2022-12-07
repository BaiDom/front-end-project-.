import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsForReview } from "../api";
import "../Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { review_id } = useParams();

  useEffect(() => {
    getCommentsForReview(review_id).then((commentObj) => {
      setComments(commentObj);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <div>
      {isLoading ? (
        <p id="loading-text">Loading Comments...</p>
      ) : (
        <div>
          {comments.length === 0 ? (
            <div id="no-comments-text">
              <p>
                There are currently no comments for this review, maybe in the
                future you will be able to add one...
              </p>
            </div>
          ) : (
            <div>
              <h2 id="comments-h2">Comments</h2>
              <ul id="comment-ul">
                {comments.map((comment) => {
                  return (
                    <div id="comment-grid-container">
                      <li id="comment-card">
                        <article>
                          <div id="comment-card-internal">
                            <p id="comment-body">{comment.body}</p>
                          </div>
                          <p id="comment-comment-id">
                            Comment id: {comment.comment_id}
                          </p>
                          <p id="comment-review-id">
                            Review id: {comment.review_id}
                          </p>
                          <p id="comment-votes">Votes: {comment.votes}</p>
                          <p id="comment-author">
                            Comment posted by: {comment.author}
                          </p>
                          <p id="comment-created">({comment.created_at})</p>
                        </article>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
