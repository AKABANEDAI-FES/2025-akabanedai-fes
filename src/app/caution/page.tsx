import React from 'react';
import type { Metadata } from 'next';
import EntryNotice from './EntryNotice';
import CampusNotice from './CampusNotice';
import TroubleInfo from './TroubleInfo';
import styles from './page.module.css';
import CautionIcon from './icon-caution.svg';
import LineDivider from './line-divider.svg'; 
import { Container } from "@/components/ui/container";


export const metadata: Metadata = { /* ... */ };

const CautionPage: React.FC = () => {
    return (
      <div className={styles.appContainer}>

          <div className={styles.parallaxContentWrapper}>
            <main className={styles.mainContent}>

              <Container>
                <div className={styles.mainTitle}>
                  <span className={styles.icon}>
                    <CautionIcon />
                  </span>
                  <span className={styles.text}>
                    ご来場の際の注意事項
                  </span>
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

              <TroubleInfo />
              </Container>
              <span className={styles.footer}>
      
              </span>
              
            </main>
          </div>      
    </div>
  );
};

export default CautionPage;