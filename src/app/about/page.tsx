import type { Metadata } from "next";
import Image from "next/image";
import iconIniad from "@/assets/Frame-6.webp";
import logo from "@/assets/logo.webp";
import iconWellb from "@/assets/Vector.webp";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "赤羽台祭について | 赤羽台祭 2025 公式サイト",
  description:
    "第9回赤羽台祭のテーマ「Link(繋ぐ)」についての詳細や、私たちの想いを紹介します。",
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
          <span className={styles.themeDivider} />
          <span>「Link（繋ぐ）」</span>
        </div>
        <div className={styles.themedescriptionBox}>
          <Text as="p" className={styles.themedescriptionText}>
            リンク（Link）という言葉には、「輪の環」そして「つながり」という意味があります。
            私たちは、これまでの大学祭が築いてきた歴史や経験、そして人と人との出会い、その一つひとつを大切な「リンク」だと考えています。
          </Text>
          <Text as="p" className={styles.themedescriptionText}>
            これらの「リンク」が強く結びつき、大学祭に関わるすべての人が一つになることで、第9回赤羽台祭の大きな「輪」が広がっていく。そんな想いを、このテーマに込めました。
          </Text>
          <Text as="p" className={styles.themedescriptionText}>
            「この大学祭が、あなたと何かを繋ぐきっかけになりますように。」
          </Text>
        </div>
      </section>
      <StarDecoration className={styles.logoTitle}>
        <Heading as="h1">ロゴ</Heading>
      </StarDecoration>
      <section className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="ロゴ画像" className={styles.logoImage} />
        </div>
        <Heading as="h3" className={styles.logoSubtitle}>
          「つながるリンク、広がる輪」
        </Heading>
        <div className={styles.logoDescriptionBox}>
          <Text as="p" className={styles.themedescriptionText}>
            今年のテーマである「Link」から着想を得て、「繋ぐ」をモチーフに、学部を横断するロゴを制作しました。
            赤羽台の地形のイメージ、INIADのi、WELLBのWのデザインも取り入れ、INIADとWELLBの学生が協力して赤羽台祭を創り上げていく様子をイメージしました。
          </Text>
        </div>
      </section>
      <StarDecoration className={styles.greetingTitle}>
        <Heading as="h1">委員長挨拶</Heading>
      </StarDecoration>
      <section className={styles.greetingSection}>
        <div className={styles.greetingHeader}>
          <Image
            src={iconIniad}
            alt="情報連携学部アイコン"
            className={styles.greetingIcon}
          />
          <Heading as="h3" className={styles.greetingHeaderText}>
            INIAD部門 委員長 佐藤仁輝
          </Heading>
        </div>
        <div className={styles.greetingBox}>
          <Text as="p" className={styles.themedescriptionText}>
            赤羽台祭Webサイトをご覧いただきありがとうございます！
            今年は「Link（繋ぐ）」をテーマに情報連携学部と福祉社会学部の繋がりを意識して準備してきました。
            学部間の交流だけでなく、地域の方々との「Link」も創出できるような企画を用意しています。
            ぜひ赤羽台祭をお楽しみください！
          </Text>
        </div>
        <div className={styles.greetingHeader}>
          <Image
            src={iconWellb}
            alt="福祉社会学部アイコン"
            className={styles.greetingIcon}
          />
          <Heading as="h3" className={styles.greetingHeaderText}>
            WELLB &
            <br />
            HELSPO部門 委員長 宮城勇
          </Heading>
        </div>
        <div className={styles.greetingBox}>
          <Text as="p" className={styles.themedescriptionText}>
            今年のテーマは「Link（繋ぐ）」です。地域の皆さまとの「繋がり」を大切に、スローガン「つながるリンク、広がる輪」のもと、学部や世代を超えたコミュニケーションが、新たな価値を届ける行事になり、未来につながる一日となればと願います。
          </Text>
        </div>
      </section>
      <StarDecoration className={styles.lastyearTitle}>
        <Heading as="h1">昨年度の様子</Heading>
      </StarDecoration>
      <section className={styles.lastyearSection}></section>
    </Container>
  );
}
