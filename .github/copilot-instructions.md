このドキュメントは、2025年赤羽台祭Webサイトのコードレビュー・開発時のガイドラインをまとめたものです。

## コミュニケーション

- コードレビュー時は**日本語**で応答してください
- 技術的な説明は具体的かつ簡潔に記述してください

## 参照ドキュメント

コードレビュー・開発時は以下のドキュメントを参照してください:

- `/README.md` - プロジェクト概要、セットアップ、開発フロー、ガイドライン
- `/CLAUDE.local.md` - 詳細な技術仕様、アーキテクチャ、コンポーネント構造
- `/src/components/ui/UIComponents.mdx` - UIコンポーネントライブラリのドキュメント
- `/src/stories/tokens/DesignTokens.mdx` - デザイントークン一覧

---

## レビュー観点

### 1. ファイル命名規則

**必須ルール: kebab-case**

- ✅ 正しい: `my-component.tsx`, `banner-section.module.css`, `use-fetch.ts`
- ❌ 誤り: `MyComponent.tsx`, `BannerSection.module.css`, `UseFetch.ts`
- Biomeの`useFilenamingConvention`ルールで強制されています

### 2. CSS and Styling

#### CSS Modules

- **すべてのコンポーネントでCSS Modulesを使用すること**
- クラス名は**camelCase**で記述すること (Stylelintで強制)
- CSS Modulesファイル作成・変更後は`pnpm gen`を実行して型定義を生成すること
- CSS Layersは自動付与されるため、手動で`@layer`を追加しないこと

```css
/* ✅ 正しい (camelCase) */
.containerBox { }
.primaryButton { }

/* ❌ 誤り (kebab-case) */
.container-box { }
.primary-button { }
```

#### デザイントークン (CSS Variables)

**重要: ハードコードされた値は使用禁止** - 必ず`src/app/globals.css`のCSS変数を使用すること

**セマンティックトークンを優先的に使用:**

```css
/* ✅ 推奨: セマンティックトークン */
.component {
  color: var(--fg-default);
  background-color: var(--bg-default);
  border: 1px solid var(--border-default);
}

/* ⚠️ 可能だが非推奨: プリミティブトークン */
.component {
  color: var(--color-gray-8);
  background-color: var(--color-gray-1);
}

/* ❌ 禁止: ハードコード */
.component {
  color: #000;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
}
```

**カラートークンの2層構造:**

| カテゴリ | 使用推奨度 | 説明 | 例 |
| :--- | :--- | :--- | :--- |
| **セマンティック** | ✅ 優先 | 用途に応じた意味を持つトークン | `--fg-default`, `--bg-default`, `--theme-default`, `--accent-default` |
| **プリミティブ** | ⚠️ 直接使用は避ける | 基本カラーパレット | `--color-gray-1`～`--color-gray-8`, `--color-theme-1`～`--color-theme-8` |

**主要なトークンカテゴリ:**

```css
/* カラー (セマンティック) */
--fg-default, --fg-muted              /* テキスト色 */
--bg-default, --bg-muted, --bg-canvas /* 背景色 */
--theme-default, --theme-fg           /* テーマカラー (紺色) */
--accent-default, --accent-fg         /* アクセントカラー (黄色) */
--border-default, --border-muted      /* ボーダー色 */

/* スペーシング */
--space-xs   /* 8px */
--space-sm   /* 12px */
--space-md   /* 16px */
--space-lg   /* 24px */
--space-xl   /* 32px */
--space-2xl から --space-8xl

/* タイポグラフィ */
--font-size-xs   /* 12px */
--font-size-sm   /* 14px */
--font-size-md   /* 16px */
--font-size-lg から --font-size-8xl

--font-weight-thin から --font-weight-black

--line-heights-none      /* 1 */
--line-heights-tight     /* 1.25 */
--line-heights-normal    /* 1.5 */
--line-heights-relaxed   /* 1.75 */
--line-heights-loose     /* 2 */

/* その他 */
--radius-l1, --radius-l2, --radius-l3, --radius-full  /* 角丸 */
--shadow-xs, --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl  /* 影 */
--size-xs から --size-8xl, --size-full  /* 最大幅・コンテナサイズ */
```

#### レスポンシブデザイン

**必須: モバイルファーストアプローチ**

