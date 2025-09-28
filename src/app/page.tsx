import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/header/mobile-menu";
import { Container } from "@/components/ui/container";
import { Access } from "./_components/access";
import { Banner } from "./_components/banner";
import { Parallax } from "./_components/parallax";
import { Theme } from "./_components/theme";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <MobileMenu />
      <Parallax.Root className={styles.parallax}>
        <div className={styles.overlay}>
          <Header className={styles.header} />
        </div>
        <Parallax.Layer className={styles.layer} />
        <Parallax.Content className={styles.content}>
          <Banner />
          <Container as="main" className={styles.container}>
            <Theme />
            <Access />
          </Container>
          <Footer />
        </Parallax.Content>
      </Parallax.Root>
    </>
  );
}
