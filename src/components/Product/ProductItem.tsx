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
    console.log("ProductItem - Navigating to:", typeofProduct, "id:", id);
    console.log("ProductItem - Full URL:", `/product/${typeofProduct}/${id}`);
    navigate(`/product/${typeofProduct}/${id}`);
  };
  return (
    <div
      className={styles["ProductItem"]}
      onClick={() =>
        handleNavigateToProductDetail(
          productInfor.infor.category.title.toLowerCase(),
          productInfor.id.toString()
        )
      }
    >
      <div className={styles["ProductItem-container"]}>
        {productInfor.infor.image ? (
          <div className={styles["ProductItem-image"]}>
            <img
              src={productInfor.infor.image}
              alt={productInfor.infor.title}
            />
            <div className={styles["ProductItem-type"]}>
              <p>{productInfor.infor.category.title}</p>
            </div>
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
            <div className={styles["ProductItem-Subtitle-book"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              {productInfor.infor.skills.slice(0, 3).map((skill) => (
                <span key={skill}>{skill},</span>
              ))}
            </div>
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
