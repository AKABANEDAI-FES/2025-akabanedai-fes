import InstagramBrandIcon from "@/assets/instagram-brand.svg";
import XBrandIcon from "@/assets/x-brand.svg";
import { Text, text } from "../ui/text";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
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
        <div className={styles.privacy}>
          <a className={text()} href="/privacy-policy">
            プライバシーポリシー
          </a>
        </div>
      </div>
      <Text>&copy;2025 東洋大学赤羽台祭実行委員会</Text>
    </footer>
  );
}
