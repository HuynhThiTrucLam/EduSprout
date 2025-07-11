import React, { useState } from "react";
import styles from "./Category.module.scss";
import CategoryItem from "./CategoryItem";
import { categories, type Category } from "../../types/categories";

interface CategoriesProps {
  onCategoryChange?: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories[0]
  );

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className={styles["Categories"]}>
      <div className={styles["Categories-container"]}>
        <div className={styles["Categories-header"]}>
          <h3>Categories</h3>
        </div>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={activeCategory?.id === category.id}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
