import styles from "./NoData.module.scss";

interface NoDataProps {
  text: string;
}

const NoData = ({ text }: NoDataProps) => {
  return (
    <div className={styles["NoData"]}>
      <p>{text}</p>
    </div>
  );
};

export default NoData;
