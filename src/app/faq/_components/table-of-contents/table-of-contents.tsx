import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import styles from "./table-of-contents.module.css";
import Star from "@/assets/star.svg";

export function TableOfContents() {
  return (
    <div className={styles.tocContainer}>
      <h2><Text className={styles.tocName}>目次</Text></h2>
      <Divider />
      <ul className={styles.tocList}>
        <li className={styles.listItems}>
          <Star className={styles.blackStarIcon} />
          <a href="#赤羽台祭について" className={styles.tocLink}>
            <Text>赤羽台祭について</Text>
          </a>
        </li>
        <Divider />
        <li className={styles.listItems}>
          <Star className={styles.blackStarIcon} />
          <a href="#施設について" className={styles.tocLink}>
            <Text>施設について</Text>
          </a>
        </li>
        <Divider />
        <li className={styles.listItems}>
          <Star className={styles.blackStarIcon} />
          <a href="#ご案内・その他" className={styles.tocLink}>
            <Text>ご案内・その他</Text>
          </a>
        </li>
      </ul>
    </div>
  );
}
