import Star from "@/assets/star.svg";
import { Text } from "@/components/ui/text";
import { FaqView } from "../faq-view";
import faqData from "./faq.json";
import styles from "./faq-list.module.css";

interface FaqListProps {
  qaId: string;
}

export function FaqList({ qaId }: FaqListProps) {
  const section = faqData.faq.find((section) => section.id === qaId);

  if (!section) {
    return (
      <div>
        <Text>該当するFAQが見つかりません。</Text>
      </div>
    );
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
