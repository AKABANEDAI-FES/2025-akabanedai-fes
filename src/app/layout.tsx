import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import { MobileMenu } from "@/components/header/mobile-menu";
import { Parallax } from "./_components/parallax";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 赤羽台祭",
    default: "赤羽台祭",
  },
  description:
    "東洋大学赤羽台キャンパス大学祭「赤羽台祭」は、2025/11/02(土), 03(日)に開催！",
  twitter: {
    site: "@akabanedaifes",
    card: "summary_large_image",
  },
  robots: process.env.ROBOTS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
        <MobileMenu />
        <Parallax.Root className={styles.parallax}>
          <div className={styles.overlay}>
            <Header className={styles.header} />
          </div>
          <Parallax.Layer className={styles.layer} />
          <Parallax.Content className={styles.content}>
            <div>{children}</div>
            <Footer />
          </Parallax.Content>
        </Parallax.Root>
      </body>
    </html>
  );
}
