import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/header/mobile-menu";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Parallax } from "../_components/parallax";
import { Divider } from "@/components/ui/divider";
import Star from "../../assets/star.svg";
import styles from "./page.module.css";

export default function OverviewPage() {
  return (
    <>
      <MobileMenu />
      <Parallax.Root className={styles.parallax}>
        <div className={styles.overlay}>
          <Header className={styles.header} />
        </div>
        <Parallax.Layer className={styles.layer} />
        <Parallax.Content className={styles.content}>
          <Container as="main" className={styles.container}>
            <div className={styles.starline}>
              <Heading as="h1" className={styles.heading}>
                開催概要
              </Heading>
              <div className={styles.starunderline}>
                <Star className={styles.star} />
                <Divider className={styles.divider} />
                <Star className={styles.star} />
              </div>
              <Heading as="h2" variant="secondary">
                赤羽台祭について
              </Heading>
              <Text>
                赤羽台祭（あかばねだいさい）は、東洋大学赤羽台キャンパスで毎年開催される大学祭です。情報連携学部、社会福祉デザイン学部、健康スポーツ科学部の3つの学部が、特色を生かしたさまざまな催しを展開します。開催期間中は、学生団体や地域の皆さまと協力してつくりあげた展示や体験型企画、ステージイベントなどが行われます。普段は落ち着いた雰囲気の赤羽台キャンパスが、この期間は活気にあふれたにぎやかな場所となります。この大学祭が、あなたと新しい何かを繋ぐきっかけとなりますように。皆さまのご来場を心よりお待ちしております。
              </Text>
            </div>
          </Container>
          <Footer />
        </Parallax.Content>
      </Parallax.Root>
    </>
  );
}
