import styles from "./ProductItem.module.scss";
import type { Book } from "../../types/book";
import type { Course } from "../../types/course";
import type { Document } from "../../types/documents";
import Button from "../commons/Button";
import Rating from "../Rating/Rating";
import GridIcon from "../../assets/Icons/GridIcon";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  productInfor: Course | Book | Document;
}

const ProductItem = ({ productInfor }: ProductItemProps) => {
  const navigate = useNavigate();

  const handleNavigateToProductDetail = (typeofProduct: string, id: string) => {
    navigate(`/product/${typeofProduct}/${id}`);
  };
  return (
    <div className={styles["ProductItem"]}>
      <div className={styles["ProductItem-container"]}>
        {productInfor.infor.image ? (
          <div className={styles["ProductItem-image"]}>
            <img
              src={productInfor.infor.image}
              alt={productInfor.infor.title}
            />
          </div>
        ) : (
          <div className={styles["ProductItem-image"]}></div>
        )}
        <div className={styles["ProductItem-info"]}>
          <div className={styles["ProductItem-CTA"]}>
            <div className={styles["ProductItem-organization"]}>
              <img
                src={productInfor.infor.user.image}
                alt={productInfor.infor.user.name}
              />
              <p>{productInfor.infor.user.name}</p>
            </div>
            <Button
              text="Xem ngay"
              className={styles["ProductItem-CTA-button"]}
              onClick={() =>
                handleNavigateToProductDetail(
                  productInfor.infor.category.title.toLowerCase(),
                  productInfor.id.toString()
                )
              }
            />
          </div>
          <h3 className={styles["ProductItem-Title"]}>
            {productInfor.infor.title}
          </h3>
          {productInfor.infor.category.title.toLowerCase() === "courses" ? (
            <div className={styles["ProductItem-Subtitle"]}>
              <div className={styles["ProductItem-Subtitle-item"]}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.82227 3.33333V8H11.3223M14.8223 8C14.8223 8.91925 14.6412 9.82951 14.2894 10.6788C13.9376 11.5281 13.422 12.2997 12.772 12.9497C12.122 13.5998 11.3503 14.1154 10.501 14.4672C9.65177 14.8189 8.74152 15 7.82227 15C6.90301 15 5.99276 14.8189 5.14348 14.4672C4.2942 14.1154 3.52253 13.5998 2.87252 12.9497C2.22251 12.2997 1.70689 11.5281 1.35511 10.6788C1.00333 9.82951 0.822266 8.91925 0.822266 8C0.822266 6.14348 1.55976 4.36301 2.87252 3.05025C4.18527 1.7375 5.96575 1 7.82227 1C9.67878 1 11.4593 1.7375 12.772 3.05025C14.0848 4.36301 14.8223 6.14348 14.8223 8Z"
                    stroke="#828282"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Time: </p>
                <p>
                  {"time" in productInfor
                    ? productInfor.time.toString()
                    : "Không xác định"}{" "}
                  months
                </p>
              </div>
              <div className={styles["ProductItem-Subtitle-item"]}>
                <GridIcon />
                <p>Chapters: </p>
                <p>
                  {"chapters" in productInfor
                    ? `${productInfor.chapters.length.toString()} chapters`
                    : ""}
                </p>
              </div>
            </div>
          ) : productInfor.infor.category.title.toLowerCase() ===
            "documents" ? (
            <div className={styles["ProductItem-Subtitle-document"]}>
              <p>{productInfor.infor.description}</p>
            </div>
          ) : (
            <p>{productInfor.infor.category.title.toLowerCase()}</p>
          )}
          <div className={styles["ProductItem-Price"]}>
            <div className={styles["ProductItem-Price-container"]}>
              <p className={styles["ProductItem-Price-container-end"]}>
                {productInfor.infor.price} VND
              </p>
              <p className={styles["ProductItem-Price-container-discount"]}>
                {(
                  productInfor.infor.price *
                  (1 - (productInfor.infor.discount || 0))
                ).toFixed(0)}
                VND
              </p>
            </div>
            <Rating rating={productInfor.infor.rating} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
