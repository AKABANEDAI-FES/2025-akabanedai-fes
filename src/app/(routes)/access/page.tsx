import type { Metadata } from "next";
import Image from "next/image";
import map from "@/assets/map.webp";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/link-button";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "アクセス",
};

export default function AccessPage() {
  return (
    <Container as="main" className={styles.pageContainer}>
      <StarDecoration>
        <Heading as="h1">アクセス</Heading>
      </StarDecoration>
      <div className={styles.mainContent}>
        <div className={styles.mapContainer}>
          <Image src={map} alt="アクセスマップ" className={styles.mapImage} />
          <LinkButton
            href="https://maps.app.goo.gl/U9C61wYiw37rwvL7A"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapButton}
          >
            Googleマップはこちら
          </LinkButton>
        </div>
        <BlurredBox className={styles.infobox}>
          <div className={styles.section}>
            <StarDecoration fill>
              <Heading as="h2" variant="secondary">
                電車をご利用の場合
              </Heading>
            </StarDecoration>
            <ul className={styles.infoList}>
              <li>
                <Text>JR「赤羽駅」西口から 徒歩10分</Text>
              </li>
              <li>
                <Text>
                  東京メトロ南北線・埼玉高速鉄道「赤羽岩淵駅」出入口2から
                  徒歩12分
                </Text>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <StarDecoration fill>
              <Heading as="h2" variant="secondary">
                バスをご利用の場合
              </Heading>
            </StarDecoration>
            <ul className={styles.infoList}>
              <li>
                <Text>国際興業バス「赤羽台三丁目」バス停から徒歩3分</Text>
              </li>
              <li>
                <Text>国際興業バス「法善寺交番」バス停から徒歩3分</Text>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <StarDecoration fill>
              <Heading as="h2" variant="secondary">
                注意事項
              </Heading>
            </StarDecoration>
            <Text className={styles.infoList}>
              駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
            </Text>
          </div>
        </BlurredBox>
      </div>
    </Container>
  );
}
