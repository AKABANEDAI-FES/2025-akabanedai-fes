import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import Star from "../../assets/star.svg";
import styles from "./page.module.css";
export default function OverviewPage() {
  return (
    <Container as="main" className={styles.mainContainer}>
      <StarDecoration>
        <Heading as="h1" className={styles.headLine}>
          開催概要
        </Heading>
      </StarDecoration>

      <BlurredBox className={styles.firstGroup}>
        <Heading as="h2" variant="secondary">
          赤羽台祭について
        </Heading>
        <Text>
          赤羽台祭（あかばねだいさい）は、東洋大学赤羽台キャンパスで毎年開催される大学祭です。情報連携学部、社会福祉デザイン学部、健康スポーツ科学部の3つの学部が、特色を生かしたさまざまな催しを展開します。
        </Text>

        <Text>
          開催期間中は、学生団体や地域の皆さまと協力してつくりあげた展示や体験型企画、ステージイベントなどが行われます。
          <br />
          {/* <Text></Text> */}
          普段は落ち着いた雰囲気の赤羽台キャンパスが、この期間は活気にあふれたにぎやかな場所となります。
        </Text>

        <Text>
          この大学祭が、あなたと新しい何かを繋ぐきっかけとなりますように。
          <br></br>皆さまのご来場を心よりお待ちしております。
        </Text>
      </BlurredBox>

      <BlurredBox className={styles.secondGroup}>
        <Container className={styles.secondHeading}>
          <Heading as="h2" variant="secondary">
            第9回赤羽台祭
          </Heading>
          <Heading as="h2" variant="secondary">
            開催概要
          </Heading>
        </Container>

        <Container>
          <dl className={styles.mydl}>
            <dt className={styles.mydt}>
              <Text>
                <Star className={styles.blackStarIcon} />
                開催日時
              </Text>
            </dt>
            <dd className={styles.mydd}>
              <Text>1日目：2025年11月2日(日)10:00～18:00</Text>
            </dd>
            <dd className={styles.mydd}>
              <Text>2日目：2025年11月3日(月)10:00～18:00</Text>
            </dd>

            <dt className={styles.mydt}>
              <Text>
                <Star className={styles.blackStarIcon} />
                会場
              </Text>
            </dt>
            <dd className={styles.mydd}>
              <Text>東洋大学赤羽台キャンパス</Text>
            </dd>
            <dd className={styles.mydd}>
              <Text>〒115-8650 東京都北区赤羽台1丁目7-11</Text>
            </dd>

            <dt className={styles.mydt}>
              <Text>
                <Star className={styles.blackStarIcon} />
                来場について
              </Text>
            </dt>
            <dd className={styles.mydd}>
              <Text>事前予約やチケットについては不要です</Text>
            </dd>
            <dd className={styles.mydd}>
              <Text>入場料は無料です</Text>
            </dd>
            <dd className={styles.mydd}>
              <Text>※一部体験や飲食出店は有料です</Text>
            </dd>

            <dt className={styles.mydt}>
              <Text>
                <Star className={styles.blackStarIcon} />
                主催
              </Text>
            </dt>
            <dd className={styles.mydd}>
              <Text>赤羽台祭実行委員会</Text>
            </dd>

            <dt className={styles.mydt}>
              <Text>
                <Star className={styles.blackStarIcon} />
                お問い合わせ
              </Text>
            </dt>
            <dd className={styles.mydd}>
              <Text>support[at]akabanedai-fes.com</Text>
            </dd>
            <dd className={styles.mydd}>
              <Text>※ ご連絡の際は[at]を@に変更してお送りください。</Text>
            </dd>
          </dl>
        </Container>
      </BlurredBox>
    </Container>
  );
}
