import "../Post-comment.css";

const PostComment = ({ newComment, setNewComment, handleSubmit, user }) => {
  return (
    <section id="comment-input-container">
      <form
        name="comment-form"
        className="comment-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="newComment" id="add-comment-text">
          Add a comment for this review!
        </label>
        <textarea
          name="comment-form-input"
          id="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button id="post-comment-button">Add</button>
        <p id="post-comment-as-text">Post comment as: {user}</p>
      </form>
    </section>
  );
};

export default PostComment;
