import { Link } from "react-router-dom";
import "../Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" id="nav-link">
        Home
      </Link>
      <Link to="/reviews" id="nav-link">
        Reviews
      </Link>
    </nav>
  );
};

export default Nav;
