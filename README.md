# 赤羽台祭 2025 公式サイト

赤羽台祭の公式ウェブサイトです。

## 開発環境

### 必要なソフトウェア

- **Node.js**: v22
- **pnpm**: v10

### 使用技術

- **Next.js 15.5.3** - App Router & Turbopack
- **React 19.1.0** - TypeScript
- **CSS Modules** - コンポーネントスタイリング
- **Ark UI React** - アクセシブルUIコンポーネント
- **Biome** - リンター・フォーマッター
- **Stylelint** - CSSリンター
- **Storybook** - UIコンポーネント開発環境

## セットアップ方法

### 1. リポジトリのクローン

```bash
git clone https://github.com/AKABANEDAI-FES/2025-akabanedai-fes.git
cd 2025-akabanedai-fes
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. VSCode 拡張機能のインストール

このプロジェクトでは、開発を効率化するために**推奨されるVSCode拡張機能**が設定されています。**これらの拡張機能をインストールする必要があります。**

#### インストール方法

1. VSCodeでこのプロジェクトを開くと、右下に「このワークスペースには推奨拡張機能があります」という通知が表示されます
2. **「インストール」**をクリックして、すべての推奨拡張機能をインストールしてください

または、手動でインストールする場合:

1. VSCodeのサイドバーで拡張機能アイコン（四角が4つ並んだアイコン）をクリック
2. 検索バーに `@recommended` と入力
3. 「ワークスペースの推奨事項」セクションに表示される拡張機能をすべてインストール

#### 推奨拡張機能一覧

| 拡張機能 | 役割 |
| :--- | :--- |
| **Biome** (`biomejs.biome`) | TypeScript/JavaScriptのリント・フォーマットをエディタ内で実行 |
| **EditorConfig** (`editorconfig.editorconfig`) | インデントやエンコーディングなどの設定を統一 |
| **Stylelint** (`stylelint.vscode-stylelint`) | CSSのリント・フォーマットをエディタ内で実行 |
| **CSS Modules Kit** (`mizdra.css-modules-kit-vscode`) | CSS Modulesの型補完とジャンプ機能 |
| **CSS Variable Autocomplete** (`phoenisx.cssvar`) | CSS変数の自動補完 |

### 4. 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## 開発コマンド

### 基本コマンド

```bash
# 開発サーバー起動（Turbopack使用）
pnpm dev

# 本番ビルド
pnpm build
```

### コード品質

```bash
# 全てのリンターを実行
pnpm lint

# TypeScript/JavaScript のリント
pnpm lint:biome

# CSS のリント
pnpm lint:style

# 全てのフォーマット修正
pnpm format

# Biome でフォーマット修正
pnpm format:biome

# CSS フォーマット修正
pnpm format:style
```

### コード生成

```bash
# CSS Modules の型定義生成
pnpm gen
```

### Storybook

```bash
# Storybook開発サーバー起動
pnpm storybook

# Storybookビルド
pnpm build-storybook
```

Storybookでは、UIコンポーネントを個別に確認できます。[http://localhost:6006](http://localhost:6006) でアクセス可能です。

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── _components/        # ページ専用コンポーネント
│   │   ├── access/         # アクセス情報
│   │   ├── banner/         # ヒーローバナー
│   │   ├── parallax/       # パララックス効果
│   │   └── theme/          # テーマ設定
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── globals.css        # グローバルスタイル
│   └── reset.css          # CSS リセット
├── components/            # 再利用可能コンポーネント
│   ├── header/           # ヘッダーナビゲーション
│   ├── footer/           # フッター
│   └── ui/               # 汎用UIコンポーネント
└── assets/               # 静的アセット
```

## 開発ワークフロー

### Git ワークフロー

1. **ブランチの作成**: 作業前に新しいブランチを作成してください（名前はかぶらなければ大丈夫です）
2. **開発**: 機能の実装やバグ修正を行います
3. **コミット前**: `pnpm lint` を実行して、すべてのエラーを修正してください
4. **プルリクエスト**: `main` ブランチに対してプルリクエストを作成します

### 開発前の注意事項

