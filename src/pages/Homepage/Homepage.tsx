import Introduction from "./Introduction/Introduction";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles["Homepage"]}>
      <div className={styles["Homepage-container"]}>
        <Introduction />
      </div>
    </div>
  );
};

export default Homepage;
