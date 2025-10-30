import Link from "next/link";
import InstagramBrandIcon from "@/assets/instagram-brand.svg";
import XBrandIcon from "@/assets/x-brand.svg";
import { sponsorshipData } from "@/sponsorship";
import { Heading } from "../ui/heading";
import { Text, text } from "../ui/text";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Heading as="h5">協賛企業様</Heading>
      <Text className={styles.sponsors}>
        {sponsorshipData.ad.map(({ sponsor }, i) => (
          <span className={styles.sponsor} key={sponsor}>
            {sponsor}
            {i < sponsorshipData.ad.length - 1 ? " / " : ""}
          </span>
        ))}
      </Text>
      <div className={styles.contact}>
        <Text className={styles.email}>
          <span>お問い合わせ先</span>
          <span>support[at]akabanedai-fes.com</span>
        </Text>
        <div className={styles.sns}>
          <a
            className={text()}
            href="https://x.com/akabanedaifes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XBrandIcon className={styles.icon} />
          </a>
          <a
            className={text()}
            href="https://www.instagram.com/akabanedaifes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramBrandIcon className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.privacy}>
        <Link className={text()} href="/privacy-policy">
          プライバシーポリシー
        </Link>
      </div>
      <Text>&copy;2025 東洋大学赤羽台祭実行委員会</Text>
    </footer>
  );
}
