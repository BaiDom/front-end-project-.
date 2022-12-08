import { useEffect, useState } from "react";
import { getCategories } from "../api";

const Categories = () => {
  const [cats, setCats] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCats(categories);
    });
  });

  return (
    <section>
      <h2 id="categories-h2">Categories</h2>
      {isLoading ? (
        <div>
          <p id="loading-text">Loading Categories...</p>
        </div>
      ) : (
        <ul id="categories-ul">
          {categories.map((category) => {
            <article key={category.slug}>
              <li key={category.slug}>
                <p>{category.slug}</p>
                <p>{category.description}</p>
              </li>
            </article>;
          })}
        </ul>
      )}
    </section>
  );
};

export default Categories;