- **CSS Modules の型生成**: CSS Modules ファイルを作成・変更した後は、`pnpm gen` を実行して型定義を生成してください
- **リント・フォーマット**: プルリクエスト作成前に必ず `pnpm lint` を実行し、すべてのエラーを修正してください
- **自動修正**: `pnpm format` で自動修正できるエラーは自動修正してください
- **コンソール文**: `console.log` などのデバッグ用コードは削除してください（Biomeがエラーにします）

## ページの作り方

Next.jsでは、**`page.tsx`** ファイルがウェブサイトの**一つのURL（ページ）**を定義します。

### ページの作成手順

1. **フォルダ作成**: `src/app/` 直下に、URLにしたい名前で**新しいフォルダ**を作成します
   - 例: `src/app/about/` → URLは `/about` になります
2. **ファイル作成**: そのフォルダ内に、ページの本体となる **`page.tsx`** を作成します
3. **スタイルの適用**: ページ固有のスタイルは、同じフォルダ内に**CSS Modules**ファイル（例: `page.module.css`）を作成して適用します

| 種類 | ファイルの場所 | 説明 |
| :--- | :--- | :--- |
| **ページ本体** | `src/app/アクセス名/page.tsx` | URL（画面）の本体 |
| **ページスタイル** | `src/app/アクセス名/page.module.css` | そのページ専用の見た目を設定 |

## コンポーネントの配置ルール

コンポーネントは、その**再利用性**と**利用範囲**に基づき、配置場所を明確に分けます。

| カテゴリ | 配置場所 | 役割 | 例 |
| :--- | :--- | :--- | :--- |
| **共通・再利用部品** | **`src/components/`** | サイト全体で使われる汎用的なUIや共通レイアウト部品。**どこからでも参照されます。** | `header/`, `footer/`, `ui/container/` |
| **ページ固有部品** | **`src/app/{page}/_components/`** | 特定のページ内でのみ利用される部品。**他のページからの参照は想定しません。** | `src/app/_components/access/`（ルート）<br>`src/app/about/_components/greeting/`（サブページ） |

### 共通・再利用部品 (`src/components/` 配下)

- **配置ルール**: `src/components/` 以下にコンポーネント名のサブフォルダを作成して配置
- **用途**:
  - `Header`, `Footer` などの**サイト共通レイアウト**
  - `Container`, `Heading`, `Text`, `Button` などの**汎用UI部品**（`ui/` サブディレクトリ内）

**実際の構成例:**

```
src/components/
├── header/
│   ├── header.tsx
│   ├── header.module.css
│   └── index.ts
├── footer/
│   ├── footer.tsx
│   ├── footer.module.css
│   └── index.ts
└── ui/
    ├── container/
    │   ├── container.tsx
    │   ├── container.module.css
    │   ├── container.stories.tsx
    │   └── index.ts
    └── heading/
        ├── heading.tsx
        ├── heading.module.css
        ├── heading.stories.tsx
        └── index.ts
```

### ページ固有部品 (`src/app/{page}/_components/` 配下)

- **配置ルール**: 各ページディレクトリ内の `_components/` フォルダに配置します
  - **ルートページ**: `src/app/_components/{コンポーネント名}/`
  - **サブページ**: `src/app/{page}/_components/{コンポーネント名}/`
- **用途**: 特定のページに特化した部品（専用の地図、カスタム情報ボックス、特定のバナーなど）

**実際の構成例（ルートページ）:**

```
src/app/_components/
├── access/
│   ├── access.tsx
│   ├── access.module.css
│   └── index.ts
├── banner/
│   ├── banner.tsx
│   ├── banner.module.css
│   └── index.ts
├── parallax/
│   ├── parallax.tsx
│   ├── parallax.module.css
│   └── index.ts
└── theme/
    ├── theme.tsx
    ├── theme.module.css
    └── index.ts
```

**サブページの配置例:**

```
src/app/about/_components/
├── greeting/
│   ├── greeting.tsx
│   ├── greeting.module.css
│   └── index.ts
└── history/
    ├── history.tsx
    ├── history.module.css
    └── index.ts
```

### ページ本体 (`page.tsx`) での部品利用

`page.tsx`では、**共通部品**と**ページ固有部品**のどちらもインポートして利用可能です。インポートには、ルートエイリアス **`@/`**（`src/` を指す）を利用します。

