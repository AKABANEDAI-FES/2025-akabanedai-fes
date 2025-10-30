import type { Metadata } from "next";
import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import Star from "../../assets/star.svg";
import GoodsA from "./Goods_A.webp";
import GoodsB from "./Goods_B.webp";
import GoodsC from "./Goods_C.webp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "公式グッズ販売",
  openGraph: {
    title: "公式グッズ販売",
  },
};

export default function Page() {
  return (
    <Container as="main" className={styles.officialGoods}>
      <Heading as="h1" variant="primary">
        公式グッズ販売
      </Heading>
      <StarDecoration />
      <BlurredBox className={styles.blurredBoxContainer}>
        <Text>赤羽台祭×こもれび祭コラボグッズ×白山祭コラボグッズ</Text>

        {/* 1. トートバッグ */}
        <div className={styles.goodsTitleBox}>
          <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
            トートバッグ
          </Heading>
        </div>
        <Image
          src={GoodsC}
          alt="トートバッグ"
          width={400}
          height={400}
          className={styles.goodsImage}
        />

        {/* 2. ステッカーA */}
        <div className={styles.goodsTitleBox}>
          <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
            ステッカーA
          </Heading>
        </div>
        <Image
          src={GoodsA}
          alt="ステッカーA"
          width={400}
          height={400}
          className={styles.goodsImage}
        />

        {/* 3. ステッカーB */}
        <div className={styles.goodsTitleBox}>
          <Heading as="h2" variant="secondary" className={styles.goodsHeading}>
            ステッカーB
          </Heading>
        </div>
        <Image
          src={GoodsB}
          alt="ステッカーB"
          width={400}
          height={400}
          className={styles.goodsImage}
        />

        {/* 去年のグッズ */}
        <div className={styles.lastYearGoods}>
          <Text>
            以下の去年のグッズも販売しています！
            <br />
            赤羽台祭×こもれび祭コラボグッズ
          </Text>
          <ul className={styles.goodsList}>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>アクリルキーホルダー</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>クリアファイル</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>ボールペン</span>
            </li>
          </ul>
          <ul className={styles.goodsList}>
            <li>イニャーグッズ</li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>イニャーハンドタオル</span>
            </li>
          </ul>
        </div>

        {/* 販売場所セクション */}
        <section className={styles.salesSection}>
          <Heading as="h3" variant="secondary" className={styles.salesHeading}>
            販売場所
          </Heading>
          <StarDecoration />
          <ul className={styles.goodsList}>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>インフォメーション</span>
            </li>
            <li>
              <Star className={styles.listIcon} aria-hidden="true" />
              <span>WELLB 3F「縁日」付近</span>
            </li>
          </ul>
        </section>
      </BlurredBox>
    </Container>
  );
}

