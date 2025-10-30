"use client";

import { useState } from "react";
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
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (openIndexes.includes(index)) {
      // すでに開いている → 閉じる
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // 閉じている → 開く
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div>
      {qa.map((item, index) => (
        <div key={item.q} className={styles.faqItem}>
          <button
            type="button"
            className={styles.question}
            onClick={() => toggle(index)}
            aria-expanded={openIndexes.includes(index)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.questionText}>
              <Text>Q.</Text>
              <Text>{item.q}</Text>
            </div>

            {/* 矢印 */}
            <span
              className={`${styles.arrow} ${openIndexes.includes(index) ? styles.arrowOpen : ""}`}
            />
          </button>

          {/* Aを表示 */}
          {openIndexes.includes(index) && (
            <div>
              <Divider className={styles.divider} />
              <div className={styles.answer}>
                <Text>A.</Text>
                <Text>{item.a}</Text>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
