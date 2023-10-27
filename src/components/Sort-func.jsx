import "../Review-sort.css";

const ReviewSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Sort Reviews by:</button>
      <div className="dropdown-content">
        <p
          onClick={() => {
            setSortBy("created_at");
          }}
        >
          <span id="drop-dot">&#183; </span> Date added
        </p>
        <p
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          <span id="drop-dot">&#183; </span> No. of Comments
        </p>
        <p
          onClick={() => {
            setSortBy("votes");
          }}
        >
          <span id="drop-dot">&#183; </span> No. of Votes
        </p>
      </div>
    </div>
  );
};

export default ReviewSort;
