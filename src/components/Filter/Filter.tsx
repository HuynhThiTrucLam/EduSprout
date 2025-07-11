import { useEffect, useState } from "react";
import { majors, type Major } from "../../types/major";
import Selection from "../Selection/Selection";
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
}

const Filter = ({
  selectedMajor,
  handleSelectMajor,
  selectedLanguage,
  handleSelectLanguage,
  handleFilter,
  handleResetFilters,
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
        <p>Filter</p>
        <div
          className={styles["Filter-header-reset"]}
          onClick={handleResetFilters}
        >
          <p>Reset Filters</p>
        </div>
      </div>
      <Selection
        title="Subject Area"
        options={majorsList}
        selectedOption={selectedMajor}
        handleSelect={handleSelectMajor}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id}
      />
      <Selection
        title="Language"
        options={languagesList}
        selectedOption={selectedLanguage}
        handleSelect={handleSelectLanguage}
        getOptionLabel={(option) => option.title}
        getOptionValue={(option) => option.id}
      />
      <Button text="Filter Now" onClick={handleFilter} />
    </div>
  );
};

export default Filter;
