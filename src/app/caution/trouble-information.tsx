import type React from "react";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import styles from "./trouble-information.module.css";

const TroubleInfo: React.FC = () => {
  return (
    <BlurredBox id="trouble-info" className={styles.troubleSection}>
      <Container>
        <Heading as="h2" className={styles.sectionTitle}>
          困ったことがあったら
        </Heading>
      </Container>
      <Container>
        <div className={styles.contentBox}>
          <div className={styles.mainMessage}>
            <Text>困ったときはインフォメーションセンターへ！</Text>
          </div>
          <div className={styles.description}>
            <Text>
              インフォメーションセンターは迷子や落し物、その他わからないことがあった時などのためにある相談所です。
            </Text>
          </div>
          <div className={styles.troubleExamples}>
            <Text>
              イベントの開催場所がわからない
              <br />
              持ち物を無くしてしまった・・・
              <br />
              など様々なトラブルに対応します。
            </Text>
          </div>
          <div className={styles.contactInfo}>
            <Text>
              お困りの際は周囲のインフォメーションセンターにお声がけください。
              <br />
              また、会場内をスタッフが巡回しています。ジャンパーを着用したスタッフにお気軽にお声がけください。
            </Text>
          </div>
        </div>
      </Container>
    </BlurredBox>
  );
};

export default TroubleInfo;
