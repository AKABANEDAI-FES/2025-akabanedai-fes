export const tags = [
  "実習団体&研究室",
  "体験あり",
  "展示",
  "遊び",
  "物品販売",
  "飲食",
  "ステージ 企画",
] as const;

export const cautions = [
  "時間がかかる可能性があります。",
  "年齢制限があります。",
  "服が濡れたり汚れたりする可能性があります。",
  "模擬店で提供する食品のアレルギー成分表示はこちら",
] as const;

export const where = ["INIAD", "HELSPO", "屋外", "WELLB"] as const;

export type Tag = (typeof tags)[number];

export type Caution = (typeof cautions)[number];

export type Where = (typeof where)[number];

export type Program = {
  /** 企画名 */
  title: string;
  /** 正式企画名 */
  officialTitle: string;
  /** 団体名 */
  organization: string;
  /** 紹介文 */
  description: string;
  /** 教室 */
  placement: string;
  /** 企画コンテスト */
  contest: number | null;
  /** 棟 */
  where: Where | null;
  /** ロゴ画像のパス */
  logo: string;
  /** タグの配列 */
  tags: Tag[];
  /** 注意事項の配列。 */
  cautions: Caution[];

  isEating?: boolean;
};
