import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
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
import {
  getBookByIdService,
  getCourseByIdService,
  getDocumentByIdService,
} from "../../../services/product_service";
import type { Book } from "../../../types/book";
import type { Course } from "../../../types/course";
import type { Document } from "../../../types/documents";
import AttributeTab from "../../AttributeProduct/AttributeTab";
import Button from "../../commons/Button";
import SimilarProduct from "../../SimilarProduct/SimilarProduct";
import ChapterComponent from "./Chapter";
import styles from "./Detail.module.scss";
import { useAuth } from "../../../services/auth_service";

type ProductType = Course | Book | Document;

interface DetailProps {
  product: ProductType;
  typeOfProduct: string;
}

const Detail = ({ product, typeOfProduct }: DetailProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const getProductSpecificInfo = async (typeOfProduct: string) => {
    switch (typeOfProduct.toLowerCase()) {
      case "courses":
        const course = await getCourseByIdService(product.id);
        // console.log("Detail - Course fetched:", course);
        return course as Course;
      case "books":
        const book = await getBookByIdService(product.id);
        // console.log("Detail - Book fetched:", book);
        return book as Book;
      case "documents":
        const document = await getDocumentByIdService(product.id);
        // console.log("Detail - Document fetched:", document);
        return document as Document;
      default:
        console.log("Detail - Unknown product type:", typeOfProduct);
        return null;
    }
  };

  const fetchProduct = async () => {
    setLoading(true);
    const fetchedProduct = await getProductSpecificInfo(typeOfProduct);
    setCurrentProduct(fetchedProduct);
    setLoading(false);
  };

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
            navigate("/favorites");
          },
        },
      });
      console.log("Đã thêm vào danh sách yêu thích");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [typeOfProduct]);

  if (loading || !currentProduct) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className={styles["Detail"]}>
      <div className={styles["Detail-header"]}>
        <div className={styles["Detail-header-left"]}>
          <div className={styles["Detail-header-left-title"]}>
            <h1>{currentProduct?.infor?.title}</h1>
            <div className={styles["Detail-header-left-share"]}>
              <div
                className={styles["share"]}
                data-tooltip={`Share this ${typeOfProduct
                  .toLowerCase()
                  .slice(0, -1)}`}
              >
                <Share />
              </div>
              <div
                className={styles["favorite"]}
                data-tooltip="Add to favorites"
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
            <p>{currentProduct?.infor?.title}</p>
          </div>
        </div>
        <div className={styles["Detail-header-right"]}>
          <div className={styles["Detail-price"]}>
            <p>Best Price:</p>
            <span>{currentProduct?.infor?.price || 0} VND</span>
            <p className={styles["ProductItem-price-discount"]}>
              {(
                (currentProduct?.infor?.price || 0) *
                (1 - (currentProduct?.infor?.discount || 0))
              ).toFixed(0)}
              VND
            </p>
          </div>
          <Button text="Buy now" className={styles["Detail-button"]} />
        </div>
      </div>

      {/* //if typeOfProduct is courses, show chapters */}
      {typeOfProduct.toLowerCase() === "courses" && (
        <div className={styles["Detail-course"]}>
          {(currentProduct as Course)?.chapters?.length > 0 && (
            <div className={styles["Detail-course-content"]}>
              <ChapterComponent
                chapters={(currentProduct as Course)?.chapters || []}
                time={(currentProduct as Course)?.time || ""}
              />
            </div>
          )}
          <img
            src={currentProduct?.infor?.image}
            alt={currentProduct?.infor?.title}
          />

          <Accordion
            type="single"
            collapsible
            className={styles["Detail-course-mobile"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Course Content</AccordionTrigger>
              <AccordionContent className={styles["Detail-course-mobile-item"]}>
                <div className={styles["Detail-course-mobile-content"]}>
                  <ChapterComponent
                    chapters={(currentProduct as Course)?.chapters || []}
                    time={(currentProduct as Course)?.time || ""}
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
                <h2>Description</h2>
                <p>
                  {currentProduct?.infor?.description ||
                    "No description available"}
                </p>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Author />
                  <strong>Authors:</strong>
                </div>
                <span>
                  {(currentProduct as Book)?.authors
                    ?.map((author) => author)
                    .join(", ") || "Unknown"}
                </span>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Publisher />
                  <strong>Publisher:</strong>
                </div>
                <span>
                  {(currentProduct as Book)?.publisher
                    ?.map((pub) => pub)
                    .join(", ") || "Unknown"}
                </span>
              </div>
              <div className={styles["Detail-book-info-item"]}>
                <div className={styles["title"]}>
                  <Time />
                  <strong>Publication Year:</strong>
                </div>
                <span>
                  {(currentProduct as Book)?.publicationYear || "Unknown"}
                </span>
              </div>
              <div className={styles["Detail-book-info-CTA"]}>
                <Button text="Add to cart" className={styles["button"]} />
              </div>
            </div>
          </div>
          <img
            src={currentProduct?.infor?.image}
            alt={currentProduct?.infor?.title}
          />
        </div>
      )}
      {/* //if typeOfProduct is documents, show document content */}
      {/* {typeOfProduct.toLowerCase() === "documents" && (
        <div className={styles["Detail-image"]}>
          <img
            src={currentProduct?.infor?.image}
            alt={currentProduct?.infor?.title}
          />
        </div>
      )} */}

      <div className={styles["Detail-description"]}>
        <AttributeTab product={currentProduct} />
      </div>

      <div className={styles["Detail-similar"]}>
        <SimilarProduct typeOfProduct={typeOfProduct} />
      </div>
    </div>
  );
};

export default Detail;