- デフォルトはモバイル向けスタイルを定義
- メディアクエリで大きい画面向けに追加
- **rem単位を使用すること** (px は使用禁止)

**主要ブレークポイント:**

```css
/* ✅ 正しい - モバイルファースト & rem単位 */
.container {
  /* モバイル (デフォルト) */
  padding: var(--space-md);
  font-size: var(--font-size-sm);
}

@media (width >= 48rem) {  /* 768px, タブレット以上 */
  .container {
    padding: var(--space-lg);
    font-size: var(--font-size-md);
  }
}

@media (width >= 64rem) {  /* 1024px, デスクトップ以上 */
  .container {
    padding: var(--space-xl);
    font-size: var(--font-size-lg);
  }
}

/* ❌ 誤り - デスクトップファースト */
.container {
  padding: var(--space-xl);
}

@media (width < 64rem) {
  .container {
    padding: var(--space-md);
  }
}

/* ❌ 誤り - px単位を使用 */
@media (width >= 768px) {
  .container {
    padding: 24px;
  }
}
```

**ブレークポイント一覧:**

- `48rem` (768px) - タブレット以上 ⭐️ 主要
- `64rem` (1024px) - デスクトップ以上 ⭐️ 主要
- `40rem` (640px) - 小型タブレット (必要な場合のみ)
- `80rem` (1280px) - 大型デスクトップ (必要な場合のみ)

### 3. Component Architecture

#### コンポーネント配置ルール

**配置場所は再利用性とスコープで決定:**

| カテゴリ | 配置場所 | 用途 | 判断基準 |
| :--- | :--- | :--- | :--- |
| **共有/再利用可能** | `src/components/` | 複数ページで使用されるサイト全体のコンポーネント | 他のページでも使う可能性がある |
| **ページ固有** | `src/app/{page}/_components/` | 特定のページでのみ使用されるコンポーネント | そのページでしか使わない |

```
✅ 正しい配置:
src/components/header/          # サイト全体で使用
src/components/footer/          # サイト全体で使用
src/components/ui/container/    # 複数ページで使用
src/app/_components/banner/     # ルートページ専用
src/app/_components/access/     # ルートページ専用
src/app/about/_components/greeting/  # aboutページ専用

❌ 誤った配置:
src/components/banner/          # 1ページでしか使わないのに共有ディレクトリに配置
src/app/_components/container/  # 複数ページで使うのにページ固有ディレクトリに配置
src/components/about-greeting/  # 特定ページ専用なのに共有ディレクトリに配置
```

#### コンポーネントファイル構造

**必須ファイル:**

```
component-name/
├── component-name.tsx           # コンポーネント実装 (必須)
├── component-name.module.css    # スタイル (必須)
├── index.ts                     # 再エクスポート (必須)
└── component-name.stories.tsx   # Storybookストーリー (ui/のみ)
```

**index.tsの記述例:**

```ts
// ✅ 正しい
export { Container, container } from './container';

// ❌ 誤り - デフォルトエクスポート
export { default } from './container';
```

#### コンポーネントパターン

**すべてのUIコンポーネントは2つの形式をエクスポート:**

1. **コンポーネント** - React コンポーネント (PascalCase, 例: `Container`)
2. **ヘルパー関数** - CSSクラス名を返す関数 (camelCase, 例: `container()`)

```tsx
// ✅ コンポーネントとして使用
import { Container } from '@/components/ui/container';

<Container as="main">
  <p>Content</p>
</Container>

// ✅ ヘルパー関数として使用 (カスタムコンポーネント内)
import { container } from '@/components/ui/container';
import { CustomBox } from './custom-box';

<CustomBox className={container()}>
  <p>Content</p>
</CustomBox>
```

**実装例:**

```tsx
// container.tsx
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import styles from './container.module.css';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? 'div';
  return <Component className={`${styles.container} ${className ?? ''}`} {...props} />;
}

export function container() {
  return styles.container;
}
```

#### Polymorphic Components

- `as` propをサポートすること (適切な場合)
- デフォルトの要素を明確に定義すること
- セマンティックHTMLを意識すること

```tsx
// ✅ 正しい - セマンティックHTML
<Container as="main">...</Container>
<Container as="section">...</Container>
<Heading as="h1">ページタイトル</Heading>
<Heading as="h2">セクション見出し</Heading>
<Text as="p">段落テキスト</Text>

// ❌ 誤り - div/spanの乱用
<div>...</div>
<div>ページタイトル</div>
<div>段落テキスト</div>
```

