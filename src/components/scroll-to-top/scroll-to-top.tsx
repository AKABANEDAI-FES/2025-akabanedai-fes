"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { visuallyHidden } from "@/components/ui/visually-hidden";
import inya from "./inya.webp";
import styles from "./scroll-to-top.module.css";

type Props = {
  rootSelector?: string;
};

export function ScrollToTop({ rootSelector }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const rootElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootElementRef.current = rootSelector
      ? document.querySelector(rootSelector)
      : document.documentElement;
  }, [rootSelector]);

  useEffect(() => {
    const root = rootElementRef.current;
    if (!root) return;

    const trigger = document.createElement("div");
    trigger.className = clsx(visuallyHidden(), styles.trigger);
    trigger.setAttribute("aria-hidden", "true");
    root.appendChild(trigger);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
      trigger.remove();
    };
  }, []);

  const handleClick = () => {
    const root = rootElementRef.current;

    if (root) {
      root.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.scrollToTop}
      data-visible={isVisible ? "true" : "false"}
    >
      <Image src={inya} alt="ページトップへ戻る" />
    </button>
  );
}
