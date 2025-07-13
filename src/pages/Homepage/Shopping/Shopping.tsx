import { useEffect, useState } from "react";
import FilterIcon from "../../../assets/Icons/FilterIcon";
import GridIcon from "../../../assets/Icons/GridIcon";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import Categories from "../../../components/Category/Categories";
import Filter from "../../../components/Filter/Filter";
import NoData from "../../../components/NoData/NoData";
import ProductItem from "../../../components/Product/ProductItem";
import { Input } from "../../../components/ui/input";
import {
  getAllBooksService,
  getAllCoursesService,
  getAllDocumentsService,
} from "../../../services/product_service";
import { categories, type Category } from "../../../types/categories";
import type { Language } from "../../../types/language";
import type { Major } from "../../../types/major";
import styles from "./Shopping.module.scss";

const Shopping = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const [minPrice, setMinPrice] = useState<number | null>(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(0);

  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);
  const [isChangeLayout, setIsChangeLayout] = useState<boolean>(false);
  const [isOpenMobileFilter, setIsOpenMobileFilter] = useState<boolean>(false);

  const [productList, setProductList] = useState<any[]>([]);

  const handleGetProducts = async (category: string) => {
    try {
      if (category.toLowerCase() === "course") {
        const response = await getAllCoursesService();
        console.log("Courses response:", response);
        setProductList(response);
      } else if (category.toLowerCase() === "books") {
        const response = await getAllBooksService();
        console.log("Books response:", response);
        setProductList(response);
      } else if (category.toLowerCase() === "documents") {
        const response = await getAllDocumentsService();
        console.log("Documents response:", response);
        setProductList(response);
      } else {
        console.warn(`No service found for category: ${category}`);
        setProductList([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProductList([]);
    }
  };

  const handleOpenMobileFilter = () => {
    setIsOpenMobileFilter(true);
  };

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

    setIsActiveFilter(true);
    console.log("Filters reset");
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories[0]
  );

  const handleCategoryChange = (category: Category) => {
    console.log("Category changed to:", category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log("useEffect triggered - selectedCategory:", selectedCategory);
    if (selectedCategory?.slug) {
      console.log("Fetching products for category:", selectedCategory.slug);
      handleGetProducts(selectedCategory.slug);
    }
    setIsActiveFilter(false);
  }, [isActiveFilter, selectedCategory]);

  return (
    <div id="shopping-section" className={styles["Shopping"]}>
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
                <span>{productList.length} products</span>
              </div>
              <div className={styles["Shopping-list-header-right"]}>
                <div
                  className={`${styles["Shopping-mobile-filter-icon"]} ${
                    isActiveFilter ? styles["active"] : ""
                  }`}
                  onClick={handleOpenMobileFilter}
                >
                  <FilterIcon />
                </div>
                <div
                  className={`${styles["Shopping-list-header-right-item"]} ${
                    isChangeLayout ? styles["active"] : ""
                  }`}
                  onClick={() => setIsChangeLayout(!isChangeLayout)}
                >
                  <GridIcon />
                </div>
                <div className={styles["Shopping-list-header-right-search"]}>
                  <Input type="email" placeholder="Search" />
                  <div className="&:hover:rouded-full ">
                    <SearchIcon strokeColor="var(--search-icon-stroke)" />
                  </div>
                </div>
              </div>
            </div>
            {productList.length > 0 ? (
              <div className={styles["Shopping-list-products"]}>
                {productList.map((product) => (
                  <ProductItem key={product.id} productInfor={product} />
                ))}
              </div>
            ) : (
              <NoData text="No products found" />
            )}
          </div>
          {isOpenMobileFilter && (
            <div className={styles["Shopping-mobile-filter"]}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopping;
