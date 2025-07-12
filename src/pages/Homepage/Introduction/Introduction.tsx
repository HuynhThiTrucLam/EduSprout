import { useEffect, useRef, useState } from "react";
import Deacorate1 from "../../../assets/Icons/Deacorate1";
import Decorate2 from "../../../assets/Icons/Decorate2";
import Decorate3 from "../../../assets/Icons/Decorate3";
import Button from "../../../components/commons/Button";
import styles from "./Introduction.module.scss";
import learn from "../../../assets/images/learn.jpeg";
import Decorate4 from "../../../assets/Icons/Decorate4";
import Arrow from "../../../assets/Icons/Arrow";
import IntroDecorate from "../../../assets/Icons/IntroDecorate";
import boy from "../../../assets/images/boy.png";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const handleGetStartedClick = () => {
    const shoppingSection = document.getElementById("shopping-section");
    if (shoppingSection) {
      const header = document.querySelector(".Header");
      const headerHeight = header ? header.getBoundingClientRect().height : 80;

      const elementPosition = shoppingSection.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles["Introduction"]}>
      <div className={styles["Introduction-container"]}>
        <div className={styles["Introduction-left"]}>
          <div className={styles["Introduction-left-top"]}>
            <h1>
              Keep Learning on Track
              <span>
                <Deacorate1 />
              </span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <Button
              text="Get Started"
              className={styles["Introduction-left-top-button"]}
              onClick={handleGetStartedClick}
            />
            <div className={styles["Introduction-decorate2"]}>
              <Decorate2 />
            </div>
          </div>
          <div
            ref={contentRef}
            className={`${styles["Introduction-left-bottom"]} ${
              isVisible ? styles["Introduction-left-bottom--visible"] : ""
            }`}
          >
            <div className={styles["Introduction-left-bottom-decorate"]}>
              <Decorate3 />
            </div>
            <div className={styles["Introduction-left-bottom-content"]}>
              <h2>
                Best <span>Certified</span> Teacher
                <p>Worldwide</p>
              </h2>
              <div className={styles["Introduction-number"]}>
                <p>210+</p>
                <span>Expert already join us</span>
              </div>
            </div>
            <div className={styles["Introduction-left-bottom-content2"]}>
              <div
                className={styles["Introduction-left-bottom-content2-image"]}
              >
                <img src={learn} alt="EduSprout-Learn" />
                <p>Lorem Ipsum is simply dummytextofas dummy </p>
                <div
                  className={
                    styles["Introduction-left-bottom-content2-image-decorate"]
                  }
                >
                  <Decorate4 />
                </div>
              </div>
              <div className={styles["Introduction-image-decorate2"]}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["Introduction-right"]}>
          <IntroDecorate className={styles["Introduction-right-decorate"]} />
          <img
            src={boy}
            alt="EduSprout-Boy"
            className={styles["Introduction-right-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
