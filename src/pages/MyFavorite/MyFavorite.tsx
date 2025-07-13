import { useEffect, useState } from "react";
import BackPage from "../../components/BackPage/BackPage";
import NoData from "../../components/NoData/NoData";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { getAllFavoriteService } from "../../services/product_service";
import FavoriteList from "./FavoriteList";
import styles from "./MyFavorite.module.scss";

const MyFavorite = () => {
  const [favoriteList, setFavoriteList] = useState<any[]>([]);

  const getFavoriteList = async () => {
    const response = await getAllFavoriteService();
    setFavoriteList(response);
  };

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <div className={styles["MyFavorite"]}>
      <div className={styles["MyFavorite-container"]}>
        <div className={styles["MyFavorite-content"]}>
          <BackPage
            onClick={handleBack}
            text="Quay lại trang trước"
            className={styles["MyFavorite-content-back"]}
          />
          <div className={styles["MyFavorite-content-body"]}>
            <h1>Danh sách yêu thích của tôi</h1>
            <Tabs
              defaultValue="courses"
              className={styles["MyFavorite-content-tabs"]}
            >
              <TabsList className={styles["MyFavorite-content-list"]}>
                <TabsTrigger
                  value="courses"
                  className={styles["MyFavorite-content-trigger"]}
                >
                  Khoá học
                </TabsTrigger>
                <TabsTrigger
                  value="books"
                  className={styles["MyFavorite-content-trigger"]}
                >
                  Sách
                </TabsTrigger>

                <TabsTrigger
                  value="documents"
                  className={styles["MyFavorite-content-trigger"]}
                >
                  Tài liệu
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="courses"
                className={styles["MyFavorite-content-tabcontent"]}
              >
                {favoriteList.some(
                  (item) => item.product.infor.category.slug === "courses"
                ) ? (
                  <FavoriteList
                    favoriteList={favoriteList.filter(
                      (item) => item.product.infor.category.slug === "courses"
                    )}
                  />
                ) : (
                  <NoData text="Danh sách yêu thích của bạn đang trống" />
                )}
              </TabsContent>
              <TabsContent
                value="books"
                className={styles["MyFavorite-content-tabcontent"]}
              >
                {favoriteList.some(
                  (item) => item.product.infor.category.slug === "courses"
                ) ? (
                  <FavoriteList
                    favoriteList={favoriteList.filter(
                      (item) => item.product.infor.category.slug === "books"
                    )}
                  />
                ) : (
                  <NoData text="Danh sách yêu thích của bạn đang trống" />
                )}
              </TabsContent>
              <TabsContent
                value="documents"
                className={styles["MyFavorite-content-tabcontent"]}
              >
                {favoriteList.some(
                  (item) => item.product.infor.category.slug === "documents"
                ) ? (
                  <FavoriteList
                    favoriteList={favoriteList.filter(
                      (item) => item.product.infor.category.slug === "documents"
                    )}
                  />
                ) : (
                  <NoData text="Danh sách yêu thích của bạn đang trống" />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
