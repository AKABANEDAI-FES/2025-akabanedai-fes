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
          <Text className={styles.mainMessage}>
            困ったときはインフォメーションセンターへ！
          </Text>
          <Text className={styles.description}>
            インフォメーションセンターは迷子や落し物、その他わからないことがあった時などのためにある相談所です。
          </Text>
          <Text className={styles.troubleExamples}>
            イベントの開催場所がわからない
            <br />
            持ち物を無くしてしまった・・・
            <br />
            など様々なトラブルに対応します。
          </Text>
          <Text className={styles.contactInfo}>
            お困りの際は周囲のインフォメーションセンターにお声がけください。
            <br />
            また、会場内をスタッフが巡回しています。ジャンパーを着用したスタッフにお気軽にお声がけください。
          </Text>
        </div>
      </Container>
    </BlurredBox>
  );
};

export default TroubleInfo;
