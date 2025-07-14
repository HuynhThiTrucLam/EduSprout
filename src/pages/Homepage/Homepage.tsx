import Introduction from "./Introduction/Introduction";
import styles from "./Homepage.module.scss";
import Shopping from "./Shopping/Shopping";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import { useAuth } from "../../services/auth_service";

const Homepage = () => {
  const { user } = useAuth();
  return (
    <div className={styles["Homepage"]}>
      <div className={styles["Homepage-container"]}>
        <Introduction />
        {user && <RecommendedProducts />}
        <Shopping />
      </div>
    </div>
  );
};

export default Homepage;
