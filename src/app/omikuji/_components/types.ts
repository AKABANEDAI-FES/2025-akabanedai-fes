export type FortuneType = '大吉' | '中吉' | '小吉' | '吉' | '末吉' | '凶';

export interface Fortune {
  title: FortuneType;
  message: string;
}
