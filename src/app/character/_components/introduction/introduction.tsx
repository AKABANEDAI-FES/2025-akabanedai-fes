"use client";

import { Tabs } from "@ark-ui/react/tabs";
import { useState } from "react";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
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

  return (
    <BlurredBox as="section" className={styles.container}>
      <div
        className={styles.imagePlaceholder}
        // style={{ backgroundColor: activeCharacter.themeColor }}
      />
      <Tabs.Root
        value={activeIndex.toString()}
        onValueChange={(e) => setActiveIndex(Number.parseInt(e.value, 10))}
        className={styles.content}
      >
        <Tabs.List className={styles.tabList}>
          {characters.map((character, index) => (
            <Tabs.Trigger
              key={character.name}
              value={index.toString()}
              className={styles.tabTrigger}
              style={
                {
                  "--indicator-color": character.themeColor,
                } as React.CSSProperties
              }
            >
              <div
                className={styles.tabImagePlaceholder}
                style={{ backgroundColor: character.themeColor }}
              />
              <VisuallyHidden>{character.name}</VisuallyHidden>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {characters.map((character, index) => (
          <Tabs.Content
            key={character.name}
            value={index.toString()}
            className={styles.tabContent}
          >
            <div
              className={styles.description}
              style={
                {
                  "--theme-color": character.themeColor,
                } as React.CSSProperties
              }
            >
              <Heading as="h2">{character.name}</Heading>
              <Text>{character.description}</Text>
              <div className={styles.xAccount}>
                <XIcon />
                <Text as="span">{character.xAccount}</Text>
              </div>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </BlurredBox>
  );
};

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>X (Twitter)</title>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
