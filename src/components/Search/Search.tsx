import SearchIcon from "../../assets/Icons/SearchIcon";
import Button from "../commons/Button";
import { Input } from "../ui/input";
import styles from "./Search.module.scss";

interface SearchProps {
  placeholder: string;
  className?: string;
}

const Search = ({ placeholder, className }: SearchProps) => {
  return (
    <div className={`${styles["Search"]} ${className}`}>
      <div className={styles["Search-container"]}>
        <div className={styles["Search-input"]}>
          <SearchIcon />
          <Input type="email" placeholder={placeholder} />
        </div>
        <Button text="Tìm ngay" className={styles["Search-button"]} />
      </div>
    </div>
  );
};

export default Search;
