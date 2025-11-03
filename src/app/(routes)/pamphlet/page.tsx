import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/link-button";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import cover from "./cover.webp";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "パンフレット",
});

export default function PamphletPage() {
  return (
    <Container as="main" className={styles.container}>
      <StarDecoration>
        <Heading as="h1">パンフレット</Heading>
      </StarDecoration>
      <Image src={cover} alt="パンフレット表紙" className={styles.cover} />
      <LinkButton
        href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/9thpamphlet.pdf`}
        download
      >
        ダウンロード（24.2MB）
      </LinkButton>
    </Container>
  );
}
