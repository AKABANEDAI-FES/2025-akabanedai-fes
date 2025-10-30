import Star from "@/assets/star.svg";
import { Text } from "@/components/ui/text";
import { FaqView } from "../faq-view";
import faqData from "./faq.json";
import styles from "./faq-list.module.css";

interface FaqListProps {
  qa_id: string;
}

export function FaqList({ qa_id }: FaqListProps) {
  const section = faqData.faq.find((section) => section.id === qa_id);

  if (!section) {
    return <p>該当するFAQが見つかりません。</p>;
  }

  return (
    <div className={styles.faqList}>
      <div className={styles.sectionHeader}>
        <Star className={styles.blackStarIcon} />
        <Text className={styles.sectionName}>{section.id}</Text>
      </div>
      <FaqView qa={section.qa} />
    </div>
  );
}
