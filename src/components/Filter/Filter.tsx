import { useEffect, useState } from "react";
// import { getLanguagesService } from "../../services/language_service";
// import type { Language } from "../../types/language";
import { majors, type Major } from "../../types/major";
// import { Selection } from "../Selection/Selection";
import Button from "../commons/Button";
import styles from "./Filter.module.scss";

interface FilterProps {
  selectedMajors: Major[];
  handleMajorToggle: (major: Major) => void;
  // selectedLanguage: Language | null;
  // handleSelectLanguage: (option: Language) => void;
  handleFilter: () => void;
  handleResetFilters: () => void;
  minPrice: string;
  maxPrice: string;
  setMinPrice: (price: string) => void;
  setMaxPrice: (price: string) => void;
}

const Filter = ({
  selectedMajors,
  handleMajorToggle,
  // selectedLanguage,
  // handleSelectLanguage,
  handleFilter,
  handleResetFilters,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: FilterProps) => {
  const [majorsList, setMajorsList] = useState<Major[]>([]);

  useEffect(() => {
    setMajorsList(majors);
  }, []);

  return (
    <div className={styles["Filter"]}>
      <div className={styles["Filter-header"]}>
        <p className={styles["Filter-header-title"]}>Bộ lọc tìm kiếm</p>
        <div
          className={styles["Filter-header-reset"]}
          onClick={handleResetFilters}
        >
          <p>Bỏ lọc</p>
        </div>
      </div>
      <div className={styles["Filter-price"]}>
        <p>
          Khoảng giá <span>(VND)</span>
        </p>
        <div className={styles["Filter-input"]}>
          <input
            type="number"
            placeholder="Từ ..."
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Đến ..."
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className={styles["Filter-majors"]}>
        <p className={styles["Filter-majors-title"]}>Chuyên ngành</p>
        <div className={styles["Filter-majors-list"]}>
          {majorsList.map((major) => (
            <div key={major.id} className={styles["Filter-majors-item"]}>
              <input
                type="checkbox"
                id={`major-${major.id}`}
                checked={selectedMajors.some((m) => m.id === major.id)}
                onChange={() => handleMajorToggle(major)}
                className={styles["Filter-majors-checkbox"]}
              />
              <label
                htmlFor={`major-${major.id}`}
                className={styles["Filter-majors-label"]}
              >
                {major.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* <Selection
        title="Ngôn ngữ"
        options={languagesList}
        selectedOption={selectedLanguage}
        handleSelect={(option) => handleSelectLanguage(option as Language)}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id}
      /> */}

      <Button
        text="Áp dụng"
        onClick={handleFilter}
        className={styles["Filter-button"]}
      />
    </div>
  );
};

export default Filter;
