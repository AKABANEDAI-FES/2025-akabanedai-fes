import Image from "next/image";
import informationCenter from "@/assets/information-center.png";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { createMetadata } from "@/utils/seo";
import { FaqList } from "./_components/faq-list";
import faqData from "./_components/faq-list/faq.json";
import { TableOfContents } from "./_components/table-of-contents";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "FAQ - よくあるご質問",
});

export default function FaqPage() {
  return (
    <Container as="main" className={styles.pageContainer}>
      <StarDecoration>
        <Heading as="h1">よくあるご質問</Heading>
      </StarDecoration>
      <Container as="section" className={styles.tocSection}>
        <TableOfContents />
      </Container>
      <Container as="section" className={styles.faqSection}>
        {faqData.faq.map((section) => (
          <div key={section.id} id={section.id}>
            <FaqList qaId={section.id} />
          </div>
        ))}
      </Container>

      <Container className={styles.informationCenterContainer}>
        <Text>インフォメーションセンターはこちら↓</Text>
        <Image
          src={informationCenter}
          alt="インフォメーションセンターはINIAD中庭にございます"
          className={styles.mapImage}
        />
      </Container>
    </Container>
  );
}
