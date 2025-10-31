"use client";

import { Accordion } from "@ark-ui/react";
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
  isInitOpen = false,
}: FilterProps<T>) => {
  return (
    <Accordion.Root
      defaultValue={isInitOpen ? [title] : []}
      collapsible
      className={styles.filterRoot}
    >
      <Accordion.Item value={title} className={styles.filterItem}>
        <Accordion.ItemTrigger className={styles.filterTrigger}>
          <Heading as="h3" className={styles.filterTitle}>
            <Accordion.ItemIndicator className={styles.indicatorWrapper}>
              <Star className={styles.blackStarIcon} />
            </Accordion.ItemIndicator>
            {title}
          </Heading>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent className={styles.filterContent}>
          <div className={styles.options}>
            {options.map((option) => (
              <button
                key={option}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelect(option);
                }}
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
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};
