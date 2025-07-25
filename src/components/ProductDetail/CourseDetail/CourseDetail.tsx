import { useEffect, useState } from "react";
import Back from "../../../assets/Icons/Back";
import type { Course } from "../../../types/course";
import Button from "../../commons/Button";
import ChapterComponent from "../Detail/Chapter";
import styles from "./CourseDetail.module.scss";
import AttributeTab from "../../AttributeProduct/AttributeTab";
import { formatPrice } from "../../../lib/utils";

interface CourseDetailProps {
  product: Course;
}

const CourseDetail = ({ product }: CourseDetailProps) => {
  const [course, setCourse] = useState<Course | null>(product);

  useEffect(() => {
    setCourse(product);
    console.log("course: ", course);
  }, [product]);

  if (!course) {
    return <div>Loading course details...</div>;
  }

  return (
    <div className={styles["CourseDetail"]}>
      <div className={styles["CourseDetail-header"]}>
        <div className={styles["CourseDetail-header-left"]}>
          <h1>{course?.infor?.title}</h1>
          <div className={styles["CourseDetail-header-left-info"]}>
            <Back />
            <p>
              {course?.chapters?.length || 0} chapters | {course?.time || 0}{" "}
              hours
            </p>
          </div>
        </div>
        <div className={styles["CourseDetail-header-right"]}>
          <div className={styles["CourseDetail-price"]}>
            <p>Giá tốt nhất:</p>
            <span>
              {formatPrice(
                Math.round(
                  course?.infor?.price * (1 - (course?.infor?.discount || 0))
                )
              )}{" "}
              VND
            </span>
            <p className={styles["ProductItem-price-discount"]}>
              {formatPrice(course?.infor?.price || 0)}
              VND
            </p>
          </div>
          <Button text="Mua ngay" className={styles["CourseDetail-button"]} />
        </div>
      </div>
      <div className={styles["CourseDetail-image"]}>
        <div className={styles["CourseDetail-image-content"]}>
          <ChapterComponent
            chapters={course?.chapters || []}
            time={course?.time || ""}
          />
        </div>
        <img src={course?.infor?.image} alt={course?.infor?.title} />
      </div>
      <div className={styles["CourseDetail-description"]}>
        <AttributeTab product={course} />
      </div>
    </div>
  );
};

export default CourseDetail;
