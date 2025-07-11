import { useState } from "react";
import Categories from "../../../components/Category/Categories";
import Filter from "../../../components/Filter/Filter";
import Search from "../../../components/Search/Search";
import type { Category } from "../../../types/categories";
import styles from "./Shopping.module.scss";
import type { Major } from "../../../types/major";
import type { Language } from "../../../types/language";

const Shopping = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleFilter = () => {
    console.log("selectedMajor: ", selectedMajor);
  };

  const handleResetFilters = () => {
    setSelectedMajor(null);
    console.log("Filters reset");
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

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
        <div className={styles["Shopping-products"]}>
          <div className={styles["Shopping-filter"]}>
            <Filter
              selectedMajor={selectedMajor}
              handleSelectMajor={setSelectedMajor}
              handleFilter={handleFilter}
              handleResetFilters={handleResetFilters}
              selectedLanguage={selectedLanguage}
              handleSelectLanguage={handleLanguageChange}
            />
          </div>
          <div className={styles["Shopping-list"]}>
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
