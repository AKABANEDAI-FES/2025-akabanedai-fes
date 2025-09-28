import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