#### 既存UIコンポーネントの活用

**重要: 新しいコンポーネントを作成する前に、既存の8つのUIコンポーネントを確認すること**

| コンポーネント | 用途 | 主なプロパティ | インポート |
| :--- | :--- | :--- | :--- |
| `Container` | レイアウトコンテナ、最大幅制限 | `as` (デフォルト: `div`) | `@/components/ui/container` |
| `Heading` | 見出し (h1-h6) | `as` (必須), `variant` (`primary`\|`secondary`) | `@/components/ui/heading` |
| `Text` | 本文テキスト、段落 | `as` (デフォルト: `p`) | `@/components/ui/text` |
| `Divider` | 区切り線 | `variant` (`horizontal`\|`vertical`) | `@/components/ui/divider` |
| `StarDecoration` | 星飾り | `children` | `@/components/ui/star-decoration` |
| `BlurredBox` | 背景ぼかしボックス | `as` (デフォルト: `div`) | `@/components/ui/blurred-box` |
| `VisuallyHidden` | スクリーンリーダー専用要素 | `as` (デフォルト: `div`) | `@/components/ui/visually-hidden` |
| `LinkButton` | ボタンスタイルのリンク | `href` (必須), `target`, `rel` | `@/components/ui/link-button` |

**使用例:**

```tsx
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { StarDecoration } from "@/components/ui/star-decoration";
import { LinkButton } from "@/components/ui/link-button";

export default function EventPage() {
  return (
    <Container as="main">
      <StarDecoration>
        <Heading as="h1">イベント情報</Heading>
      </StarDecoration>

      <Text>赤羽台祭では、様々なイベントを開催します。</Text>

      <Divider />

      <Heading as="h2" variant="secondary">ステージイベント</Heading>
      <Text>メインステージでバンド演奏やダンスを予定しています。</Text>

      <LinkButton href="/events/detail">詳細を見る</LinkButton>
    </Container>
  );
}
```

詳細は`src/components/ui/UIComponents.mdx`を参照。

### 4. TypeScript

#### インポート

**パスエイリアス `@/*` を必ず使用:**

```tsx
// ✅ 正しい - パスエイリアス
import { Container } from '@/components/ui/container';
import { Header } from '@/components/header';
import { Banner } from './_components/banner';  // 同じディレクトリ内のみ相対パス可

// ❌ 誤り - 深い相対パス
import { Container } from '../../../components/ui/container';
import { Header } from '../../components/header';
```

#### console文の禁止

- `console.log`, `console.error`, `console.warn` などは**本番コードに含めないこと**
- Biomeの`noConsole`ルールでエラーになります
- デバッグコードは必ずコミット前に削除すること

```tsx
// ❌ 誤り - console文は禁止
console.log('Debug message');
console.error('Error message');

// ✅ 正しい - console文を削除
// (デバッグが必要な場合は開発中のみ使用し、コミット前に削除)
```

#### 型定義

- 厳密な型チェックを使用すること
- `any`の使用は避けること
- 必要に応じてジェネリクスを活用すること

### 5. Accessibility (a11y)

#### セマンティックHTML

**必須: 適切なHTML要素を使用すること**

```tsx
// ✅ 正しい - セマンティックHTML
<Container as="main">
  <Heading as="h1">ページタイトル</Heading>
  <Container as="section">
    <Heading as="h2">セクション見出し</Heading>
    <Text as="p">段落テキスト</Text>
  </Container>
</Container>

// ❌ 誤り - div/spanの乱用
<div>
  <div className={heading()}>ページタイトル</div>
  <div>
    <div className={heading()}>セクション見出し</div>
    <div>段落テキスト</div>
  </div>
</div>
```

#### インタラクティブ要素

**必須: ラベルとARIA属性を適切に使用:**

```tsx
// ✅ 正しい - 適切なラベル
<button aria-label="メニューを開く">
  <MenuIcon aria-hidden="true" />
  <VisuallyHidden>メニュー</VisuallyHidden>
</button>

<label htmlFor="email">メールアドレス</label>
<input id="email" type="email" />

// ❌ 誤り - ラベルなし
<button>
  <MenuIcon />
</button>

<input type="email" />
```

#### 画像

**必須: alt属性を適切に設定:**

