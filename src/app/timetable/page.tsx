import type { Metadata } from "next";
import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import day1 from "./day1.webp";
import day2 from "./day2.webp";
import styles from "./page.module.css";

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
        <div className={styles.timetableContainer}>
          <Image
            src={day1}
            alt="11月2日のタイムテーブル"
            className={styles.timetable}
          />
          <Image
            src={day2}
            alt="11月3日のタイムテーブル"
            className={styles.timetable}
          />
        </div>
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
