import { useState } from "react";
import Categories from "../../../components/Category/Categories";
import Filter from "../../../components/Filter/Filter";
import Search from "../../../components/Search/Search";
import type { Category } from "../../../types/categories";
import styles from "./Shopping.module.scss";
import type { Major } from "../../../types/major";
import type { Language } from "../../../types/language";
import FilterIcon from "../../../assets/Icons/FilterIcon";
import GridIcon from "../../../assets/Icons/GridIcon";

const Shopping = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const [minPrice, setMinPrice] = useState<number | null>(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(0);

  const handleFilter = () => {
    console.log("selectedMajor: ", selectedMajor);
    console.log("selectedLanguage: ", selectedLanguage);
    console.log("minPrice: ", minPrice);
    console.log("maxPrice: ", maxPrice);
  };

  const handleResetFilters = () => {
    setSelectedMajor(null);
    setSelectedLanguage(null);
    setMinPrice(0);
    setMaxPrice(0);
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
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className={styles["Shopping-list"]}>
            <div className={styles["Shopping-list-header"]}>
              <div className={styles["Shopping-list-header-left"]}>
                <p>Results:</p>
                <span>145 products</span>
              </div>
              <div className={styles["Shopping-list-header-right"]}>
                <div className="item">
                  <FilterIcon />
                </div>
                <div className="item">
                  <GridIcon />
                </div>
                <Search placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
              </div>
            </div>
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
