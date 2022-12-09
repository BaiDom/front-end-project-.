import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsForReview, postComment } from "../api";
import "../Comments.css";
import PostComment from "./Post-comment";
import swal from "sweetalert";

const Comments = ({ user, review }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  let { review_id } = useParams();

  useEffect(() => {
    getCommentsForReview(review_id).then((commentObj) => {
      setComments(commentObj);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      username: user,
      body: newComment,
    };

    const form = document.forms["comment-form"]["comment-form-input"].value;
    if (form === "") {
      swal("Hold up!", "Cannot post empty comment!", "error");
      return false;
    } else {
      postComment(review_id, commentObj)
        .then((commentFromApi) => {
          setNewComment("");
          setComments((currComments) => {
            const newComments = [...currComments];
            newComments.unshift(commentFromApi);
            return newComments;
          });
        })
        .then(swal("Awesome!", "Thanks for commenting", "success"))
        .catch((err) => {
          setErr("Oopsie something went wrong! Give it another go eh?");
        });
    }
  };

  return (
    <div>
      {isLoading ? (
        <p id="loading-text">Loading Comments...</p>
      ) : (
        <div>
          {comments.length === 0 ? (
            <div id="no-comments-text">
              <p id="no-comments-info">
                There are no comments for this review yet...
              </p>
              <PostComment
                newComment={newComment}
                setNewComment={setNewComment}
                handleSubmit={handleSubmit}
                user={user}
              />
            </div>
          ) : (
            <div>
              <h2 id="comments-h2">Comments.</h2>
              <div id="comment-card">
                <PostComment
                  newComment={newComment}
                  setNewComment={setNewComment}
                  handleSubmit={handleSubmit}
                  user={user}
                />
              </div>
              <ul id="comment-ul" key={`ul-${newComment.review_id}`}>
                {comments.map((comment) => {
                  return (
                    <div
                      id="comment-grid-container"
                      key={`comment-${comment.comment_id}`}
                    >
                      <li id="comment-card">
                        <article id="comment-article">
                          <p id="comment-review-id">
                            - Review id: {comment.review_id} -
                          </p>
                          <div id="comment-card-internal">
                            <p id="comment-body">{comment.body}</p>
                            <p id="comment-comment-id">
                              - Comment id: {comment.comment_id} -
                            </p>
                            <p id="comment-author">
                              Comment posted by: {comment.author}
                            </p>
                            <p id="comment-created">({comment.created_at})</p>
                          </div>
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
