import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import styles from "./Selection.module.scss";
import SearchIcon from "../../assets/Icons/SearchIcon";

interface SelectionProps<T> {
  title?: string;
  options: T[];
  selectedOption: T | null;
  handleSelect: (option: T | null) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
  placeholder?: string;
  searchPlaceholder?: string;
  widthClass?: string; // e.g. "w-[200px]" or "w-full"
}

export function Selection<T>({
  title,
  options,
  selectedOption,
  handleSelect,
  getOptionLabel,
  getOptionValue,
  placeholder = "Select...",
  searchPlaceholder = "Type to search...",
}: SelectionProps<T>) {
  const [open, setOpen] = useState(false);
  const selectedValue = selectedOption ? getOptionValue(selectedOption) : "";

  // Find the label for the currently selected value
  const selectedLabel =
    selectedValue && options.length > 0
      ? getOptionLabel(
          options.find((opt) => getOptionValue(opt) === selectedValue) as T
        )
      : placeholder;

  return (
    <div className={styles[`Selection`]}>
      {title && <label className={styles[`Selection-label`]}>{title}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={styles[`Selection-button`]}
          >
            {selectedLabel}
            <ChevronsUpDown className={styles[`Selection-icon`]} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={styles[`Selection-content`]}>
          <Command>
            <div className={styles[`Selection-searchWrapper`]}>
              <SearchIcon className={styles[`Selection-searchIcon`]} />
              <CommandInput
                placeholder={searchPlaceholder}
                className={styles[`Selection-input`]}
              />
            </div>
            <CommandList>
              <CommandEmpty className={styles[`Selection-empty`]}>
                No results found.
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const optionValue = getOptionValue(option);
                  return (
                    <CommandItem
                      key={optionValue}
                      value={optionValue}
                      onSelect={(currentValue) => {
                        const selected = options.find(
                          (opt) => getOptionValue(opt) === currentValue
                        );
                        handleSelect(selected ?? null);
                        setOpen(false);
                      }}
                      className={cn(
                        styles[`Selection-item`],
                        selectedValue === optionValue && "selected"
                      )}
                    >
                      {getOptionLabel(option)}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
