import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { ProgramMap } from "./_components/program-map";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "企画マップ",
};

type Where = "iniad" | "wellb" | "helspo" | "other";

export default function ProgramMapPage() {
  return (
    <Container as="main" className={styles.container}>
      <StarDecoration>
        <Heading as="h1">企画マップ</Heading>
      </StarDecoration>
      <ProgramMap />
    </Container>
  );
}
