"use client";

import { Accordion } from "@ark-ui/react";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import type { ComponentProps } from "react";
import Star from "@/assets/star.svg";
import { Heading } from "@/components/ui/heading";
import styles from "./filter.module.css";

type FilterProps<T extends string> = {
  options: readonly T[];
  value: readonly T[];
  title: string;
  onValueChange: (value: T[]) => void;
  defaultOpen?: boolean;
};

export const Filter = <T extends string>({
  options,
  title,
  value,
  onValueChange,
}: FilterProps<T>) => {
  return (
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
        <ToggleGroup.Root
          multiple
          value={value.map((v) => v)}
          onValueChange={(details) => {
            onValueChange(details.value as T[]);
          }}
          className={styles.options}
        >
          {options.map((option) => (
            <ToggleGroup.Item
              key={option}
              value={option}
              className={styles.option}
            >
              {option}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

type FilterGroupProps = ComponentProps<typeof Accordion.Root>;

export function FilterGroup({ children, ...props }: FilterGroupProps) {
  return (
    <Accordion.Root
      className={styles.filterRoot}
      collapsible
      multiple
      {...props}
    >
      {children}
    </Accordion.Root>
  );
}
