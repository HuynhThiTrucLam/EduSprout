import { useEffect, useState } from "react";
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

interface RecommendedProductsProps {
  currentProductId?: string;
}

const RecommendedProducts = ({
  currentProductId,
}: RecommendedProductsProps) => {
  const [allProducts, setAllProducts] = useState<(Course | Book | Document)[]>(
    []
  );
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Load all products
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoadingProducts(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const allCourses = await getAllCoursesService();
        const allBooks = await getAllBooksService();
        const allDocuments = await getAllDocumentsService();

        const products = [...allCourses, ...allBooks, ...allDocuments];

        // Filter out current product if viewing a specific product
        const filteredProducts = currentProductId
          ? products.filter((p) => p.id !== currentProductId)
          : products;

        setAllProducts(filteredProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    loadProducts();
  }, [currentProductId]);

  // Use the recommendations hook
  const {
    recommendations,
    userStats,
    isLoading: isLoadingRecommendations,
  } = useRecommendations(allProducts, 6);
  const isLoading = isLoadingProducts || isLoadingRecommendations;

  // Don't render anything if no recommendations and not loading
  if (recommendations.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className={styles["RecommendedProducts"]}>
      <div className={styles["RecommendedProducts-container"]}>
        <div className={styles["RecommendedProducts-header"]}>
          <div className={styles["RecommendedProducts-header-flex"]}>
            <h3>Recommended for You</h3>
            <p>{recommendations.length} products</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
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
      </div>
    </div>
  );
};

export default RecommendedProducts;
