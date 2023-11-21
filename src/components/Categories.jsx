import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";
import "../css/Category-list.css";

const Categories = ({ currCategory, setCurrCategory }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategoryList(categories);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page-container">
      <h2 id="categories-h2">Categories.</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Categories...</p>
        </div>
      ) : (
        <section id="category-section">
          <div className="category-card-cont">
            {categoryList.map((category) => {
              return (
                <div className="category-card flip-card">
                  <Link
                    to={`/${category.slug}`}
                    id={`category-link-${category.slug}`}
                    className="category-link"
                    onClick={() => {
                      setCurrCategory(category.slug);
                    }}
                  >
                    <article key={category.slug}></article>

                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <p id="category-title">{category.slug}</p>
                      </div>
                      <div class="flip-card-back">
                        <p id="category-title">{category.slug}</p>
                        <p id="category-description">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Categories;
