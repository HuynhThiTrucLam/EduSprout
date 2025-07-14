import React, { useRef, useEffect, useState } from "react";
import { useRecommendations } from "../../hooks/useRecommendations";
import {
  getAllBooksService,
  getAllCoursesService,
  getAllDocumentsService,
} from "../../services/product_service";
import type { Book } from "../../types/book";
import type { Course } from "../../types/course";
import type { Document } from "../../types/documents";
import ProductItem from "../Product/ProductItem";
import styles from "./RecommendedProducts.module.scss";
import Button from "../commons/Button";

interface RecommendedProductsProps {
  currentProductId?: string;
}

const RecommendedProducts = ({
  currentProductId,
}: RecommendedProductsProps) => {
  const [allProducts, setAllProducts] = useState<(Course | Book | Document)[]>(
    []
  );
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Use the recommendations hook
  const { recommendations } = useRecommendations(allProducts, 6);
  const isLoading = isLoadingProducts || (showRecommendations && !hasFetched);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleShowRecommendations = async () => {
    setShowRecommendations(true);
    setIsLoadingProducts(true);
    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const allCourses = await getAllCoursesService();
      const allBooks = await getAllBooksService();
      const allDocuments = await getAllDocumentsService();
      let products = [...allCourses, ...allBooks, ...allDocuments];
      // Filter out current product if viewing a specific product
      if (currentProductId) {
        products = products.filter((p) => p.id !== currentProductId);
      }
      setAllProducts(products);
      setHasFetched(true);
    } catch (error) {
      // handle error
    } finally {
      setIsLoadingProducts(false);
    }
  };

  // Don't render anything if no recommendations and not loading
  if (recommendations.length === 0 && !isLoading && hasFetched) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`${styles.RecommendedProducts} ${
        visible ? styles.visible : ""
      }`}
    >
      <div className={styles["RecommendedProducts-container"]}>
        {!showRecommendations ? (
          <div className={styles["RecommendedProducts-suggest"]}>
            <div className={styles["RecommendedProducts-suggest-wrap"]}>
              <img
                src="https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className={styles["RecommendedProducts-suggest-content"]}>
                <h3>Khám phá gợi ý phù hợp dành riêng cho bạn</h3>
                <p>
                  Nhận đề xuất sản phẩm dựa theo sở thích và lịch sử truy cập
                  của bạn
                </p>
                <Button
                  text="Khám phá ngay"
                  onClick={handleShowRecommendations}
                  className={styles["RecommendedProducts-suggest-button"]}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles["RecommendedProducts-header"]}>
              <div className={styles["RecommendedProducts-header-flex"]}>
                <h3>Recommended for You</h3>
                <p>{recommendations.length} products</p>
              </div>
              <p className={styles["hide"]}>Based on your browsing history</p>
            </div>

            <div className={styles["RecommendedProducts-list"]}>
              {isLoading ? (
                <div className={styles["RecommendedProducts-list"]}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className={styles["RecommendedProducts-list-item"]}
                    >
                      <div className={styles["ProductItemSkeleton"]}>
                        <div className={styles["ProductItemSkeletonImage"]} />
                        <div className={styles["ProductItemSkeletonTitle"]} />
                        <div className={styles["ProductItemSkeletonDetails"]} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                recommendations.map((rec) => (
                  <div
                    key={rec.product.id}
                    className={styles["RecommendedProducts-item"]}
                  >
                    <ProductItem productInfor={rec.product} />
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecommendedProducts;
