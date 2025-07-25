import { useEffect, useState } from "react";
import { toast } from "sonner";
import FilterIcon from "../../../assets/Icons/FilterIcon";
import SearchIcon from "../../../assets/Icons/SearchIcon";
import Categories from "../../../components/Category/Categories";
import Filter from "../../../components/Filter/Filter";
import NoData from "../../../components/NoData/NoData";
import ProductItem from "../../../components/Product/ProductItem";
import { Input } from "../../../components/ui/input";

import Button from "../../../components/commons/Button";
import { filterProducts, type FilterOptions } from "../../../lib/filterUtils";
import { trackSearch } from "../../../lib/recommendationUtils";
import { formatPrice } from "../../../lib/utils";
import {
  getAllBooksService,
  getAllCoursesService,
  getAllDocumentsService,
  searchProductsService,
} from "../../../services/product_service";
import { categories, type Category } from "../../../types/categories";
import { majors, type Major } from "../../../types/major";
import styles from "./Shopping.module.scss";

const Shopping = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMajors, setSelectedMajors] = useState<Major[]>([]);

  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(false);
  const [isOpenMobileFilter, setIsOpenMobileFilter] = useState<boolean>();
  const [isOpenFilterTag, setIsOpenFilterTag] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [productList, setProductList] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPaginationLoading, setIsPaginationLoading] =
    useState<boolean>(false);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productList.slice(startIndex, endIndex);

  const resetPagination = () => {
    setCurrentPage(1);
  };

  const handleGetProducts = async (category: string) => {
    try {
      if (category.toLowerCase() === "courses") {
        const response = await getAllCoursesService();
        console.log("Courses response:", response);
        setAllProducts(response);
        setProductList(response);
      } else if (category.toLowerCase() === "books") {
        const response = await getAllBooksService();
        console.log("Books response:", response);
        setAllProducts(response);
        setProductList(response);
      } else if (category.toLowerCase() === "documents") {
        const response = await getAllDocumentsService();
        console.log("Documents response:", response);
        setAllProducts(response);
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

  const handleFilter = async () => {
    const hasMinPrice = minPrice.trim() !== "";
    const hasMaxPrice = maxPrice.trim() !== "";
    const hasMajorSelected = selectedMajors.length > 0;

    if (!hasMinPrice && !hasMaxPrice && !hasMajorSelected) {
      toast.error(
        "Vui lòng chọn ít nhất một tiêu chí lọc (giá hoặc chuyên ngành)"
      );
      return;
    }

    if (hasMinPrice && hasMaxPrice) {
      const minPriceNum = Number(minPrice);
      const maxPriceNum = Number(maxPrice);

      if (maxPriceNum < minPriceNum) {
        toast.error("Giá tối đa phải lớn hơn hoặc bằng giá tối thiểu");
        return;
      }
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const options: FilterOptions = {
      majors: selectedMajors,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    };
    const filtered = filterProducts(allProducts, options);
    setProductList(filtered);
    setIsOpenFilterTag(true);
    setIsLoading(false);
    resetPagination();

    if (filtered.length === 0) {
      toast.error("Không tìm thấy sản phẩm nào");
    } else {
      toast.success(`Đã lọc thành công! Tìm thấy ${filtered.length} sản phẩm`);
    }
  };

  const handleResetFilters = () => {
    setSelectedMajors([]);
    setMinPrice("");
    setMaxPrice("");

    setIsActiveFilter(true);
    console.log("Filters reset");
  };

  const handleMajorToggle = (major: Major) => {
    setSelectedMajors((prev) => {
      const isSelected = prev.some((m) => m.id === major.id);
      if (isSelected) {
        return prev.filter((m) => m.id !== major.id);
      } else {
        return [...prev, major];
      }
    });
  };

  const validatePriceInput = (value: string): boolean => {
    return value === "" || /^\d*\.?\d*$/.test(value);
  };

  const handlePriceChange = (
    value: string,
    setter: (price: string) => void
  ) => {
    if (validatePriceInput(value)) {
      const numValue = Number(value);
      if (value !== "" && (numValue < 0 || numValue > 999999999)) {
        toast.error("Giá phải nằm trong khoảng từ 0 đến 999,999,999");
        return;
      }
      setter(value);
    }
  };

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

  const handlePageChange = (page: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (page === currentPage) return;

    setIsPaginationLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsPaginationLoading(false);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpenMobileFilter && event.key === "Escape") {
        setIsOpenMobileFilter(false);
      }
    };

    if (isOpenMobileFilter) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpenMobileFilter]);

  const handleCloseMobileFilter = () => {
    setIsOpenMobileFilter(false);
  };

  const handleFilterApply = async () => {
    await handleFilter();
    setIsOpenMobileFilter(false);
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
              selectedMajors={selectedMajors}
              handleMajorToggle={handleMajorToggle}
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
                    isActiveFilter ||
                    selectedMajors.length > 0 ||
                    minPrice ||
                    maxPrice
                      ? styles["active"]
                      : ""
                  }`}
                  onClick={() => {
                    setIsOpenMobileFilter(!isOpenMobileFilter);
                  }}
                >
                  <FilterIcon />
                </div>
                {/* <div
                  className={`${styles["Shopping-list-header-right-item"]} ${
                    isChangeLayout ? styles["active"] : ""
                  }`}
                  onClick={() => setIsChangeLayout(!isChangeLayout)}
                >
                  <GridIcon />
                </div> */}
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
            <div className={styles["Shopping-middle"]}>
              {isOpenFilterTag ? (
                <div className={styles["Shopping-Filter-tag"]}>
                  {minPrice === "" && maxPrice === "" ? (
                    ""
                  ) : (
                    <div className={styles["Shopping-Filter-tag-item"]}>
                      <p>
                        {minPrice === "" ? 0 : formatPrice(parseInt(minPrice))}
                        VND -{" "}
                        {maxPrice === "" ? 0 : formatPrice(parseInt(maxPrice))}
                        VND
                      </p>
                    </div>
                  )}
                  {selectedMajors.length > 0
                    ? selectedMajors.map((major) => (
                        <div className={styles["Shopping-Filter-tag-item"]}>
                          <p>{major.title}</p>
                        </div>
                      ))
                    : ""}
                </div>
              ) : (
                ""
              )}

              {/* {totalPages > 1 && ( */}
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
            </div>
            {/* )} */}

            {/* Mobile Filter Tab In Mobile */}
            {isOpenMobileFilter && (
              <>
                {/* Backdrop Overlay */}
                <div
                  className={styles["Shopping-mobile-backdrop"]}
                  onClick={handleCloseMobileFilter}
                />
                <div className={styles["Shopping-mobile-tab"]}>
                  <div className={styles["Shopping-mobile-tab-header"]}>
                    <p>Bộ lọc tìm kiếm</p>
                    <div
                      className={styles["Shopping-mobile-tab-header-reset"]}
                      onClick={handleResetFilters}
                    >
                      <p>Bỏ lọc</p>
                    </div>
                    <button
                      className={styles["Shopping-mobile-tab-close"]}
                      onClick={handleCloseMobileFilter}
                      aria-label="Đóng bộ lọc"
                    >
                      ×
                    </button>
                  </div>

                  <div className={styles["Shopping-mobile-tab-content"]}>
                    <div className={styles["price"]}>
                      <p>
                        Khoảng giá <span>(VND)</span>
                      </p>
                      <div className={styles["input"]}>
                        <input
                          type="number"
                          placeholder="Từ ..."
                          value={minPrice}
                          onChange={(e) =>
                            handlePriceChange(e.target.value, setMinPrice)
                          }
                        />
                        <input
                          type="number"
                          placeholder="Đến ..."
                          value={maxPrice}
                          onChange={(e) =>
                            handlePriceChange(e.target.value, setMaxPrice)
                          }
                        />
                      </div>
                    </div>

                    <div className={styles["majors-section"]}>
                      <p className={styles["majors-title"]}>Chuyên ngành</p>
                      <div className={styles["majors-list"]}>
                        {majors.map((major) => (
                          <div key={major.id} className={styles["majors-item"]}>
                            <input
                              type="checkbox"
                              id={`mobile-major-${major.id}`}
                              checked={selectedMajors.some(
                                (m) => m.id === major.id
                              )}
                              onChange={() => handleMajorToggle(major)}
                              className={styles["majors-checkbox"]}
                            />
                            <label
                              htmlFor={`mobile-major-${major.id}`}
                              className={styles["majors-label"]}
                            >
                              {major.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles["Shopping-mobile-tab-footer"]}>
                    <Button
                      text="Áp dụng"
                      onClick={handleFilterApply}
                      className={styles["Button"]}
                    />
                  </div>
                </div>
              </>
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
