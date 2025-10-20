'use client';

import { useState } from 'react';
import type { FortuneType } from '../types';
import { getRandomFortune, FORTUNES } from '../fortunes';
import styles from './omikuji-card.module.css';

export function OmikujiCard() {
  const [fortune, setFortune] = useState<FortuneType | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setFortune(null);

    // Animate for 500ms before showing result
    setTimeout(() => {
      setFortune(getRandomFortune());
      setIsAnimating(false);
    }, 500);
  };

  const fortuneData = fortune ? FORTUNES[fortune] : null;

  return (
    <div className={styles.cardWrapper}>
      <button
        className={`${styles.card} ${isAnimating ? styles.cardAnimating : ''} ${fortune ? styles.cardRevealed : ''}`}
        onClick={handleClick}
        aria-label="おみくじを引く"
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <span className={styles.cardText}>おみくじ</span>
          </div>

          {fortuneData && (
            <div className={styles.cardBack}>
              <div className={styles.fortuneContent}>
                <p className={styles.fortuneTitle}>{fortuneData.title}</p>
                <p className={styles.fortuneMessage}>{fortuneData.message}</p>
              </div>
            </div>
          )}
        </div>
      </button>

      {fortune && (
        <div className={styles.resetPrompt}>
          <p>もう一度引きますか？クリックしてください</p>
        </div>
      )}
    </div>
  );
}
