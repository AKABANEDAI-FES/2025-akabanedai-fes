import type { Metadata } from "next";
import { Sponsorship } from "@/app/sponsorship/_components";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { sponsorshipData } from "@/sponsorship";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "協賛",
};

export default function SponsorshipPage() {
  return (
    <Container as="main" className={styles.mainContainer}>
      <StarDecoration>
        <Heading as="h1" className={styles.headLine}>
          協賛企業様一覧
        </Heading>
      </StarDecoration>
      <BlurredBox as="section" className={styles.section}>
        <Heading as="h2" className={styles.wordSpaced}>
          広告協賛いただいた企業様
        </Heading>
        <Text>(順不同・敬称略)</Text>
        <div className={styles.sponsorshipWrapper}>
          <div className={styles.sponsorshipGrid}>
            {sponsorshipData.ad.map(({ sponsor, logoPath, url }) => (
              <Sponsorship
                key={sponsor}
                sponsor={sponsor}
                logoPath={logoPath}
                url={url}
              />
            ))}
          </div>
        </div>
        <Heading as="h2">物品協賛いただいた企業様</Heading>
        <Text>(順不同・敬称略)</Text>
        <div className={styles.sponsorshipWrapper}>
          <div className={styles.sponsorshipGrid}>
            {sponsorshipData.product.map(({ sponsor, logoPath, url }) => (
              <Sponsorship
                key={sponsor}
                sponsor={sponsor}
                logoPath={logoPath}
                url={url}
              />
            ))}
          </div>
        </div>
      </BlurredBox>
    </Container>
  );
}
