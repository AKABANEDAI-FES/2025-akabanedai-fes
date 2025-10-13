import Image from 'next/image';
import { MobileMenu } from "@/components/header/mobile-menu";
import { Container } from "@/components/ui/container";
import map from '@/app/_components/access/map.webp';
import styles from "./access.module.css";
import { StarDecoration } from '@/components/ui/star-decoration';
import { Text } from '@/components/ui/text';

export default function AccessPage() {
  return (
    <>
      <MobileMenu />
      <Container as="main" className={styles.pageContainer}>

        {/* --- アクセスタイトル --- */}
        <Container>
          <div className={styles.titleWrapper}>
            <Text className={styles.title}>アクセス</Text>
          </div>
          <StarDecoration/>
        </Container>
        <div className={styles.mapContainer}>
          <Image
            src={map}
            alt="アクセスマップ"
            className={styles.mapImage}
            placeholder="blur"
          />
          <div className={styles.mapButton}>
            <a href="https://maps.app.goo.gl/U9C61wYiw37rwvL7A">
              Googleマップはこちら
            </a>
          </div>
        </div>

        {/* --- 交通案内セクション --- */}
        <div className={styles.info}>
          <div className={styles.contentWrapper}>
            <section>
              <div className={styles.sectionTitleWrapper}>
                <Text className={styles.sectionTitle}>電車をご利用の場合</Text>
              </div>
              <StarDecoration />
              <ul className={styles.infoList}>
                <li><Text>JR「赤羽駅」西口から 徒歩10分</Text></li>
                <li><Text>東京メトロ南北線・埼玉高速鉄道「赤羽岩淵駅」出入り口2から 徒歩12分</Text></li>
              </ul>
            </section>

            <section>
              <div className={styles.sectionTitleWrapper}>
                <Text className={styles.sectionTitle}>バスをご利用の場合</Text>
              </div>
              <StarDecoration />
              <ul className={styles.infoList}>
                <li><Text>国際興業バス「赤羽台三丁目」バス停　徒歩3分</Text></li>
                <li><Text>国際興業バス「法善寺交番」バス停　徒歩3分</Text></li>
              </ul>
            </section>
            
            <section>
              <div className={styles.sectionTitleWrapper}>
                <Text className={styles.sectionTitle}>注意事項</Text>
              </div>
              <StarDecoration />
              <Text className={styles.notes}>
                駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
              </Text>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}