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
  filterProductsService,
  getAllBooksService,
  getAllCoursesService,
  getAllDocumentsService,
} from "../../../services/product_service";
import { categories, type Category } from "../../../types/categories";
import { languages, type Language } from "../../../types/language";
import { majors, type Major } from "../../../types/major";
import styles from "./Shopping.module.scss";

const Shopping = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(majors[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    languages[0]
  );
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

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

  const handleFilter = async () => {
    console.log("selectedMajor: ", selectedMajor);
    console.log("selectedLanguage: ", selectedLanguage);
    console.log("minPrice: ", minPrice);
    console.log("maxPrice: ", maxPrice);
    setIsLoading(true);

    // Build parameters object based on conditions
    const params: any = {
      typeOfProduct: selectedCategory?.slug || "courses",
    };

    // Only add major filter if not "All"
    if (selectedMajor && selectedMajor.title !== "All") {
      params.selectedMajorId = selectedMajor.id.toString();
    }

    // Only add language filter if not "All"
    if (selectedLanguage && selectedLanguage.title !== "All") {
      params.selectedLanguageId = selectedLanguage.id.toString();
    }

    // Only add price filters if both are not 0
    if (minPrice !== "" || maxPrice !== "") {
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : 0;
      params.minPrice = min;
      params.maxPrice = max;
    }

    const responseFilter = await filterProductsService(
      params.typeOfProduct,
      params.selectedMajorId,
      params.selectedLanguageId,
      params.minPrice,
      params.maxPrice
    );

    console.log("responseFilter: ", responseFilter);
    console.log("params: ", params);

    // Update the product list with filtered results
    setProductList(responseFilter);
    setIsLoading(false);
  };

  const handleResetFilters = () => {
    setSelectedMajor(majors[0]);
    setSelectedLanguage(languages[0]);
    setMinPrice("");
    setMaxPrice("");

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

            {isLoading ? (
              <div className={styles["Shopping-list-products"]}>
                {Array.from({ length: 6 }).map((_) => (
                  <div className={styles["ProductItemSkeleton"]}>
                    <div className={styles["ProductItemSkeletonImage"]} />
                    <div className={styles["ProductItemSkeletonTitle"]} />
                    <div className={styles["ProductItemSkeletonDetails"]} />
                  </div>
                ))}
              </div>
            ) : productList.length > 0 ? (
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
