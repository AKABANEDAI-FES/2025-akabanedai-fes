import { Accordion } from "@ark-ui/react";
import Chevron from "@/assets/chevron.svg";
import { Divider } from "@/components/ui/divider";
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
    <Accordion.Root multiple>
      {qa.map((item, index) => (
        <Accordion.Item
          key={item.q}
          value={`faq-${index}`}
          className={styles.faqItem}
        >
          <Accordion.ItemTrigger className={styles.question}>
            <div className={styles.questionText}>
              <Text>Q.</Text>
              <Text>{item.q}</Text>
            </div>

            {/* 矢印 */}
            <Accordion.ItemIndicator className={styles.arrow} asChild>
              <Chevron />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Divider />
            <div className={styles.answer}>
              <Text>A.</Text>
              <Text>{item.a}</Text>
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
