import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import { Content } from "./_components/content";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "企画一覧",
});

export default function ProgramsPage() {
  return (
    <Container as="main" className={styles.pageContainer}>
      <StarDecoration>
        <Heading as="h1">企画一覧</Heading>
      </StarDecoration>
      <Content />
    </Container>
  );
}
