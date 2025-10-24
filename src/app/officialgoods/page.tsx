import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";
import { StarDecoration } from "@/components/ui/star-decoration";
import { BlurredBox } from "@/components/ui/blurred-box";
import Star from "../../assets/star.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "公式グッズ販売",
  openGraph: {
    title: "公式グッズ販売",
  },
};

export default function Page() {
  return (
    <Container as="main" className={styles.officialGoods}>
      <StarDecoration>
        <Heading as="h1" variant="primary">
          公式グッズ販売
        </Heading>
      </StarDecoration>

      <BlurredBox>
        <Text>赤羽台祭のキャラクター公式です。</Text>

        {/* 1. トートバッグ */}
        <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
          トートバッグ
        </Heading>
        <Image
          src="/images/goods/tote_bag.png" // ※画像パスはご自身のものに変更
          alt="トートバック"
          width={400}
          height={400}
        />

        {/* 2. ステッカーA */}
        <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
          ステッカーA
        </Heading>
        <Image
          src="/images/goods/sticker_a.png" // ※画像パスはご自身のものに変更
          alt="ステッカーA"
          width={400}
          height={400}
        />

        {/* 3. ステッカーB */}
        <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
          ステッカーB
        </Heading>
        <Image
          src="/images/goods/sticker_b.png" // ※画像パスはご自身のものに変更
          alt="ステッカーB"
          width={400}
          height={400}
        />

        <div className={styles.lastYearGoods}>
          <Text>
            以下の去年のグッズも販売しています！
            <br />
            赤羽台祭×こもれび祭コラボグッズ
          </Text>

          <ul className={styles.goodsList}>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>クリアファイル</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>ボールペン</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>キーホルダー</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>イニャーハンドタオル</span>
            </li>
          </ul>
        </div>
      </BlurredBox>
    </Container>
  );
}
