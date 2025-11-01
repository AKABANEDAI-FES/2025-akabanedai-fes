import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import { ProgramMap } from "./_components/program-map";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "企画マップ",
});

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