**実際のコード例 (`src/app/page.tsx`)**

```tsx
// 共通・再利用部品のインポート
import { Container } from '@/components/ui/container';
// ページ固有部品のインポート
import { Access } from './_components/access';
import { Banner } from './_components/banner';
import { Theme } from './_components/theme';

export default function Home() {
  return (
    <>
      <Banner />
      <Container as="main">
        <Theme />
        <Access />
      </Container>
    </>
  );
}
```

### コンポーネントのファイル構成

実際のプロジェクトでは、以下の構成を採用しています:

| 構成要素 | ファイル名 | 用途 | 対象 |
| :--- | :--- | :--- | :--- |
| **部品本体** | `●●.tsx` | コンポーネントのロジックとJSXを定義 | 全てのコンポーネント |
| **専用スタイル** | `●●.module.css` | 部品専用のCSS Modules | 全てのコンポーネント |
| **エクスポート窓口** | `index.ts` | `export { Foo } from './foo'` の形式で再エクスポート | 全てのコンポーネント |
| **Storybook ストーリー** | `●●.stories.tsx` | Storybook での表示例とドキュメント | `src/components/ui/` 配下のみ |

## 開発ガイドライン

### ファイル命名規則

- **TypeScript/JavaScriptファイル**: kebab-case を使用（例: `my-component.tsx`, `use-fetch.ts`）
- **CSS Modulesファイル**: kebab-case を使用（例: `my-component.module.css`）
- Biomeの `useFilenamingConvention` ルールで強制されています

### CSS/スタイリング規則

- CSS Modules を使用し、クラス名は **camelCase**
- レスポンシブデザインはモバイルファースト
- CSS カスタムプロパティでテーマ管理
- デザイントークン（CSS変数）を使用（詳細は後述）

**CSS Modules の命名規則:**

```css
/* ✅ 正しい (camelCase) */
.containerBox { }
.primaryButton { }
#mainHeader { }

/* ❌ 間違い (kebab-case) */
.container-box { }
.primary-button { }
#main-header { }
```

### TypeScript/JavaScript 規則

- パス `@/*` で `src/*` にアクセス可能
- 厳密な型チェック有効
- `console.log` などのデバッグコードは削除（Biomeがエラーにします）

### コンポーネント規則

- 各コンポーネントは `component.tsx`, `component.module.css`, `index.ts` で構成
- SVG アセットは SVGR で React コンポーネント化
- コンポーネントとヘルパー関数の両方をエクスポート（詳細は後述）

## UIコンポーネント

プロジェクトで使用可能な汎用UIコンポーネントです。**同じ用途のコンポーネントが既にある場合は、基本的にそれを使用してください。**

詳細な使い方は `src/components/ui/UIComponents.mdx` または Storybook (`pnpm storybook`) を参照してください。

### 利用可能なコンポーネント一覧

| コンポーネント | 用途 | インポート |
| :--- | :--- | :--- |
| `Container` | レイアウトコンテナ、最大幅制限 | `@/components/ui/container` |
| `Heading` | 見出し（h1～h6） | `@/components/ui/heading` |
| `Text` | 本文テキスト、段落 | `@/components/ui/text` |
| `Divider` | 区切り線 | `@/components/ui/divider` |
| `StarDecoration` | 星飾り | `@/components/ui/star-decoration` |
| `BlurredBox` | 背景ぼかしボックス | `@/components/ui/blurred-box` |
| `VisuallyHidden` | スクリーンリーダー専用要素 | `@/components/ui/visually-hidden` |
| `LinkButton` | ボタン風リンク | `@/components/ui/link-button` |

### 基本的な使用例

```tsx
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function AboutPage() {
  return (
    <Container as="main">
      <Heading as="h1">赤羽台祭について</Heading>
      <Text>赤羽台祭は東洋大学赤羽台キャンパスの学園祭です。</Text>
    </Container>
  );
}
```

### コンポーネントパターン

各UIコンポーネントは、以下の2つの形式でエクスポートされます：

1. **コンポーネント** - React コンポーネント（PascalCase、例: `Container`）
2. **ヘルパー関数** - CSS クラス名を返す関数（camelCase、例: `container()`）

