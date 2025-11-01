import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import { Gallery } from "./_components/gallery";
import { Introduction } from "./_components/introduction";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "キャラクター",
});

export default function CharacterPage() {
  return (
    <Container as="main" className={styles.container}>
      <StarDecoration>
        <Heading as="h1">キャラクター</Heading>
      </StarDecoration>
      <Introduction />
      <Gallery />
    </Container>
  );
}
