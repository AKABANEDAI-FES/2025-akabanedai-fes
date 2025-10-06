import { Container } from "@/components/ui/container";
import { Access } from "./_components/access";
import { Banner } from "./_components/banner";
import { Theme } from "./_components/theme";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Banner />
      <Container as="main" className={styles.container}>
        <Theme />
        <Access />
      </Container>
    </>
  );
}
