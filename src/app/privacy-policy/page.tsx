import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, text} from "@/components/ui/text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  openGraph: {
    title: "プライバシーポリシー",
  },
};

export default function Page() {
  return (
    <Container className={styles.privacyPolicy}>
      <Heading as="h1" variant="primary">
        プライバシーポリシー
      </Heading>
      <Heading as="h2" variant="secondary">
        Google Analyticsの利用
      </Heading>
      <Text>アクセスログの取り扱いについて</Text>
      <Text>
        赤羽台祭の公式ウェブサイト( http://akabanedai-fes.com/
        で始まるページ。以下「当サイト」といいます。)では、当サイトの利用者動向の調査及び運用改善に役立てるためにGoogle
        Analyticsを利用しております。
        <br />
        Google
        Analyticsではクッキー（cookie）を使用し、個人を特定する情報を含まずにアクセスログを収集します。なお、アクセスログの収集方法及び利用方法については、Google
        Analyticsサービス利用規約およびGoogleプライバシーポリシーによって定められています。
      </Text>
      <div className={text()}>
        <a
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.anchorLink}
        >
          Google Analyticsサービス利用規約 (リンク)
        </a>
        <a
          href="https://policies.google.com/privacy?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.anchorLink}
        >
          Googleプライバシーポリシー (リンク)
        </a>
      </div>
      <Text>
        なお、Google
        Analyticsのサービス利用による損害については、赤羽台祭実行委員会は責任を負わないものとします。
        Google
        Analyticsによる情報収集を停止する場合には、Googleが提供するブラウザのアドオン（ブラウザに機能を追加するプログラム）をご利用ください。アドオンのダウンロードは以下のページをご覧ください。
      </Text>
      <div className={text()}>
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.anchorLink}
        >
          Google Analytics オプトアウト アドオン (リンク)
        </a>
      </div>
    </Container>
  );
}
