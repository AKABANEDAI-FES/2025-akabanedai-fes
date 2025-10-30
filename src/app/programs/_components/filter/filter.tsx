"use client";

import Star from "@/assets/star.svg";
import { Heading } from "@/components/ui/heading";
import styles from "./filter.module.css";

type FilterProps<T extends string | number> = {
  options: readonly T[];
  selected: readonly T[];
  title: string;
  onSelect: (option: T) => void;
};

export const Filter = <T extends string | number>({
  options,
  title,
  selected,
  onSelect,
}: FilterProps<T>) => {
  return (
    <div className={styles.filterContainer}>
      <Heading as="h3" className={styles.filterTitle}>
        <Star className={styles.blackStarIcon} />
        {title}
      </Heading>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            type="button"
            className={
              selected.includes(option) ? styles.selectedOption : styles.option
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
