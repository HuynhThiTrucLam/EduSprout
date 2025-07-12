import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import styles from "./AttributeTab.module.scss";

const AttributeTab = () => {
  return (
    <Tabs defaultValue="information" className={styles["AttributeTab"]}>
      <TabsList className={styles["AttributeTab-tabslist"]}>
        <TabsTrigger
          value="information"
          className={styles["AttributeTab-tabtrigger"]}
        >
          Thông tin
        </TabsTrigger>
        <TabsTrigger
          value="content"
          className={styles["AttributeTab-tabtrigger"]}
        >
          Nội dung
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className={styles["AttributeTab-tabtrigger"]}
        >
          Đánh giá
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="information"
        className={styles["AttributeTab-tabcontent"]}
      >
        Make changes to your account here.
      </TabsContent>
      <TabsContent
        value="content"
        className={styles["AttributeTab-tabcontent"]}
      >
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default AttributeTab;
