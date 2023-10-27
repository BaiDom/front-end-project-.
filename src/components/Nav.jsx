import { NavLink } from "react-router-dom";
import "../Nav.css";

const Nav = ({ user, currCategory, setCurrCategory, review, setReview }) => {
  return (
    <nav className="nav">
      <NavLink
        exact
        activeClassName="active"
        to="/"
        className="nav-link"
        id="nav-link-home"
      >
        Roles.
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/reviews"
        className="nav-link"
        id="nav-link-reviews"
        onClick={() => {
          // setCurrCategory("");
          setReview("");
        }}
      >
        Reviews
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/categories"
        className="nav-link"
        id="nav-link-categories"
      >
        Categories
      </NavLink>
      {/* <section id="nav-user-container"><p>User: {user}</p></section> */}
    </nav>
  );
};

export default Nav;
