import styles from "./NoData.module.scss";

interface NoDataProps {
  text: string;
  className?: string;
}

const NoData = ({ text, className }: NoDataProps) => {
  return (
    <div className={`${styles["NoData"]} ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export default NoData;
