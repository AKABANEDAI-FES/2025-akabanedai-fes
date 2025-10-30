type Navigation = {
  label: string;
  items: {
    label: string;
    href?: string;
  }[];
};

export const navigation: Navigation[] = [
  {
    label: "企画情報",
    items: [
      { label: "タイムテーブル" },
      { label: "企画一覧" },
      { label: "企画マップ" },
    ],
  },
  {
    label: "赤羽台祭について",
    items: [
      { label: "開催概要", href: "/overview" },
      { label: "今年度の赤羽台祭について" },
      { label: "協賛" },
    ],
  },
  {
    label: "公式コンテンツ",
    items: [
      { label: "マスコットキャラクター" },
      { label: "パンフレット" },
      { label: "公式グッズ" },
      { label: "マップ", href: "/campusmap" },
    ],
  },
  {
    label: "ご来場の皆様へ",
    items: [
      { label: "アクセス", href: "/access" },
      { label: "ご来場の際の注意点", href: "/caution" },
      { label: "よくあるご質問" },
    ],
  },
];
