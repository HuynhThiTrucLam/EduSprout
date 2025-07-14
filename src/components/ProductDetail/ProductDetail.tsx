import { useEffect, useState } from "react";
import {
  getBookByIdService,
  getCourseByIdService,
  getDocumentByIdService,
} from "../../services/product_service";
import BackPage from "../BackPage/BackPage";
import styles from "./ProductDetail.module.scss";
import Detail from "./Detail/Detail";
import type { Course } from "../../types/course";
import type { Book } from "../../types/book";
import type { Document } from "../../types/documents";
import {
  trackProductView,
  trackTimeSpent,
} from "../../lib/recommendationUtils";

interface ProductdetailProps {
  typeofProduct: string;
  productId: string;
}

const Productdetail = ({ typeofProduct, productId }: ProductdetailProps) => {
  const [product, setProduct] = useState<Course | Book | Document | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());

  const handleBack = () => {
    window.history.back();
  };

  const handleGetProductDetail = async (
    typeofProduct: string,
    productId: string
  ) => {
    if (typeofProduct.toLowerCase() === "courses") {
      const product = await getCourseByIdService(productId);
      // console.log("Course product:", product);
      setProduct(product || null);
    } else if (typeofProduct.toLowerCase() === "books") {
      const product = await getBookByIdService(productId);
      // console.log("Book product:", product);
      setProduct(product || null);
    } else if (typeofProduct.toLowerCase() === "documents") {
      const product = await getDocumentByIdService(productId);
      // console.log("Document product:", product);
      setProduct(product || null);
    }
  };

  useEffect(() => {
    handleGetProductDetail(typeofProduct, productId);
  }, [typeofProduct, productId]);

  // Track when user views a product
  useEffect(() => {
    if (product) {
      trackProductView(
        product.id,
        product.infor.category.title.toLowerCase(),
        product.infor.price
      );
      setStartTime(Date.now());
    }
  }, [product]);

  // Track time spent when component unmounts
  useEffect(() => {
    return () => {
      if (product) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        trackTimeSpent(product.id, timeSpent);
      }
    };
  }, [product, startTime]);

  return (
    <div className={styles["ProductDetail"]}>
      <div className={styles["ProductDetail-container"]}>
        <div className={styles["ProductDetail-content"]}>
          <div className={styles["ProductDetail-content-container"]}>
            <BackPage
              onClick={handleBack}
              text="Quay lại trang trước"
              className={styles["ProductDetail-back"]}
            />
            <div className={styles["ProductDetail-content"]}>
              {product && (
                <Detail product={product} typeOfProduct={typeofProduct} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
