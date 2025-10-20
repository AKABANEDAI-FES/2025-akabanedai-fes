import type { Fortune, FortuneType } from './types';

export const FORTUNES: Record<FortuneType, Fortune> = {
  大吉: {
    title: '大吉',
    message: '最高の運気。何をしても上手くいく時期です。新しいことへの挑戦も吉。',
  },
  中吉: {
    title: '中吉',
    message: '良い運気。目標達成が期待できます。計画的に行動しましょう。',
  },
  小吉: {
    title: '小吉',
    message: 'まあまあの運気。コツコツと努力が大切です。焦らずに進めてください。',
  },
  吉: {
    title: '吉',
    message: '良好な運気。進めていることは成功しやすいです。自信を持って進みましょう。',
  },
  末吉: {
    title: '末吉',
    message: '普通の運気。焦らず対応することが大事です。じっくり構える時期です。',
  },
  凶: {
    title: '凶',
    message: '注意が必要。慎重に行動することをお勧めします。まずは準備を整えましょう。',
  },
};

const FORTUNE_KEYS = Object.keys(FORTUNES) as FortuneType[];

/**
 * Random fortune type を取得します
 * @returns Random fortune type
 */
export function getRandomFortune(): FortuneType {
  return FORTUNE_KEYS[Math.floor(Math.random() * FORTUNE_KEYS.length)]!;
}
