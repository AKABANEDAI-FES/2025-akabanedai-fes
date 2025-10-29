import styles from "./table-of-contents.module.css";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

export function TableOfContents() {
  return (
    <div className={styles.tocContainer}>
      <h2>目次</h2>
      <Divider />
      <ul className={styles.tocList}>
        <li><a href="#赤羽台祭について"><Text>赤羽台祭について</Text></a></li>
        <Divider />
        <li><a href="#施設について"><Text>施設について</Text></a></li>
        <Divider />
        <li><a href="#ご案内・その他"><Text>ご案内・その他</Text></a></li>
      </ul>
    </div>
  );
}