```tsx
// ✅ 正しい - 内容を説明するalt
<img src="/event.jpg" alt="メインステージでのバンド演奏の様子" />

// ✅ 正しい - 装飾的な画像
<img src="/decoration.svg" alt="" />

// ❌ 誤り - altがない
<img src="/event.jpg" />

// ❌ 誤り - 無意味なalt
<img src="/event.jpg" alt="画像" />
```

#### スクリーンリーダー対応

**VisuallyHiddenコンポーネントを活用:**

```tsx
import { VisuallyHidden } from "@/components/ui/visually-hidden";

// ✅ 正しい - アイコンボタンの説明
<button>
  <SearchIcon aria-hidden="true" />
  <VisuallyHidden>検索</VisuallyHidden>
</button>

// ✅ 正しい - フォームラベル
<VisuallyHidden as="label" htmlFor="search">
  検索キーワード
</VisuallyHidden>
<input id="search" type="search" placeholder="検索..." />
```

### 6. Next.js App Router

#### ページ作成

**ページファイルの配置:**

| ファイル | 配置場所 | 用途 |
| :--- | :--- | :--- |
| `page.tsx` | `src/app/{route}/page.tsx` | ページコンテンツ (URL定義) |
| `page.module.css` | `src/app/{route}/page.module.css` | ページ専用スタイル |
| `layout.tsx` | `src/app/{route}/layout.tsx` | レイアウト (必要な場合のみ) |

**例: /aboutページの作成**

```
src/app/about/
├── page.tsx           # /about のページ
├── page.module.css    # /about のスタイル
└── _components/       # /about 専用コンポーネント
    ├── greeting/
    └── history/
```

#### メタデータ

**SEO対策のため、必ずメタデータを設定:**

```tsx
// page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'イベント情報',
};

export default function EventPage() {
  return (
    // ページコンテンツ
  );
}
```

### PRレビュー観点

**レビュー時に必ず確認すること:**

1. **ファイル命名**: kebab-caseが守られているか
2. **CSS Modules**: すべてのコンポーネントで使用されているか
3. **デザイントークン**: CSS変数が使用されているか (ハードコードなし)
4. **セマンティックトークン**: プリミティブではなくセマンティックトークンを優先しているか
5. **コンポーネント配置**: 適切な場所に配置されているか
6. **既存UI活用**: 既存UIコンポーネントを活用しているか
7. **レスポンシブ**: モバイルファーストアプローチか、rem単位を使用しているか
8. **アクセシビリティ**: セマンティックHTML、適切なラベル、alt属性が設定されているか
9. **TypeScript**: 型エラーがないか、console文が含まれていないか
10. **インポート**: パスエイリアス`@/*`を使用しているか

### 7. Development Best Practices

#### 開発フロー

**推奨される開発の流れ:**

1. **開発開始前**: `pnpm gen`を実行してCSS Modules型を最新化
2. **既存コンポーネント確認**: 類似コンポーネントがないか`src/components/ui/`を確認
3. **Storybookで確認**: `pnpm storybook`で既存コンポーネントの動作を確認
4. **コンポーネント開発**: Storybookで独立して開発 (ui/コンポーネントの場合)
5. **スタイリング**: 常にデザイントークンを使用、ハードコード禁止
6. **デバッグコード削除**: `console.log`などを削除
7. **型定義生成**: CSS Modulesを変更した場合は`pnpm gen`を再実行
8. **リント確認**: `pnpm lint`でエラーチェック
9. **自動修正**: `pnpm format`で自動修正

#### パフォーマンス

- 画像は適切なサイズに最適化すること
- 不要な依存関係を追加しないこと
- レンダリングパフォーマンスを考慮すること
- 不要なre-renderを避けること

#### コードの可読性

- 複雑なロジックにはコメントを追加すること
- 関数・変数名は意図が明確に伝わる名前にすること
- JSDocコメントで型情報を補足すること (特にUI componentライブラリ)
- マジックナンバーは避け、定数化またはデザイントークンを使用すること

**例:**

```tsx
// ✅ 正しい - 明確な命名とコメント
/**
 * ユーザーのメールアドレスが有効かどうかを検証します
 * @param email - 検証するメールアドレス
 * @returns メールアドレスが有効な場合はtrue
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ❌ 誤り - 不明確な命名とコメントなし
function check(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
```
