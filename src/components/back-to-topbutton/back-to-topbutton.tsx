'use client';

import { useState, useEffect, useCallback } from 'react';
// CSSモジュールをインポート
// ファイル名に合わせています
import styles from './back-to-topbutton.module.css';

// 💡 修正: すべてのロジックをこのエクスポート関数に統合します
export function BackToTopButton({ scrollThreshold = 300 }: { scrollThreshold?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  // スムーズスクロールでトップへ移動
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // スクロール位置の監視
  const handleScroll = useCallback(() => {
    // scrollThreshold propを使用
    setIsVisible(window.scrollY > scrollThreshold);
  }, [scrollThreshold]);

  // イベントリスナーの設定と解除
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期状態をチェック

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    // 💡 修正: ロジックが適用されたボタンのJSXを直接返します
    <button
      onClick={scrollToTop}
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="ページトップへ戻る"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
          <title>上向き矢印</title>
          <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      Top
    </button>
  );
}
