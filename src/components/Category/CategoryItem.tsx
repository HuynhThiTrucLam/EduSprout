import React from "react";
import styles from "./Category.module.scss";
import IconRegistry from "./IconRegistry";
import type { Category } from "../../types/categories";

interface CategoryItemProps {
  category: Category;
  isActive?: boolean;
  onClick?: (category: Category) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(category);
  };

  return (
    <div
      className={`${styles["CategoryItem"]} ${
        isActive ? styles["CategoryItem--active"] : ""
      }`}
      onClick={handleClick}
    >
      <IconRegistry name={category.iconName} />
      <p>{category.title}</p>
    </div>
  );
};

export default CategoryItem;
