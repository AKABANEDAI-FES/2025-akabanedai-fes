import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Gallery } from "./_components/gallery";
import { Introduction } from "./_components/introduction";
import styles from "./page.module.css";

const characters = [
  {
    name: "イニャー",
    picture: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? ""}/character/inya.png`,
    description:
      "ボクの名前はイニャー！東洋大学赤羽台祭実行委員会INIAD部門の公式マスコットだニャ！ボクは電波の妖精！猫ではないニャ！ボクの特技はインターネットの速度を変えることなんだニャ！ウイルスの退治もできるからそんな時はボクを呼んでほしいニャ！電波を泳いで向かうニャ！今回の赤羽台祭にはボクもたくさん登場するから探してみてニャ！",
    themeColor: "var(--bg-canvas)",
  },
  {
    name: "ウェリオン",
    picture: `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? ""}/character/welion.png`,
    description:
      '僕の名前はウェリオン！自分の"幸せ"を実現する「ライフデザイン」と、良好で満たされている状態「ウェルビーイング」に相応しい動物のライオン。「健康」や「幸せ」をイメージとした穏やかな緑と黄色をしているよ。しっぽはクローバーをモチーフに、王冠はWELLB のWの形ガウ！',
    themeColor: "var(--color-accent-5)",
  },
];

const galleryImages = [...Array(9)].map(
  (_, i) =>
    `${process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? ""}/character/gallery${(i + 1).toString().padStart(2, "0")}.png`,
);

export const metadata: Metadata = {
  title: "キャラクター",
};

export default function CharacterPage() {
  return (
    <Container as="main" className={styles.container}>
      <StarDecoration>
        <Heading as="h1">キャラクター</Heading>
      </StarDecoration>
      <Introduction characters={characters} />
      <Gallery images={galleryImages} />
    </Container>
  );
}
