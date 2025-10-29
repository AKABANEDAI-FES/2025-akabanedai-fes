import { Text } from "@/components/ui/text";
import styles from "./faq-view.module.css";

interface QA {
  q: string;
  a: string;
}

interface FaqViewProps {
  qa: QA[];
}

export function FaqView({ qa }: FaqViewProps) {
  return (
    <div>
      {qa.map((item) => (
        <div key={item.q} className={styles.faqItem}>
          <div className={styles.question}>
            Q:<Text>{item.q}</Text>
          </div>
          <div className={styles.answer}>
            A:<Text>{item.a}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}
