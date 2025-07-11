import Introduction from "./Introduction/Introduction";
import styles from "./Homepage.module.scss";
import Shopping from "./Shopping/Shopping";

const Homepage = () => {
  return (
    <div className={styles["Homepage"]}>
      <div className={styles["Homepage-container"]}>
        <Introduction />
        <Shopping />
      </div>
    </div>
  );
};

export default Homepage;
