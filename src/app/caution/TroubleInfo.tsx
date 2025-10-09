import React from 'react';
import styles from './troubleinfo.module.css'; 
import { Container } from "@/components/ui/container";

const TroubleInfo: React.FC = () => {
  return (
    <section id="trouble-info" className={styles.troubleSection}>
      <Container>
        <h2 className={styles.sectionTitle}>困ったことがあったら</h2>
      </Container>
      <Container>
      <div className={styles.contentBox}>
        <p className={styles.mainMessage}>
          困ったときはインフォメーションセンターへ！
        </p>
        <div className={styles.center}>
            <p className={styles.description}>
            インフォメーションセンターは迷子や落し物、その他わからないことがあった時などのためにある相談所です。
            </p>
            <div className={styles.troubleExamples}>
                <p>
                    イベントの開催場所がわからない<br />
                    持ち物を無くしてしまった・・・<br />
                    など様々なトラブルに対応します。
                </p>
            </div>
            <p className={styles.contactInfo}>
            お困りの際は周囲のインフォメーションセンターにお声がけください。<br />
            また、会場内をスタッフが巡回しています。ジャンパーを着用したスタッフにお気軽にお声がけください。
            </p>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default TroubleInfo;
