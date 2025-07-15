import { useEffect, useState } from "react";
import FilterIcon from "../../../assets/Icons/FilterIcon";
import GridIcon from "../../../assets/Icons/GridIcon";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import Categories from "../../../components/Category/Categories";
import Filter from "../../../components/Filter/Filter";
import NoData from "../../../components/NoData/NoData";
import ProductItem from "../../../components/Product/ProductItem";
import { Input } from "../../../components/ui/input";

import { filterProducts, type FilterOptions } from "../../../lib/filterUtils";
import { trackSearch } from "../../../lib/recommendationUtils";
import {
  getAllBooksService,
  getAllCoursesService,
  getAllDocumentsService,
  searchProductsService,
} from "../../../services/product_service";
import { categories, type Category } from "../../../types/categories";
import { majors, type Major } from "../../../types/major";
import styles from "./Shopping.module.scss";
import { Selection } from "../../../components/Selection/Selection";
import Button from "../../../components/commons/Button";

const Shopping = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(majors[0]);
  // const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
  //   languages[0]
  // );
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);
  const [isChangeLayout, setIsChangeLayout] = useState<boolean>(false);
  const [isOpenMobileFilter, setIsOpenMobileFilter] = useState<boolean>();
  const [isOpenFilterTab, setIsOpenFilterTab] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [productList, setProductList] = useState<any[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPaginationLoading, setIsPaginationLoading] =
    useState<boolean>(false);
  const itemsPerPage = 6;

  // Calculate pagination values
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productList.slice(startIndex, endIndex);

  // Reset to first page when filters change or category changes
  const resetPagination = () => {
    setCurrentPage(1);
  };

  const handleGetProducts = async (category: string) => {
    try {
      if (category.toLowerCase() === "courses") {
        const response = await getAllCoursesService();
        console.log("Courses response:", response);
        setAllProducts(response); // Save all products
        setProductList(response); // Show all by default
      } else if (category.toLowerCase() === "books") {
        const response = await getAllBooksService();
        console.log("Books response:", response);
        setAllProducts(response); // Save all products
        setProductList(response); // Show all by default
      } else if (category.toLowerCase() === "documents") {
        const response = await getAllDocumentsService();
        console.log("Documents response:", response);
        setAllProducts(response); // Save all products
        setProductList(response); // Show all by default
      } else {
        console.warn(`No service found for category: ${category}`);
        setProductList([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProductList([]);
    }
  };

  const handleFilter = async () => {
    setIsLoading(true); // Show skeleton
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const options: FilterOptions = {
      major: selectedMajor,
      // language: selectedLanguage,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    };
    const filtered = filterProducts(allProducts, options);
    setProductList(filtered);
    setIsOpenMobileFilter(false);
    setIsOpenFilterTab(true);
    setIsLoading(false); // Hide skeleton
  };

  const handleResetFilters = () => {
    setSelectedMajor(majors[0]);
    // setSelectedLanguage(languages[0]);
    setMinPrice("");
    setMaxPrice("");

    setIsActiveFilter(true);
    console.log("Filters reset");
  };

  // const handleLanguageChange = (language: Language) => {
  //   setSelectedLanguage(language);
  // };

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories[0]
  );

  const handleCategoryChange = async (category: Category) => {
    setIsLoading(true);
    console.log("Category changed to:", category);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSelectedCategory(category);
    setIsLoading(false);
  };

  // Handle page change
  const handlePageChange = (page: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (page === currentPage) return;

    // Add loading state for smooth transition
    setIsPaginationLoading(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setCurrentPage(page);
      setIsPaginationLoading(false);
    }, 300);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Handle search
  const handleSearch = async (searchString: string) => {
    setIsLoading(true);
    if (searchString.trim()) {
      trackSearch(searchString.trim());
    }
    let response: any[] = [];
    if (selectedCategory?.slug) {
      response = await searchProductsService(
        selectedCategory?.slug.toLowerCase() || "",
        searchString
      );
    }
    setProductList(response || []);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("useEffect triggered - selectedCategory:", selectedCategory);
    if (selectedCategory?.slug) {
      console.log("Fetching products for category:", selectedCategory.slug);
      handleGetProducts(selectedCategory.slug);
    }
    setIsActiveFilter(false);
    resetPagination();
    setIsOpenMobileFilter(false);
  }, [isActiveFilter, selectedCategory]);
  return (
    <div id="shopping-section" className={styles["Shopping"]}>
      <div className={styles["Shopping-container"]}>
        <div className={styles["Shopping-header"]}>
          <h2>Danh sách sản phẩm</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
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
              // selectedLanguage={selectedLanguage}
              // handleSelectLanguage={handleLanguageChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className={styles["Shopping-list"]}>
            <div className={styles["Shopping-list-header"]}>
              <div className={styles["Shopping-list-header-left"]}>
                <p>Kết quả tìm kiếm:</p>
                <span>{productList.length} sản phẩm</span>
              </div>
              <div className={styles["Shopping-list-header-right"]}>
                <div
                  className={`${styles["Shopping-mobile-filter-icon"]} ${
                    isActiveFilter ? styles["active"] : ""
                  }`}
                  onClick={() => {
                    setIsOpenMobileFilter(!isOpenMobileFilter);
                  }}
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
                  <Input
                    type="text"
                    placeholder="Tìm kiếm"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      handleSearch(e.target.value.trim());
                    }}
                  />
                  <div className="&:hover:rouded-full ">
                    <SearchIcon strokeColor="var(--search-icon-stroke)" />
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Pagination */}
            {totalPages > 1 && (
              <div className={styles["Shopping-pagination"]}>
                <div className={styles["pagination-container"]}>
                  <button
                    className={`${styles["pagination-btn"]} ${
                      styles["pagination-prev"]
                    } ${currentPage === 1 ? styles["disabled"] : ""}`}
                    onClick={(e) =>
                      handlePageChange(Math.max(1, currentPage - 1), e)
                    }
                    disabled={currentPage === 1}
                  >
                    <span className={styles["pagination-text"]}>Trước</span>
                  </button>

                  <div className={styles["pagination-numbers"]}>
                    {getPageNumbers().map((page, index) => (
                      <div key={index}>
                        {page === "..." ? (
                          <span className={styles["pagination-ellipsis"]}>
                            ...
                          </span>
                        ) : (
                          <button
                            className={`${styles["pagination-number"]} ${
                              currentPage === page ? styles["active"] : ""
                            }`}
                            onClick={(e) => handlePageChange(page as number, e)}
                          >
                            {page}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`${styles["pagination-btn"]} ${
                      styles["pagination-next"]
                    } ${currentPage === totalPages ? styles["disabled"] : ""}`}
                    onClick={(e) =>
                      handlePageChange(Math.min(totalPages, currentPage + 1), e)
                    }
                    disabled={currentPage === totalPages}
                  >
                    <span className={styles["pagination-text"]}>Sau</span>
                  </button>
                </div>
              </div>
            )}

            {/* Mobile Filter Tab In Mobile */}
            {isOpenMobileFilter && (
              <div className={styles["Shopping-mobile-tab"]}>
                <div className={styles["Shopping-mobile-tab-header"]}>
                  <p>Bộ lọc tìm kiếm</p>
                  <div
                    className={styles["Shopping-mobile-tab-header-reset"]}
                    onClick={handleResetFilters}
                  >
                    <p>Bỏ lọc</p>
                  </div>
                </div>
                <div className={styles["price"]}>
                  <p>
                    Khoảng giá <span>(VND)</span>
                  </p>
                  <div className={styles["input"]}>
                    <input
                      type="number"
                      placeholder="Từ ..."
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Đến ..."
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
                <Selection
                  title="Chuyên ngành"
                  options={majors}
                  selectedOption={selectedMajor}
                  handleSelect={(option) => setSelectedMajor(option as Major)}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.id.toString()}
                />
                <Button
                  text="Áp dụng"
                  onClick={handleFilter}
                  className={styles["Button"]}
                />
              </div>
            )}

            {isOpenFilterTab ? (
              <div className={styles["Shopping-Filter-tag"]}>
                {minPrice === "" && maxPrice === "" ? (
                  ""
                ) : (
                  <div className={styles["Shopping-Filter-tag-item"]}>
                    <p>
                      Khoảng giá:{" "}
                      <span>
                        {minPrice} - {maxPrice}
                      </span>
                    </p>
                  </div>
                )}
                <div className={styles["Shopping-Filter-tag-item"]}>
                  <p>Chuyên ngành: {selectedMajor?.title}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            {isLoading ? (
              <div className={styles["Shopping-list-products"]}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className={styles["ProductItemSkeleton"]}>
                    <div className={styles["ProductItemSkeletonImage"]} />
                    <div className={styles["ProductItemSkeletonTitle"]} />
                    <div className={styles["ProductItemSkeletonDetails"]} />
                  </div>
                ))}
              </div>
            ) : currentProducts.length > 0 ? (
              <>
                <div
                  className={`${styles["Shopping-list-products"]} ${
                    isPaginationLoading ? styles["loading"] : ""
                  }`}
                >
                  {currentProducts.map((product) => (
                    <ProductItem key={product.id} productInfor={product} />
                  ))}
                </div>
              </>
            ) : (
              <NoData text="Hiện chưa có sản phẩm nào" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
