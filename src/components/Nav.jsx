import { NavLink } from "react-router-dom";
import "../css/Nav.css";

const Nav = ({ user, currCategory, setCurrCategory, review, setReview }) => {
  return (
    <nav className="nav">
      <div className="page-container flex-row">
        <div className="nav-links-left">
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className="nav-link"
            id="nav-link-home"
          >
            Roles.
          </NavLink>
        </div>
        <div className="nav-links-right">
          <NavLink to="/" activeClassName="active" className="nav-link">
            Home
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
