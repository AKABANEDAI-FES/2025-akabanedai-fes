import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Gallery } from "./_components/gallery";
import { Introduction } from "./_components/introduction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "キャラクター",
};

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
