import { Link } from "react-router-dom";
import "../Nav.css";

const Nav = ({ user }) => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link" id="nav-link-home">
        Home
      </Link>
      <Link to="/reviews" className="nav-link" id="nav-link-reviews">
        Reviews
      </Link>
      <Link to="/api/categories" className="nav-link" id="nav-link-categories">
        Categories
      </Link>
      {/* <section id="nav-user-container"><p>User: {user}</p></section> */}
    </nav>
  );
};

export default Nav;
