import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import CampusNotice from "./campus-notice";
import EntryNotice from "./entry-notice";
import CautionIcon from "./icon-caution.svg";
import LineDivider from "./line-divider.svg";
import styles from "./page.module.css";
import TroubleInfo from "./trouble-information";

export const metadata: Metadata = {
  title: "ご来場の際の注意点",
};

export default function CautionPage() {
  return (
    <main className={styles.mainContent}>
      <Heading as="h1" className={styles.mainTitle}>
        <CautionIcon aria-hidden="true" />
        ご来場の際の注意点
      </Heading>

      <div className={styles.dividerWrapper}>
        <LineDivider className={styles.lineDivider} />
      </div>

      <Container as="div">
        <div className={styles.noticeSectionsWrapper}>
          <EntryNotice />
          <CampusNotice />
        </div>
        <TroubleInfo />
      </Container>
    </main>
  );
}
