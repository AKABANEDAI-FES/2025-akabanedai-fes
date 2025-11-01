import Image from "next/image";
import logo from "@/assets/logo.webp";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { createMetadata } from "@/utils/seo";
import Circle from "./circle.svg";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "今年度の赤羽台祭について",
});

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
        <Heading as="h3" variant="secondary" className={styles.logoSubtitle}>
          「つながるリンク、広がる輪」
        </Heading>
        <div className={styles.logoDescriptionBox}>
          <Text as="p" className={styles.themedescriptionText}>
            今年のテーマである「Link(繋ぐ)」から、星を繋げて描く星座や宇宙をモチーフにロゴを制作しました。
            惑星の周回軌道をイメージした同心円をデザインに取り入れ、つながりと広がりを表現しています。
            星々が結ばれていくように、人と人との関わりや新たな発見が連鎖していってほしいという願いを込めました。
          </Text>
        </div>
      </section>
      <StarDecoration className={styles.greetingTitle}>
        <Heading as="h1">委員長挨拶</Heading>
      </StarDecoration>
      <section className={styles.greetingSection}>
        <div className={styles.greetingHeader}>
          <Circle role="presentation" className={styles.greetingIcon} />
          <Heading
            as="h3"
            variant="secondary"
            className={styles.greetingHeaderText}
          >
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
          <Circle role="presentation" className={styles.greetingIcon} />
          <Heading
            as="h3"
            variant="secondary"
            className={styles.greetingHeaderText}
          >
            WELLB & HELSPO部門 委員長 宮城勇
          </Heading>
        </div>
        <div className={styles.greetingBox}>
          <Text as="p" className={styles.themedescriptionText}>
            今年のテーマは「Link（繋ぐ）」です。地域の皆さまとの「繋がり」を大切に、スローガン「つながるリンク、広がる輪」のもと、学部や世代を超えたコミュニケーションが、新たな価値を届ける行事になり、未来につながる一日となればと願います。
          </Text>
        </div>
      </section>
    </Container>
  );
}
