// faq-list.tsx
import styles from "./faq-list.module.css";
import faqData from "./faq.json";
import { FaqView } from "../faq-view";
import { Text } from "@/components/ui/text";

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
      <Text>{section.id}</Text>
      <FaqView qa={section.qa} />
    </div>
  );
}
