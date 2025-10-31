"use client";

import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./introduction.module.css";

type Character = {
  name: string;
  description: string;
  themeColor: string;
  xAccount: string;
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
            <div
              className={styles.descriptionBackground}
              style={{ backgroundColor: activeCharacter.themeColor }}
            />
            <div className={styles.descriptionContent}>
              <Heading as="h3">{activeCharacter.name}</Heading>
              <Text>{activeCharacter.description}</Text>
              <div className={styles.xAccount}>
                <XIcon />
                <Text as="span">{activeCharacter.xAccount}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>X (Twitter)</title>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
