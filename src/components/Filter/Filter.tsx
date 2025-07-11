import { useEffect, useState } from "react";
import { majors, type Major } from "../../types/major";
import { Selection } from "../Selection/Selection";
import Button from "../commons/Button";
import styles from "./Filter.module.scss";
import type { Language } from "../../types/language";
import { getLanguagesService } from "../../services/language_service";

interface FilterProps {
  selectedMajor: Major | null;
  handleSelectMajor: (option: Major) => void;
  selectedLanguage: Language | null;
  handleSelectLanguage: (option: Language) => void;
  handleFilter: () => void;
  handleResetFilters: () => void;
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
}

const Filter = ({
  selectedMajor,
  handleSelectMajor,
  selectedLanguage,
  handleSelectLanguage,
  handleFilter,
  handleResetFilters,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: FilterProps) => {
  const [majorsList, setMajorsList] = useState<Major[]>([]);
  const [languagesList, setLanguagesList] = useState<Language[]>([]);

  const getLanguages = async () => {
    const languages = await getLanguagesService();
    // console.log("languages: ", languages);
    setLanguagesList(languages);
  };

  useEffect(() => {
    setMajorsList(majors);
    getLanguages();
  }, []);

  return (
    <div className={styles["Filter"]}>
      <div className={styles["Filter-header"]}>
        <p className={styles["Filter-header-title"]}>Filter</p>
        <div
          className={styles["Filter-header-reset"]}
          onClick={handleResetFilters}
        >
          <p>Reset Filters</p>
        </div>
      </div>
      <div className={styles["Filter-price"]}>
        <div className={styles["Filter-price-min"]}>
          <p>
            {" "}
            Min Price <span>($)</span>
          </p>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice ?? ""}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div className={styles["Filter-price-max"]}>
          <p>
            {" "}
            Max Price <span>($)</span>
          </p>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice ?? ""}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>
      <Selection
        title="Subject Area"
        options={majorsList}
        selectedOption={selectedMajor}
        handleSelect={(option) => handleSelectMajor(option as Major)}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id.toString()}
      />
      <Selection
        title="Language"
        options={languagesList}
        selectedOption={selectedLanguage}
        handleSelect={(option) => handleSelectLanguage(option as Language)}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id}
      />

      <Button
        text="Filter Now"
        onClick={handleFilter}
        className={styles["Filter-button"]}
      />
    </div>
  );
};

export default Filter;
