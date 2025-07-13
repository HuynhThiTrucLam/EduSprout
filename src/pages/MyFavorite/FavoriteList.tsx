import ProductItem from "../../components/Product/ProductItem";
import styles from "./MyFavorite.module.scss";

interface FavoriteListProps {
  favoriteList: any[];
}

const FavoriteList = ({ favoriteList }: FavoriteListProps) => {
  return (
    <div className={styles["MyFavorite-list"]}>
      {favoriteList.map((item) => (
        <ProductItem key={item.id} productInfor={item.product} />
      ))}
    </div>
  );
};

export default FavoriteList;
