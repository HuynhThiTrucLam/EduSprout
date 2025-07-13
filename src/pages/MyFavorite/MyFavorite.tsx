import BackPage from "../../components/BackPage/BackPage";
import styles from "./MyFavorite.module.scss";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useEffect, useState } from "react";
import type { Book } from "../../types/book";
import ProductItem from "../../components/Product/ProductItem";
import NoData from "../../components/NoData/NoData";
import type { Course } from "../../types/course";
import {
  getAllFavoriteBooksService,
  getAllFavoriteCoursesService,
} from "../../services/product_service";

const MyFavorite = () => {
  const [favoriteBookList, setFavoriteBookList] = useState<Book[]>([]);
  const [favoriteCourseList, setFavoriteCourseList] = useState<Course[]>([]);
  const getFavoriteBookList = async () => {
    const response = await getAllFavoriteBooksService();
    setFavoriteBookList(response);
  };

  const getFavoriteCourseList = async () => {
    const response = await getAllFavoriteCoursesService();
    setFavoriteCourseList(response);
  };

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    getFavoriteCourseList();
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
                  onClick={() => getFavoriteBookList()}
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
                {favoriteCourseList.length > 0 ? (
                  <div className={styles["MyFavorite-list"]}>
                    {favoriteCourseList.map((course) => (
                      <ProductItem key={course.id} productInfor={course} />
                    ))}
                  </div>
                ) : (
                  <NoData text="Danh sách yêu thích của bạn đang trống" />
                )}
              </TabsContent>
              <TabsContent
                value="books"
                className={styles["MyFavorite-content-tabcontent"]}
              >
                {favoriteBookList.length > 0 ? (
                  <div className={styles["MyFavorite-list"]}>
                    {favoriteBookList.map((book) => (
                      <ProductItem key={book.id} productInfor={book} />
                    ))}
                  </div>
                ) : (
                  <NoData text="Danh sách yêu thích của bạn đang trống" />
                )}
              </TabsContent>
              <TabsContent
                value="documents"
                className={styles["MyFavorite-content-tabcontent"]}
              >
                <NoData text="Danh sách yêu thích của bạn đang trống" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
