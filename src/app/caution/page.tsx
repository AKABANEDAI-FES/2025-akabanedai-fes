import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import CampusNotice from "./campus-notice";
import EntryNotice from "./entry-notice";
import CautionIcon from "./icon-caution.svg?react";
import LineDivider from "./line-divider.svg?react";
import styles from "./page.module.css";
import TroubleInfo from "./trouble-information";

export const metadata: Metadata = {
  title: "ご来場の際の注意点",
  description: "赤羽台祭2025へのご来場時の注意事項",
};

const CautionPage: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        <Container>
          <div className={styles.mainTitle}>
            <span className={styles.icon}>
              <CautionIcon aria-hidden="true" />
            </span>
            <Heading as="h1">
              <Text className={styles.text}>ご来場の際の注意点</Text>
            </Heading>
          </div>
        </Container>

        <div className={styles.dividerWrapper}>
          <LineDivider className={styles.lineDivider} />
        </div>

        <Container>
          <div className={styles.noticeSectionsWrapper}>
            <EntryNotice />
            <CampusNotice />
          </div>
          <div className={styles.troubleinfo}>
            <TroubleInfo />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CautionPage;
