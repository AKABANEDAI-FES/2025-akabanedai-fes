import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
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
      <Heading as="h2" variant="primary">
        プライバシーポリシー
      </Heading>
      <Heading as="h2" variant="secondary">
        Google Analyticsの利用
      </Heading>
      <h3>アクセスログの取り扱いについて</h3>
      <Text>
        赤羽台祭の公式ウェブサイト( http://akabanedai-fes.com/
        で始まるページ。以下「当サイト」といいます。)では、当サイトの利用者動向の調査及び運用改善に役立てるためにGoogle
        Analyticsを利用しております。
        <br />
        Google
        Analyticsではクッキー（cookie）を使用し、個人を特定する情報を含まずにアクセスログを収集します。なお、アクセスログの収集方法及び利用方法については、Google
        Analyticsサービス利用規約およびGoogleプライバシーポリシーによって定められています。
      </Text>
      <Text>
        <a
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analyticsサービス利用規約 (リンク)
        </a>
      </Text>
      <Text>
        <a
          href="https://policies.google.com/privacy?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          Googleプライバシーポリシー (リンク)
        </a>
      </Text>
      <Text>
        なお、Google
        Analyticsのサービス利用による損害については、赤羽台祭実行委員会は責任を負わないものとします。
        Google
        Analyticsによる情報収集を停止する場合には、Googleが提供するブラウザのアドオン（ブラウザに機能を追加するプログラム）をご利用ください。アドオンのダウンロードは以下のページをご覧ください。
      </Text>
      <Text>
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics オプトアウト アドオン (リンク)
        </a>
      </Text>
    </Container>
  );
}
