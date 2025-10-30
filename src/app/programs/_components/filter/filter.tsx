"use client";

import { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const optionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setLoading(false);
  }, []);
  const changeOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className={isOpen ? styles.filterContainer : styles.filterContainerClosed}
      onClick={changeOpen}
      type="button"
    >
      <Heading as="h3" className={styles.filterTitle}>
        <Star
          className={isOpen ? styles.blackStarIconOpen : styles.blackStarIcon}
          key={+isOpen}
        />
        {title}
      </Heading>
      {!loading && (
        <div
          className={styles.options}
          ref={optionsRef}
          style={{
            maxHeight: isOpen
              ? (optionsRef.current?.scrollHeight ?? 500) + 4
              : 0,
          }}
        >
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
      )}
    </button>
  );
};
