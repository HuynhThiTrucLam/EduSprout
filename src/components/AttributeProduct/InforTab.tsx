import Tick from "../../assets/Icons/Tick";
import type { Language } from "../../types/language";
import Rating from "../Rating/Rating";
import styles from "./AttributeTab.module.scss";

interface InforTabProps {
  rating: number;
  updatedAt: string;
  language: Language[];
  values: string[];
  skills: string[];
}

const InforTab = ({
  rating,
  updatedAt,
  language,
  values,
  skills,
}: InforTabProps) => {
  return (
    <div className={styles["AttributeTab-infor"]}>
      <div className={styles["AttributeTab-infor-container"]}>
        <div className={styles["AttributeTab-value"]}>
          <p>What you'll learn</p>
          <div className={styles["AttributeTab-value-item"]}>
            {values && values.length > 0
              ? values.map((value) => (
                  <div
                    key={value}
                    className={styles["AttributeTab-value-text"]}
                  >
                    <Tick className={styles["AttributeTab-value-tick"]} />
                    <p>{value}</p>
                  </div>
                ))
              : "Không có thông tin"}
          </div>
        </div>
        <div className={styles["AttributeTab-skill"]}>
          <p>Kỹ năng</p>
          <div className={styles["AttributeTab-skill-item"]}>
            {skills && skills.length > 0
              ? skills.map((skill) => (
                  <div
                    key={skill}
                    className={styles["AttributeTab-skill-text"]}
                  >
                    <p>{skill}</p>
                  </div>
                ))
              : "Không có thông tin"}
          </div>
        </div>
        <div className={styles["AttributeTab-another"]}>
          <p>Thông tin khác</p>
          <div className={styles["AttributeTab-another-container"]}>
            <div className={styles["AttributeTab-another-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span>Đánh giá khóa học</span>
              <Rating rating={rating} size="small" />
            </div>
            <div className={styles["AttributeTab-another-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
              <span>Ngôn ngữ hỗ trợ</span>
              <p>
                {language && language.length > 0
                  ? language.map((lang) => lang.title).join(", ")
                  : "Không có thông tin"}
              </p>
            </div>

            <div className={styles["AttributeTab-another-item"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Cập nhật lần cuối</span>
              <p>{updatedAt || "Không có thông tin"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforTab;
