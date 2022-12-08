import { Link } from "react-router-dom";
import "../Nav.css";

const Nav = ({ user, currCategory, setCurrCategory }) => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link" id="nav-link-home">
        Home
      </Link>
      <Link
        to="/reviews"
        className="nav-link"
        id="nav-link-reviews"
        onClick={() => {
          setCurrCategory("");
        }}
      >
        Reviews
      </Link>
      <Link to="/categories" className="nav-link" id="nav-link-categories">
        Categories
      </Link>
      {/* <section id="nav-user-container"><p>User: {user}</p></section> */}
    </nav>
  );
};

export default Nav;
