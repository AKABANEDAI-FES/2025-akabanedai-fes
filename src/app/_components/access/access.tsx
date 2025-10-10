import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./access.module.css";
import entrance from "./entrance.webp";
import map from "./map.webp";

export function Access() {
  return (
    <section className={styles.access}>
      <Heading as="h2">アクセス</Heading>
      <div className={styles.accessContent}>
        <div className={styles.accessInfo}>
          <Image
            src={entrance}
            width={350}
            alt="入口"
            className={styles.entranceImage}
          />
          <BlurredBox className={styles.infoText}>
            <ul>
              <Text as="li" className={styles.transportItem}>
                JR
                <br />
                「赤羽駅」西口から徒歩10分
              </Text>
              <Text as="li" className={styles.transportItem}>
                東京メトロ南北線・埼玉高速鉄道
                <br />
                「赤羽岩淵駅」出入口2から徒歩12分
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
              駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
            </Text>
          </BlurredBox>
        </div>
        <Image
          src={map}
          alt="会場地図"
          className={styles.mapImage}
          width={350}
        />
      </div>
    </section>
  );
}
