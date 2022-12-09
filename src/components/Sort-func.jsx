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
          -Date added-
        </p>
        <p
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          -No. of Comments-
        </p>
        <p
          onClick={() => {
            setSortBy("votes");
          }}
        >
          -No. of Votes-
        </p>
      </div>
    </div>
  );
};

export default ReviewSort;
