import type { Metadata } from "next";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import CautionIcon from "./icon-caution.svg";
import LineDivider from "./line-divider.svg";
import styles from "./page.module.css";

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
      <LineDivider className={styles.lineDivider} />
      <Container className={styles.container}>
        <BlurredBox as="section" className={styles.section}>
          <Heading as="h2" variant="secondary" className={styles.sectionTitle}>
            入退場について
          </Heading>
          <ul className={styles.list}>
            <Text as="li">事前予約やチケットは不要です。</Text>
            <Text as="li">
              入場料は無料です。（※一部体験や飲食出店は有料です。）
            </Text>
            <Text as="li">
              駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
            </Text>
            <Text>※公共交通機関はアクセスのページをご確認ください。</Text>
          </ul>
        </BlurredBox>
        <BlurredBox as="section" className={styles.section}>
          <Heading as="h2" variant="secondary" className={styles.sectionTitle}>
            キャンパス内での注意事項
          </Heading>
          <ul className={styles.list}>
            <Text as="li">火気の使用はご遠慮ください。</Text>
            <Text as="li">キャンパス内は全面禁煙となっております。</Text>
            <Text as="li">
              指定場所以外で飲食物をすることはできません。飲食可能な場所についてはパンフレットをご確認ください。
            </Text>
            <Text as="li">構内の機材や設備の撮影はおやめください。</Text>
            <Text as="li">
              事故防止のため、構内の機材にはお手を触れないようにお願いいたします。
            </Text>
            <Text as="li">
              重要なアナウンスが流れる場合がございます。構内放送にご留意ください。
            </Text>
            <Text as="li">
              他のお客様への迷惑行為や、スタッフの指示に従わない等の行為が見受けられた場合、ご退場頂いたり、入場をお断りする場合があります。
            </Text>

            <Text>
              ※本学では大学祭の様子を記録するため、写真/動画の撮影を行っています。
              ご来場の皆さまのお名前等個人が特定されないよう配慮した上で、広報媒体素材として使用させていただくことがあります。
            </Text>
          </ul>
        </BlurredBox>
        <BlurredBox as="section" className={styles.section}>
          <Heading as="h2" variant="secondary" className={styles.sectionTitle}>
            困ったことがあったら
          </Heading>
          <div className={styles.contentBox}>
            <Text>困ったときはインフォメーションセンターへ！</Text>
            <div className={styles.description}>
              <Text>
                インフォメーションセンターは迷子や落し物、その他わからないことがあった時などのためにある相談所です。
              </Text>
              <Text className={styles.troubleExamples}>
                イベントの開催場所がわからない
                <br />
                持ち物を無くしてしまった・・・
                <br />
                など様々なトラブルに対応します。
              </Text>
              <Text>
                お困りの際はインフォメーションセンターにお気軽においでください。
                <br />
                また、会場内をスタッフが巡回しています。ジャンパーを着用したスタッフにお気軽にお声がけください。
              </Text>
            </div>
          </div>
        </BlurredBox>
      </Container>
    </main>
  );
}
