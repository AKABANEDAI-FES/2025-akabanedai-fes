import React from 'react';
import Image from 'next/image';
import { MobileMenu } from "@/components/header/mobile-menu";
import { Container } from "@/components/ui/container";
import map from '@/app/_components/access/map.webp';
import styles from "./access.module.css";
import { StarDecoration } from '@/components/ui/star-decoration';
import { Text } from '@/components/ui/text';
import { LinkButton } from '@/components/ui/link-button';
import { Heading } from '@/components/ui/heading';

export default function AccessPage() {
  return (
    <>
      <MobileMenu />
      <Container as="main" className={styles.pageContainer}>

        {/* --- アクセスタイトル --- */}
        <StarDecoration>
          <Heading as="h1">アクセス</Heading>
        </StarDecoration>
        <div className={styles.mapContainer}>
          <Image
            src={map}
            alt="アクセスマップ"
            className={styles.mapImage}
            placeholder="blur"
          />
          <div className={styles.mapButton}>
            <LinkButton href="https://maps.app.goo.gl/U9C61wYiw37rwvL7A" target="_blank">
              Googleマップはこちら
            </LinkButton>
          </div>
        </div>

        {/* --- 交通案内セクション --- */}
        <div className={styles.info}>
          <div className={styles.contentWrapper}>
            <section>
              <StarDecoration fill>
                <Heading as="h2" variant="secondary">電車をご利用の場合</Heading>
              </StarDecoration>
              <ul className={styles.infoList}>
                <li><Text>JR「赤羽駅」西口から 徒歩10分</Text></li>
                <li><Text>東京メトロ南北線・埼玉高速鉄道「赤羽岩淵駅」出入口2から 徒歩12分</Text></li>
              </ul>
            </section>

            <section>
              <StarDecoration fill>
                <Heading as="h2" variant="secondary">バスをご利用の場合</Heading>
              </StarDecoration>
              <ul className={styles.infoList}>
                <li><Text>国際興業バス「赤羽台三丁目」バス停から徒歩3分</Text></li>
                <li><Text>国際興業バス「法善寺交番」バス停から徒歩3分</Text></li>
              </ul>
            </section>

            <section>
              <StarDecoration fill>
                <Heading as="h2" variant="secondary">注意事項</Heading>
              </StarDecoration>
              <Text className={styles.infoList}>
                駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
              </Text>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}