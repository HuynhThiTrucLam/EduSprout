import React, { useState } from "react";
import Categories from "../../../components/Category/Categories";
import Search from "../../../components/Search/Search";
import styles from "./Shopping.module.scss";
import type { Category } from "../../../types/categories";

const Shopping = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    // You can add logic to filter products based on category here
  };

  return (
    <div className={styles["Shopping"]}>
      <div className={styles["Shopping-container"]}>
        <div className={styles["Shopping-header"]}>
          <h2>Most Popular Products</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <Search placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        </div>
        <div className={styles["Shopping-categories"]}>
          <Categories onCategoryChange={handleCategoryChange} />
        </div>
        <div className={styles["Shopping-search"]}></div>
        <div className={styles["Shopping-products"]}>
          <div className={styles["Shopping-products-filter"]}></div>
          <div className={styles["Shopping-products-list"]}>
            {selectedCategory && (
              <p>Showing products for: {selectedCategory.title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
