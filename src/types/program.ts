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
  where: string | null;
  /** ロゴ画像のパス */
  logo: string;
  /** タグの配列 */
  tags: string[];
  /** 注意事項の配列。 */
  caution: string[];
};
