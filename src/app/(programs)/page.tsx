import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Content } from "./_components/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "企画一覧",
};

export default function ProgramsPage() {
  // const [selectedWhere, setSelectedWhere] = useState<Where[]>([]);
  return (
    <Container as="main" className={styles.pageContainer}>
      <StarDecoration>
        <Heading as="h1">企画一覧</Heading>
      </StarDecoration>
      <Content></Content>
    </Container>
  );
}
