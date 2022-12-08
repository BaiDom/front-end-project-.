import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";
import "../Category-list.css";

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
    <section>
      <h2 id="categories-h2">Categories.</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Categories...</p>
        </div>
      ) : (
        <section id="category-card-container">
          {categoryList.map((category) => {
            return (
              <article id="category-list-card">
                <Link
                  to={`/reviews?category=${category.slug}`}
                  key={category.slug}
                  id={`category-link-${category.slug}`}
                  onClick={() => {
                    setCurrCategory(category.slug);
                  }}
                >
                  <p id="category-title"> Category: {category.slug}</p>
                </Link>
                <p id="category-description">
                  Description: {category.description}
                </p>
              </article>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Categories;
