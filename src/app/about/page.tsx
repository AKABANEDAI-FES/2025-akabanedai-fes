import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "赤羽台祭について | 赤羽台祭 2025 公式サイト",
  description: "第9回赤羽台祭のテーマ「Link(繋ぐ)」についての詳細や、私たちの想いを紹介します。",
};

export default function AboutPage() {
  return (
    <Container as="main" className={styles.mainContent}>
      <StarDecoration>
        <Heading as="h1">今年度の赤羽台祭について</Heading>
      </StarDecoration>

      <section className={styles.themeSection}>
        <div className={styles.themeTitle}>
          <Heading as="h2">今年度のテーマ</Heading>
          <Divider className={styles.themedivider} />
          <p>「Link（繋ぐ）」</p>
        </div>

        <div className={styles.descriptionBox}>
          <Text as="p" className={styles.descriptionText}>
            リンク（Link）という言葉には、「輪の環」そして「つながり」という意味があります。
            私たちは、これまでの大学祭が築いてきた歴史や経験、そして人と人との出会い、その一つひとつを大切な「リンク」だと考えています。
          </Text>
          <Text as="p" className={styles.descriptionText}>
            これらの「リンク」が強く結びつき、大学祭に関わるすべての人が一つになることで、第9回赤羽台祭の大きな「輪」が広がっていく。そんな想いを、このテーマに込めました。
          </Text>
          <Text as="p" className={styles.descriptionText}>
            「この大学祭が、あなたと何かを繋ぐきっかけになりますように。」
          </Text>
        </div>
      </section>
    </Container>
  );
}