```tsx
// コンポーネントの使用
<Container>Content</Container>

// ヘルパー関数の使用（カスタムコンポーネント用）
<div className={container()}>Content</div>
```

### ポリモーフィックコンポーネント

多くのコンポーネントは `as` プロパティで異なるHTML要素として描画できます：

```tsx
<Container as="section">...</Container>
<Heading as="h2">...</Heading>
<Text as="span">...</Text>
```

## CSS変数（デザイントークン）

プロジェクト全体で統一されたデザインを保つため、CSS変数が定義されています（[src/app/globals.css](src/app/globals.css)）。**スタイリング時は基本的にこれらの変数を使用してください。**

### カテゴリ別CSS変数

#### 色（Colors）

```css
/* プリミティブ: グレースケール (light -> dark) */
--color-gray-1 から --color-gray-8
--color-gray-a1 から --color-gray-a9 /* アルファ付き */

/* プリミティブ: テーマカラー（紺色、light -> dark） */
--color-theme-1 から --color-theme-8
--color-theme-a1 から --color-theme-a9 /* アルファ付き */

/* プリミティブ: アクセントカラー（黄色） */
--color-accent-1 から --color-accent-8
--color-accent-a1 から --color-accent-a9 /* アルファ付き */

/* セマンティック: Foreground */
--fg-default      /* デフォルトテキスト色 */
--fg-muted        /* 控えめなテキスト色 */

/* セマンティック: Background */
--bg-default      /* デフォルト背景色 */
--bg-muted        /* 控えめな背景色 */
--bg-canvas       /* キャンバス背景色 */

/* セマンティック: Theme */
--theme-default   /* テーマカラー（紺色） */
--theme-fg        /* テーマカラー上のテキスト色 */

/* セマンティック: Accent */
--accent-default  /* アクセントカラー（黄色） */
--accent-fg       /* アクセントカラー上のテキスト色 */

/* セマンティック: Border */
--border-default  /* デフォルトボーダー色 */
--border-muted    /* 控えめなボーダー色 */
```

#### スペーシング

```css
--space-xs   /* 0.5rem */
--space-sm   /* 0.75rem */
--space-md   /* 1rem */
--space-lg   /* 1.5rem */
--space-xl   /* 2rem */
--space-2xl から --space-8xl
```

#### フォント

```css
/* サイズ */
--font-size-xs から --font-size-8xl

/* ウェイト */
--font-weight-thin から --font-weight-black

/* 行間 */
--line-heights-none    /* 1 */
--line-heights-tight   /* 1.25 */
--line-heights-normal  /* 1.5 */
--line-heights-relaxed /* 1.75 */
--line-heights-loose   /* 2 */
```

#### その他

```css
/* ボーダー半径 */
--radius-l1, --radius-l2, --radius-l3, --radius-full

/* シャドウ */
--shadow-xs, --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl

/* サイズ */
--size-xs から --size-8xl, --size-full
```

### 使用例

```css
.myComponent {
  /* ✅ 推奨: CSS変数を使用 */
  color: var(--fg-default);
  background-color: var(--accent-default);
  padding: var(--space-lg);
  border-radius: var(--radius-l2);
  box-shadow: var(--shadow-md);
}

.badComponent {
  /* ❌ 非推奨: ハードコードされた値 */
  color: #000;
  background-color: #191c4f;
  padding: 1.5rem;
  border-radius: 8px;
}
```

## Storybook

UIコンポーネントのカタログとして**Storybook**を使用しています。開発中のコンポーネントを独立した環境で確認・テストできます。

### Storybook の起動

```bash
# Storybook を起動（http://localhost:6006 にアクセス）
pnpm storybook
```

### Storybook で確認できるもの

- **UI/概要**: UIコンポーネントの使い方ガイド
- **UI/各コンポーネント**: Container, Heading, Text, Divider など
- **Tokens**: 色、タイポグラフィ、スペーシング、ブレークポイントなどのデザイントークン

## デプロイ

本プロジェクトは GitHub Pages にデプロイされます。`main` ブランチへのプッシュで自動デプロイが実行されます。
