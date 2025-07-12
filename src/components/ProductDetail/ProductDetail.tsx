import { useEffect, useState } from "react";
import {
  getBookByIdService,
  getCourseByIdService,
  getDocumentByIdService,
} from "../../services/product_service";
import BackPage from "../BackPage/BackPage";
import styles from "./ProductDetail.module.scss";
import CourseDetail from "./CourseDetail/CourseDetail";
import SimilarProduct from "../SimilarProduct/SimilarProduct";

interface ProductdetailProps {
  typeofProduct: string;
  productId: string;
}

const Productdetail = ({ typeofProduct, productId }: ProductdetailProps) => {
  const [product, setProduct] = useState<any>();

  const handleGetProductDetail = async (
    typeofProduct: string,
    productId: string
  ) => {
    if (typeofProduct.toLowerCase() === "courses") {
      const product = await getCourseByIdService(productId);
      setProduct(product);
    } else if (typeofProduct.toLowerCase() === "books") {
      const product = await getBookByIdService(productId);
      setProduct(product);
    } else if (typeofProduct.toLowerCase() === "documents") {
      const product = await getDocumentByIdService(productId);
      setProduct(product);
    }
  };

  useEffect(() => {
    handleGetProductDetail(typeofProduct, productId);
  }, [typeofProduct, productId]);

  return (
    <div className={styles["ProductDetail"]}>
      <div className={styles["ProductDetail-container"]}>
        <div className={styles["ProductDetail-content"]}>
          <div className={styles["ProductDetail-content-container"]}>
            <BackPage
              onClick={() => {}}
              text="Back to home"
              className={styles["ProductDetail-back"]}
            />
            <div className={styles["ProductDetail-content"]}>
              {typeofProduct.toLowerCase() === "courses" && product && (
                <CourseDetail product={product} />
              )}
              {typeofProduct.toLowerCase() === "books" && (
                <div>Book content here</div>
              )}
              {typeofProduct.toLowerCase() === "documents" && (
                <div>Document content here</div>
              )}
            </div>
            <div className={styles["ProductDetail-similar"]}>
              <SimilarProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
