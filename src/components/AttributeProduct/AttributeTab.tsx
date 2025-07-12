import NoData from "../NoData/NoData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import styles from "./AttributeTab.module.scss";
import InforTab from "./InforTab";
import RatingTab from "./RatingTab";

interface AttributeTabProps {
  product: any;
}

const AttributeTab = ({ product }: AttributeTabProps) => {
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
        <InforTab
          rating={product?.infor?.rating}
          updatedAt={product?.updatedAt}
          language={product?.infor?.language}
          values={product?.infor?.values}
          skills={product?.infor?.skills}
        />
      </TabsContent>
      <TabsContent
        value="reviews"
        className={styles["AttributeTab-tabcontent"]}
      >
        {product.infor?.comments.length > 0 ? (
          <RatingTab comments={product.infor.comments} />
        ) : (
          <NoData
            className="w-full h-full min-h-[400px]"
            text="Chưa có đánh giá"
          />
        )}
      </TabsContent>
    </Tabs>
  );
};

export default AttributeTab;
