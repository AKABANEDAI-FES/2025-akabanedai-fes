type Navigation = {
  label: string;
  items: {
    label: string;
    href?: string;
    external?: boolean;
  }[];
};

export const navigation: Navigation[] = [
  {
    label: "企画情報",
    items: [
      { label: "タイムテーブル", href: "/timetable" },
      { label: "企画一覧", href: "/programs" },
      { label: "企画マップ", href: "/programmap" },
    ],
  },
  {
    label: "赤羽台祭について",
    items: [
      { label: "開催概要", href: "/overview" },
      { label: "今年度の赤羽台祭について" },
      { label: "協賛", href: "/sponsorship" },
    ],
  },
  {
    label: "公式コンテンツ",
    items: [
      { label: "マスコットキャラクター" },
      { label: "パンフレット", href: "/9thpamphlet.pdf", external: true },
      { label: "公式グッズ" },
      { label: "マップ", href: "/campusmap" },
    ],
  },
  {
    label: "ご来場の皆様へ",
    items: [
      { label: "アクセス", href: "/access" },
      { label: "ご来場の際の注意点", href: "/caution" },
      { label: "よくあるご質問", href: "/faq" },
    ],
  },
];
