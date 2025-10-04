import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/header/mobile-menu";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import styles from "./overview.module.css";

export default function OverviewPage() {
  return (
    <>
      <MobileMenu />
      <div className={styles.container}></div>
      <div className={styles.overlay}>
        <Header className={styles.header} />
      </div>

      <Heading as="h1">開催概要</Heading>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Text>これはテスト用文章です</Text>
      <Footer />
    </>
  );
}
