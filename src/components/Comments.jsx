import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsForReview } from "../api";
import "../Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  let { review_id } = useParams();

  useEffect(() => {
    getCommentsForReview(review_id).then((commentObj) => {
      setComments(commentObj);
    });
  }, [review_id]);

  return (
    <div>
      <h2>Comments</h2>
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
                  <p id="comment-review-id">Review id: {comment.review_id}</p>
                  <p id="comment-votes">
                    Votes for this comment: {comment.votes}
                  </p>
                  {/* <p id="comment-author">Posted by: {comment.author}</p> */}
                  <p id="comment-created">
                    Comment posted by: {comment.author} ({comment.created_at}){" "}
                  </p>
                </article>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
