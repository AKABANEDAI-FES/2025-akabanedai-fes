import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";
import { Access } from "./_components/access";
import { Banner } from "./_components/banner";
import { Parallax } from "./_components/parallax";
import { Theme } from "./_components/theme";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Parallax.Root>
      <div className={styles.overlay}>
        <Header />
      </div>
      <Parallax.Layer />
      <Parallax.Content>
        <Banner />
        <Container as="main" className={styles.container}>
          <Theme />
          <Access />
        </Container>
        <Footer />
      </Parallax.Content>
    </Parallax.Root>
  );
}
