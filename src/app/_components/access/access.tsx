import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./access.module.css";
import map from "./map.png";

export function Access() {
  return (
    <section className={styles.access}>
      <Heading as="h2">アクセス</Heading>
      <div className={styles.accessContent}>
        <div className={styles.accessInfo}>
          <Image
            src="https://placehold.jp/350x200.png"
            height={200}
            width={350}
            alt="入口"
            className={styles.entranceImage}
          />
          <ul>
            <Text as="li" className={styles.transportItem}>
              JR
              <br />
              「赤羽駅」西口から徒歩10分
            </Text>
            <Text as="li" className={styles.transportItem}>
              東京メトロ南北線・埼玉高速鉄道
              <br />
              「赤羽岩淵駅」出入り口2から徒歩12分
            </Text>
            <Text as="li" className={styles.transportItem}>
              国際興業バス
              <br />
              「赤羽台三丁目」バス停から徒歩3分
              <br />
              「法善寺交番」バス停から徒歩3分
            </Text>
          </ul>
          <Text className={styles.notice}>
            駐車場はございません。
            <br />
            お車でのご来場はご遠慮ください。
          </Text>
        </div>
        <Image src={map} alt="会場地図" className={styles.mapImage} />
      </div>
    </section>
  );
}
