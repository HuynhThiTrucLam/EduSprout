import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles["Introduction"]}>
      <div className={styles["Introduction-container"]}>
        <div className={styles["Introduction-left"]}>
          <h1>Lorem ipsum</h1>
        </div>
        <div className={styles["Introduction-right"]}></div>
      </div>
    </div>
  );
};

export default Introduction;
