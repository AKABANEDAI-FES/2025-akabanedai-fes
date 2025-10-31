import { Fragment } from "react";
import Star from "@/assets/star.svg";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import faqData from "../faq-list/faq.json";
import styles from "./table-of-contents.module.css";

export function TableOfContents() {
  return (
    <div className={styles.tocContainer}>
      <Heading as="h2" variant="secondary" className={styles.tocHeading}>
        <Text className={styles.tocName}>目次</Text>
      </Heading>
      <Divider />
      <ul className={styles.tocList}>
        {faqData.faq.map((section, index) => (
          <Fragment key={section.id}>
            <li className={styles.listItems}>
              <Star className={styles.blackStarIcon} />
              <a href={`#${section.id}`} className={styles.tocLink}>
                <Text>{section.id}</Text>
              </a>
            </li>
            {index < faqData.faq.length - 1 && <Divider aria-hidden />}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
