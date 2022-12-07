import { Link } from "react-router-dom";
import "../Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link" id="nav-link-home">
        Home
      </Link>
      <Link to="/reviews" className="nav-link" id="nav-link-reviews">
        Reviews
      </Link>
    </nav>
  );
};

export default Nav;
