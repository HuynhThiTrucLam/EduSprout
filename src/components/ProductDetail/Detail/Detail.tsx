import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Author from "../../../assets/Icons/Author";
import Back from "../../../assets/Icons/Back";
import Publisher from "../../../assets/Icons/Publisher";
import Share from "../../../assets/Icons/Share";
import Time from "../../../assets/Icons/Time";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

import { formatPrice } from "../../../lib/utils";
import { useAuth } from "../../../services/auth_service";
import type { Book } from "../../../types/book";
import type { Course } from "../../../types/course";
import type { Document } from "../../../types/documents";
import AttributeTab from "../../AttributeProduct/AttributeTab";
import Button from "../../commons/Button";
import SimilarProduct from "../../SimilarProduct/SimilarProduct";
import ChapterComponent from "./Chapter";
import styles from "./Detail.module.scss";

type ProductType = Course | Book | Document;

interface DetailProps {
  product: ProductType;
  typeOfProduct: string;
}

const Detail = ({ product, typeOfProduct }: DetailProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAddToFavorite = () => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào danh sách yêu thích", {
        action: {
          label: "Đăng nhập",
          onClick: () => {
            navigate("/auth");
          },
        },
      });
      return;
    } else {
      toast.success("Đã thêm vào danh sách yêu thích", {
        action: {
          label: "Xem thêm",
          onClick: () => {
            navigate("/my-favorite");
          },
        },
      });
      console.log("Đã thêm vào danh sách yêu thích");
    }
  };

  const handleShare = async () => {
    try {
      const currentUrl = window.location.href;
      console.log("Sharing URL:", currentUrl);
      await navigator.clipboard.writeText(currentUrl);

      toast.success("Đã sao chép liên kết vào clipboard!", {
        action: {
          label: "Mở liên kết",
          onClick: () => {
            window.open(currentUrl, "_blank");
          },
        },
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      toast.success("Đã sao chép liên kết vào clipboard!", {
        description:
          "Bạn có thể dán liên kết bằng Ctrl+V (Windows) hoặc Cmd+V (Mac)",
      });
    }
  };

  if (!product) {
    return (
      <div className={styles["Detail-skeleton"]}>
        <div className={styles["Detail-skeleton-header"]}>
          <div className={styles["Detail-skeleton-header-left"]}>
            <div className={styles["Detail-skeleton-header-left-title"]}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["Detail"]}>
      <div className={styles["Detail-header"]}>
        <div className={styles["Detail-header-left"]}>
          <div className={styles["Detail-header-left-title"]}>
            <h1>{product?.infor?.title}</h1>
            <div className={styles["Detail-header-left-share"]}>
              <div
                className={styles["share"]}
                data-tooltip={"Chia sẻ ngay"}
                onClick={handleShare}
              >
                <Share />
              </div>
              <div
                className={styles["favorite"]}
                data-tooltip="Thêm vào yêu thích"
                onClick={handleAddToFavorite}
              >
                <StarIcon
                  style={{
                    strokeWidth: 1.5,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles["Detail-header-left-info"]}>
            <Back />
            <p>{product?.infor?.title}</p>
          </div>
        </div>
        <div className={styles["Detail-header-right"]}>
          <div className={styles["Detail-price"]}>
            <p>Giá tốt nhất:</p>
            <span>
              {formatPrice(
                Math.round(
                  product?.infor?.price * (1 - (product?.infor?.discount || 0))
                )
              )}{" "}
              VND
            </span>
            <p className={styles["ProductItem-price-discount"]}>
              {formatPrice(product?.infor?.price || 0)}
              VND
            </p>
          </div>
          <Button text="Mua ngay" className={styles["Detail-button"]} />
        </div>
      </div>

      {/* //if typeOfProduct is courses, show chapters */}
      {typeOfProduct.toLowerCase() === "courses" && (
        <div className={styles["Detail-course"]}>
          {(product as Course)?.chapters?.length > 0 && (
            <div className={styles["Detail-course-content"]}>
              <ChapterComponent
                chapters={(product as Course)?.chapters || []}
                time={(product as Course)?.time || ""}
              />
            </div>
          )}
          <img src={product?.infor?.image} alt={product?.infor?.title} />

          <Accordion
            type="single"
            collapsible
            className={styles["Detail-course-mobile"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Nội dung khóa học</AccordionTrigger>
              <AccordionContent className={styles["Detail-course-mobile-item"]}>
                <div className={styles["Detail-course-mobile-content"]}>
                  <ChapterComponent
                    chapters={(product as Course)?.chapters || []}
                    time={(product as Course)?.time || ""}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}

      {/* //if typeOfProduct is books, show book content */}
      {typeOfProduct.toLowerCase() === "books" && (
        <div className={styles["Detail-book"]}>
          <div className={styles["Detail-book-content"]}>
            <div className={styles["Detail-book-info"]}>
              <div className={styles["Detail-book-info-description"]}>
                <h2>Mô tả sách</h2>
                <p>
                  {product?.infor?.description || "No description available"}
                </p>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Author />
                  <strong>Tác giả:</strong>
                </div>
                <span>
                  {(product as Book)?.authors
                    ?.map((author) => author)
                    .join(", ") || "Unknown"}
                </span>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Publisher />
                  <strong>Nhà xuất bản:</strong>
                </div>
                <span>
                  {(product as Book)?.publisher?.map((pub) => pub).join(", ") ||
                    "Unknown"}
                </span>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Time />
                  <strong>Năm xuất bản:</strong>
                </div>
                <span>{(product as Book)?.publicationYear || "Unknown"}</span>
              </div>
              <div className={styles["Detail-book-info-CTA"]}>
                <Button text="Add to cart" className={styles["button"]} />
              </div>
            </div>
          </div>
          <img src={product?.infor?.image} alt={product?.infor?.title} />
        </div>
      )}
      {/* //if typeOfProduct is documents, show document content */}
      {/* {typeOfProduct.toLowerCase() === "documents" && (
        <div className={styles["Detail-image"]}>
          <img
            src={product?.infor?.image}
            alt={product?.infor?.title}
          />
        </div>
      )} */}

      <div className={styles["Detail-description"]}>
        <AttributeTab product={product} />
      </div>

      <div className={styles["Detail-similar"]}>
        <SimilarProduct typeOfProduct={typeOfProduct} />
      </div>
    </div>
  );
};

export default Detail;
