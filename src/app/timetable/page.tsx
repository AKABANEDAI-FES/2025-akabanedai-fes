import type { Metadata } from "next";
import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";
import timetable from "./timetable.webp";

export const metadata: Metadata = {
  title: "タイムテーブル",
};

export default function TimeTable() {
  return (
    <Container as="main" className={styles.mainContent}>
      <StarDecoration>
        <Heading as="h1">タイムテーブル</Heading>
      </StarDecoration>

      <BlurredBox as="section" className={styles.section}>
        <Image
          src={timetable}
          alt="タイムテーブル"
          className={styles.timetable}
        />
        <Text>
          ※タイムテーブルは変更になる場合がございます。ご了承ください。
        </Text>
        <Text>
          ※11/2のINIAD卒業生対象イベントはINIAD
          HUB-1の2階学生食堂で開催しています。
        </Text>
      </BlurredBox>
    </Container>
  );
}
