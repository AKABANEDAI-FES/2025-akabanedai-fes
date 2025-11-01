import { Fragment } from "react";
import Star from "@/assets/star.svg";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { createMetadata } from "@/utils/seo";
import styles from "./page.module.css";

const descriptions = [
  {
    term: "開催日時",
    details: [
      <span key="day1">
        1日目：<time dateTime="2025-11-02">2025年11月2日(日)</time>
        <time dateTime="10:00">10:00</time>～<time dateTime="18:00">18:00</time>
      </span>,
      <span key="day2">
        2日目：<time dateTime="2025-11-03">2025年11月3日(月)</time>
        <time dateTime="10:00">10:00</time>～<time dateTime="18:00">18:00</time>
      </span>,
    ],
  },
  {
    term: "会場",
    details: [
      "東洋大学赤羽台キャンパス",
      "〒115-8650 東京都北区赤羽台1丁目7-11",
    ],
  },
  {
    term: "来場について",
    details: [
      "事前予約やチケットは不要です",
      "入場料は無料です",
      "※一部体験や飲食出店は有料です",
    ],
  },
  {
    term: "主催",
    details: ["赤羽台祭実行委員会"],
  },
  {
    term: "お問い合わせ",
    details: [
      "support[at]akabanedai-fes.com",
      "※ ご連絡の際は[at]を@に変更してお送りください。",
    ],
  },
];

export const metadata = createMetadata({
  title: "開催概要",
});

export default function OverviewPage() {
  return (
    <Container as="main" className={styles.mainContainer}>
      <StarDecoration>
        <Heading as="h1">開催概要</Heading>
      </StarDecoration>

      <BlurredBox as="section" className={styles.section}>
        <Heading as="h2" variant="secondary">
          赤羽台祭について
        </Heading>
        <Text>
          赤羽台祭（あかばねだいさい）は、東洋大学赤羽台キャンパスで毎年開催される大学祭です。
          <br />
          情報連携学部、社会福祉デザイン学部、健康スポーツ科学部の3つの学部が、特色を生かしたさまざまな催しを展開します。
        </Text>

        <Text>
          開催期間中は、学生団体や地域の皆さまと協力してつくりあげた展示や体験型企画、ステージイベントなどが行われます。
          <br />
          普段は落ち着いた雰囲気の赤羽台キャンパスが、この期間は活気にあふれたにぎやかな場所となります。
        </Text>
        <Text>
          この大学祭が、あなたと新しい何かを繋ぐきっかけとなりますように。
          <br />
          皆さまのご来場を心よりお待ちしております。
        </Text>
      </BlurredBox>

      <BlurredBox className={styles.section}>
        <Heading as="h2" variant="secondary" className={styles.wordSpaced}>
          第9回赤羽台祭 開催概要
        </Heading>

        <dl className={styles.infoSection}>
          {descriptions.map(({ term, details }) => (
            <Fragment key={term}>
              <Text as="dt" className={styles.infoLabel}>
                <Star className={styles.blackStarIcon} />
                {term}
              </Text>
              {details.map((detail, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: this is static content
                <Text as="dd" key={idx} className={styles.infoContent}>
                  {detail}
                </Text>
              ))}
            </Fragment>
          ))}
        </dl>
      </BlurredBox>
    </Container>
  );
}
