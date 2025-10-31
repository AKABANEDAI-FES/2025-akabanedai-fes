import Star from "@/assets/star.svg";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import styles from "./table-of-contents.module.css";

export function TableOfContents() {
  return (
    <div className={styles.tocContainer}>
      <Heading as="h2" variant="secondary" className={styles.tocHeading}>
        <Text className={styles.tocName}>目次</Text>
      </Heading>
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
