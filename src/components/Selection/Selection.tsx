import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import styles from "./Selection.module.scss";

interface SelectionProps<T> {
  title: string;
  options: T[];
  selectedOption: T | null;
  handleSelect: (option: T) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
}

function Selection<T>({
  title,
  options,
  selectedOption,
  handleSelect,
  getOptionLabel,
  getOptionValue,
}: SelectionProps<T>) {
  return (
    <div className={styles.Selection}>
      <label className={styles.Selection__label}>{title}</label>
      <Select
        onValueChange={(value) => {
          const option = options.find(
            (opt) => String(getOptionValue(opt)) === String(value)
          );
          if (option) handleSelect(option);
        }}
        value={
          selectedOption ? String(getOptionValue(selectedOption)) : undefined
        }
      >
        <SelectTrigger className={`${styles.Selection__button} w-full`}>
          <SelectValue
            placeholder={
              selectedOption
                ? getOptionLabel(selectedOption)
                : "Select an option"
            }
          />
        </SelectTrigger>
        <SelectContent className={styles.Selection__content}>
          {options.map((option) => (
            <SelectItem
              key={getOptionValue(option)}
              value={String(getOptionValue(option))}
              className={styles.Selection__item}
            >
              {getOptionLabel(option)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Selection;
