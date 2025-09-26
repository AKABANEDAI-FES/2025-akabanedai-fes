"use client";

import { type RefCallback, useCallback } from "react";
import Star from "@/assets/star.svg";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import styles from "./theme.module.css";

export function Theme() {
  const refCallback = useCallback<RefCallback<HTMLSpanElement>>((node) => {
    const delayStr = node?.getAttribute("data-reveal-delay");
    const delay = delayStr ? Number.parseInt(delayStr, 10) : 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            node?.setAttribute("data-visible", "true");
          }, delay);
          node && observer.unobserve(node);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-30% 0px -30% 0px",
      },
    );
    if (node) {
      observer.observe(node);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.theme}>
      <div className={styles.header}>
        <Star className={styles.star} />
        <Divider className={styles.divider} />
        <Heading as="h2">今年のテーマ</Heading>
        <Divider className={styles.divider} />
        <Star className={styles.star} />
      </div>
      <div className={styles.title}>
        <Star className={styles.star} />
        <Divider className={styles.divider} />
        <p>「LINK」</p>
        <Divider className={styles.divider} />
        <Star className={styles.star} />
      </div>
      <p className={styles.description}>
        この大学祭が「
        <span
          className={styles.highlight}
          ref={refCallback}
          data-reveal-delay="0"
        >
          あなた
        </span>
        」と「
        <span
          className={styles.highlight}
          ref={refCallback}
          data-reveal-delay="1000"
        >
          なにか
        </span>
        」をつなぐ
        <br />
        きっかけになりますように
      </p>
    </section>
  );
}
