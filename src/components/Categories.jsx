import { useEffect, useState } from "react";
import { getCategories } from "../api";
import "../Category-list.css";

const Categories = () => {
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
                <p id="category-title"> Category: {category.slug}</p>
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
