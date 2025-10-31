import type { Metadata } from "next";
import Image from "next/image";
import InfomationCenter from "@/assets/InfomationCenter.png";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import { FaqList } from "./_components/faq-list";
import { TableOfContents } from "./_components/table-of-contents";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQ - よくあるご質問",
};

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
        <div id="赤羽台祭について">
          <FaqList qa_id="赤羽台祭について" />
        </div>
        <div id="施設について">
          <FaqList qa_id="施設について" />
        </div>
        <div id="ご案内・その他">
          <FaqList qa_id="ご案内・その他" />
        </div>
      </Container>

      <Container className={styles.infomationCenterContainer}>
        <Text>インフォメーションセンターはこちら↓</Text>
        <Image
          src={InfomationCenter}
          alt="インフォメーションセンターはINIAD中庭にございます"
          className={styles.mapImage}
        />
      </Container>
    </Container>
  );
}
