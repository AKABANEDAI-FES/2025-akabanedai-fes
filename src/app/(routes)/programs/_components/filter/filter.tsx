"use client";

import { Accordion } from "@ark-ui/react";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import clsx from "clsx";
import type { ComponentProps } from "react";
import Chevron from "@/assets/chevron.svg";
import Star from "@/assets/star.svg";
import { tag } from "@/components/tag";
import styles from "./filter.module.css";

type FilterProps<T extends string> = {
  options: readonly T[];
  value: readonly T[];
  label: string;
  onValueChange: (value: T[]) => void;
  defaultOpen?: boolean;
};

export const Filter = <T extends string>({
  options,
  label,
  value,
  onValueChange,
}: FilterProps<T>) => {
  return (
    <Accordion.Item value={label} className={styles.filterItem}>
      <Accordion.ItemTrigger className={styles.filterTrigger}>
        <Accordion.ItemIndicator className={styles.indicator} asChild>
          <Star />
        </Accordion.ItemIndicator>
        {label}
        <Accordion.ItemIndicator className={styles.chevron} asChild>
          <Chevron />
        </Accordion.ItemIndicator>
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
              className={clsx(tag({ size: "md" }), styles.option)}
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
