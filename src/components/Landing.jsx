import "../css/Landing.css";
// import Categories from "../components/Categories.jsx";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main>
      <section className="landing-section">
        <div className="page-container flex">
          <article id="landing-body">
            <h1 className="landing-h1">Welcome to Roles.</h1>
            <div className="landing-text">
              Roles. is the most comprehensive database of board game
              information and reviews on the web! Take a look around, check out
              some of the reviews, leave your own review and have fun!
            </div>
          </article>
          <div className="landing-links">
            <div className="landing-links-cont">
              <div className="landing-link">
                {" "}
                <Link
                  to={"/reviews"}
                  style={{ textDecoration: "none", color: "White" }}
                >
                  <div className="reviews-link">
                    <div className="reviews-link-tile">
                      <div className="landing-link-title">R</div>
                      <div className="scrab-num">6</div>
                    </div>
                    <div className="landing-link-right">
                      Looking for board game reviews? Well look no further, our
                      reviews section contains the most comprehensive database
                      of board game reviews and information on the web.
                    </div>
                  </div>
                </Link>
              </div>
              <div className="landing-link">
                {" "}
                <Link
                  to={"/categories"}
                  style={{ textDecoration: "none", color: "White" }}
                >
                  <div className="categories-link">
                    <div className="categories-link-tile">
                      <div className="landing-link-title"> C</div>
                      <div className="scrab-num">2</div>
                    </div>
                    <div className="landing-link-right">
                      Do you prefer strategy games? Or maybe card-based games
                      are your thing? Well go through to our categories section
                      and explore board game reviews for the genre you are
                      looking for!
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
