import Image from "next/image";
import campusMap from "@/assets/campusmap.webp";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "キャンパスマップ",
});

export default function CampusMapPage() {
  return (
    <Container as="main" className={styles.pageContainer}>
      <StarDecoration>
        <Heading as="h1">キャンパスマップ</Heading>
      </StarDecoration>
      <div className={styles.mapContainer}>
        <Image
          src={campusMap}
          alt="キャンパスマップ"
          className={styles.mapImage}
        />
      </div>
    </Container>
  );
}
