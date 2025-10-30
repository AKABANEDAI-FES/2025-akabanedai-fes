"use client";

import { useState } from "react";
import Star from "@/assets/star.svg";
import { Heading } from "@/components/ui/heading";
import styles from "./filter.module.css";

type FilterProps<T extends string | number> = {
  options: readonly T[];
  selected: readonly T[];
  title: string;
  onSelect: (option: T) => void;
  isInitOpen?: boolean;
};

export const Filter = <T extends string | number>({
  options,
  title,
  selected,
  onSelect,
  isInitOpen = true,
}: FilterProps<T>) => {
  const [isOpen, setIsOpen] = useState(isInitOpen);
  return (
    <button
      className={styles.filterContainer}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
      type="button"
      tabIndex={0}
    >
      <Heading as="h3" className={styles.filterTitle}>
        <Star className={styles.blackStarIcon} />
        {title}
      </Heading>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              type="button"
              className={
                selected.includes(option)
                  ? styles.selectedOption
                  : styles.option
              }
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </button>
  );
};
