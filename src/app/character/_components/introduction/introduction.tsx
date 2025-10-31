"use client";

import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./introduction.module.css";

type Character = {
  name: string;
  description: string;
  themeColor: string;
};

type Props = {
  characters: Character[];
};

export const Introduction = ({ characters }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCharacter = characters[activeIndex];

  return (
    <section className={styles.introduction}>
      <div className={styles.body}>
        <div className={styles.main}>
          <div
            className={styles.imagePlaceholder}
            style={{ backgroundColor: activeCharacter.themeColor }}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.tabs}>
            {characters.map((character, index) => (
              <button
                key={character.name}
                type="button"
                className={styles.tab}
                data-active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                style={{
                  "--indicator-color": character.themeColor,
                } as React.CSSProperties}
              >
                <div
                  className={styles.tabImagePlaceholder}
                  style={{ backgroundColor: character.themeColor }}
                />
              </button>
            ))}
          </div>
          <div className={styles.description}>
            <Heading as="h3">
              {activeCharacter.name}
            </Heading>
            <Text>{activeCharacter.description}</Text>
          </div>
        </div>
      </div>
    </section>
  );
};
