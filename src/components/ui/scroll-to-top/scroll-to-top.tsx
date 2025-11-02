"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Chevron from "@/assets/chevron.svg";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import styles from "./scroll-to-top.module.css";

/**
 * スクロール位置がページトップ以外の時に、ページトップへ戻るボタンのCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントにスクロール位置がページトップ以外の時にページトップへ戻るボタンのスタイルを適用
 * <button className={scrollToTop()}>トップへ戻る</button>
 * @returns スクロール位置がページトップ以外の時にページトップへ戻るボタン用のCSSクラス名
 */
export function scrollToTop() {
  return styles.scrollToTop;
}

/**
 * スクロール位置がページトップ以外の時にページトップへ戻るボタン
 *
 * @description
 * 画面右下に固定表示される円形のボタン。ページをスクロールするとボタンが表示され、
 * クリックするとスムーズにページトップへ戻る。
 *
 * @example
 * // 基本的な使用方法（layout.txzxで一度だけ使用）
 * <ScrollToTop />
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // スクロール位置に基づいてボタンの表示非表示を切り替え
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ページトップへスムーズにスクロール
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(scrollToTop(), { [styles.visible]: isVisible })}
      aria-label="ページトップへ戻る"
    >
      <Chevron aria-hidden="true" />
      <VisuallyHidden>ページトップへ戻る</VisuallyHidden>
    </button>
  );
}
