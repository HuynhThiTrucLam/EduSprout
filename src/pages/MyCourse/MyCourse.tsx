import { useEffect, useState } from "react";
import BackPage from "../../components/BackPage/BackPage";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import styles from "./MyCourse.module.scss";
import type { Course } from "../../types/course";
import {
  getAllFinishedCoursesService,
  getAllInProgressCoursesService,
} from "../../services/product_service";
import NoData from "../../components/NoData/NoData";
import ProductItem from "../../components/Product/ProductItem";

const MyCourse = () => {
  const handleBack = () => {
    window.history.back();
  };
  const [finishedList, setFinishedList] = useState<Course[]>([]);
  const [inProgressList, setInProgressList] = useState<Course[]>([]);

  const getFinishedList = async () => {
    const response = await getAllFinishedCoursesService();
    setFinishedList(response);
  };

  const getInProgressList = async () => {
    const response = await getAllInProgressCoursesService();
    setInProgressList(response);
  };

  useEffect(() => {
    getFinishedList();
    getInProgressList();
  }, []);
  return (
    <div className={styles["MyCourse"]}>
      <div className={styles["MyCourse-container"]}>
        <div className={styles["MyCourse-content"]}>
          <BackPage
            onClick={handleBack}
            text="Quay lại trang trước"
            className={styles["MyCourse-content-back"]}
          />
          <div className={styles["MyCourse-content-body"]}>
            <h1>Khoá học của tôi</h1>
            <Tabs
              defaultValue="finished"
              className={styles["MyCourse-content-tabs"]}
            >
              <TabsList className={styles["MyCourse-content-list"]}>
                <TabsTrigger
                  value="finished"
                  className={styles["MyCourse-content-trigger"]}
                >
                  Finished
                </TabsTrigger>
                <TabsTrigger
                  value="inprogress"
                  className={styles["MyCourse-content-trigger"]}
                >
                  In Progress
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="finished"
                className={styles["MyCourse-content-tabcontent"]}
              >
                {finishedList.length > 0 ? (
                  <div className={styles["MyCourse-list"]}>
                    {finishedList.map((course) => (
                      <ProductItem key={course.id} productInfor={course} />
                    ))}
                  </div>
                ) : (
                  <NoData text="Hiện tại bạn chưa có khoá học nào" />
                )}
              </TabsContent>
              <TabsContent
                value="inprogress"
                className={styles["MyCourse-content-tabcontent"]}
              >
                {inProgressList.length > 0 ? (
                  <div className={styles["MyCourse-list"]}>
                    {inProgressList.map((course) => (
                      <ProductItem key={course.id} productInfor={course} />
                    ))}
                  </div>
                ) : (
                  <NoData text="Hiện tại bạn chưa có khoá học nào" />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
