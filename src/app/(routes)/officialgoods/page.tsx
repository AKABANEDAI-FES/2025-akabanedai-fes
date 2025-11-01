import Image from "next/image";
import Star from "@/assets/star.svg";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { createMetadata } from "@/utils/seo";
import GoodsA from "./Goods_A.webp";
import GoodsB from "./Goods_B.webp";
import GoodsC from "./Goods_C.webp";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "公式グッズ販売",
});

export default function Page() {
  return (
    <Container as="main" className={styles.officialGoods}>
      <StarDecoration>
        <Heading as="h1" variant="primary">
          公式グッズ販売
        </Heading>
      </StarDecoration>

      <Text>赤羽台祭×こもれび祭コラボグッズ×白山祭コラボグッズ</Text>

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

      {/* --- ▼ 2列グリッド (goodsGrid) の div を削除 ▼ --- */}
      <div className={styles.lastYearGoods}>
        <Text className={styles.lastYearGoodsTitle}>
          以下の去年のグッズも販売しています！
        </Text>

        <Text className={styles.goodsListSubheading}>
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
        <Text className={styles.goodsListSubheading}>イニャーグッズ</Text>
        <ul className={styles.goodsList}>
          <li>
            <Star className={styles.listIcon} aria-hidden="true" />
            <span>イニャーハンドタオル</span>
          </li>
        </ul>
      </div>

      <section className={styles.salesSection}>
        <StarDecoration fill>
          <Heading as="h3" variant="secondary">
            販売場所
          </Heading>
        </StarDecoration>

        <BlurredBox className={styles.salesListBox}>
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
        </BlurredBox>
      </section>
    </Container>
  );
}
