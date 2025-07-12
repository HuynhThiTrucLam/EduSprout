import type { Chapter as ChapterType } from "@/types/course";
import styles from "./CourseDetail.module.scss";
import { ScrollArea } from "../../ui/scroll-area";
import React from "react";
import { Separator } from "../../ui/separator";

interface ChapterProps {
  time: string;
  chapters: ChapterType[];
}

const Chapter = ({ chapters, time }: ChapterProps) => {
  return (
    <div className={styles["CourseDetail-chapter"]}>
      <div className={styles["CourseDetail-chapter-list"]}>
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id || index}
            className={styles["CourseDetail-chapter-item"]}
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.266 1.12698C10.1267 0.994892 9.942 0.921265 9.75001 0.921265C9.55802 0.921265 9.37334 0.994892 9.23401 1.12698C7.11128 3.14286 4.28413 4.24831 1.35701 4.20698C1.19754 4.20491 1.04157 4.25372 0.911731 4.34633C0.781897 4.43894 0.684963 4.57053 0.635007 4.72198C0.21298 6.00815 -0.00137527 7.35335 6.63912e-06 8.70698C6.63912e-06 14.649 4.06401 19.64 9.56301 21.055C9.68567 21.0866 9.81435 21.0866 9.93701 21.055C15.436 19.64 19.5 14.649 19.5 8.70698C19.5 7.31698 19.277 5.97698 18.865 4.72198C18.8152 4.57034 18.7184 4.43854 18.5885 4.34574C18.4587 4.25294 18.3026 4.20398 18.143 4.20598L18 4.20698C15.004 4.20698 12.283 3.03698 10.266 1.12698ZM13.36 9.14298C13.42 9.06303 13.4634 8.9719 13.4877 8.87493C13.512 8.77796 13.5166 8.67712 13.5014 8.57834C13.4861 8.47955 13.4513 8.38481 13.3989 8.29968C13.3465 8.21455 13.2776 8.14076 13.1963 8.08263C13.1149 8.02451 13.0228 7.98322 12.9253 7.96121C12.8278 7.9392 12.7269 7.9369 12.6285 7.95444C12.5301 7.97199 12.4362 8.00903 12.3523 8.06339C12.2684 8.11775 12.1962 8.18833 12.14 8.27098L8.90401 12.801L7.28001 11.177C7.13783 11.0445 6.94979 10.9724 6.75548 10.9758C6.56118 10.9792 6.3758 11.0579 6.23839 11.1954C6.10097 11.3328 6.02226 11.5182 6.01883 11.7125C6.0154 11.9068 6.08753 12.0948 6.22001 12.237L8.47001 14.487C8.547 14.5639 8.63981 14.6232 8.74199 14.6606C8.84418 14.6981 8.9533 14.7129 9.06177 14.7039C9.17024 14.695 9.27546 14.6625 9.37014 14.6088C9.46481 14.5551 9.54666 14.4815 9.61001 14.393L13.36 9.14298Z"
                fill="#2F7B74"
              />
            </svg>
            <div className={styles["CourseDetail-chapter-content"]}>
              <h3>{chapter.title}</h3>
              <p>{`Chapter ${index + 1} | ${time} minutes`}</p>
            </div>
            {index < chapters.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;
