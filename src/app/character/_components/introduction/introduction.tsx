import { Tabs } from "@ark-ui/react/tabs";
import Image from "next/image";
import Star from "@/assets/star.svg";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import styles from "./introduction.module.css";
import inya from "./inya.webp";
import welion from "./welion.webp";

const characters = [
  {
    name: "イニャー",
    picture: inya,
    description:
      "ボクの名前はイニャー！東洋大学赤羽台祭実行委員会INIAD部門の公式マスコットだニャ！ボクは電波の妖精！猫ではないニャ！ボクの特技はインターネットの速度を変えることなんだニャ！ウイルスの退治もできるからそんな時はボクを呼んでほしいニャ！電波を泳いで向かうニャ！今回の赤羽台祭にはボクもたくさん登場するから探してみてニャ！",
    themeColor: "var(--bg-canvas)",
  },
  {
    name: "ウェリオン",
    picture: welion,
    description:
      '僕の名前はウェリオン！自分の"幸せ"を実現する「ライフデザイン」と、良好で満たされている状態「ウェルビーイング」に相応しい動物のライオン。「健康」や「幸せ」をイメージとした穏やかな緑と黄色をしているよ。しっぽはクローバーをモチーフに、王冠はWELLB のWの形ガウ！',
    themeColor: "var(--color-accent-5)",
  },
];

export const Introduction = () => {
  return (
    <BlurredBox as="section" className={styles.container}>
      <Tabs.Root className={styles.content} defaultValue="0">
        <Tabs.List className={styles.tabList}>
          {characters.map((character, index) => (
            <Tabs.Trigger
              key={character.name}
              value={index.toString()}
              style={
                { "--image-color": character.themeColor } as React.CSSProperties
              }
              className={styles.tabTrigger}
            >
              <Image
                src={character.picture}
                alt={character.name}
              />
              <VisuallyHidden>{character.name}</VisuallyHidden>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {characters.map((character, index) => (
          <Tabs.Content
            key={character.name}
            value={index.toString()}
            style={
              { "--image-color": character.themeColor } as React.CSSProperties
            }
            className={styles.tabContent}
          >
            <div className={styles.imageFrame}>
              <Image
                className={styles.mainVisual}
                src={character.picture}
                alt={character.name}
              />
            </div>
            <div className={styles.description}>
              <Heading as="h2" variant="secondary">
                {character.name}
              </Heading>
              <div className={styles.descriptionFrame}>
                <Text>{character.description}</Text>
                <Star className={styles.topRightStar} />
                <Star className={styles.bottomLeftStar} />
              </div>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </BlurredBox>
  );
};
