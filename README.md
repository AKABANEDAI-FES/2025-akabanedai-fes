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

### 3. 開発サーバーの起動

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

## 開発ガイドライン

### スタイリング

- CSS Modules を使用し、クラス名は camelCase
- レスポンシブデザインはモバイルファースト
- CSS カスタムプロパティでテーマ管理

### コンポーネント

- 各コンポーネントは `component.tsx`, `component.module.css`, `index.ts` で構成
- SVG アセットは SVGR で React コンポーネント化
- パス `@/*` で `src/*` にアクセス可能

## UIコンポーネント

プロジェクトで使用可能な汎用UIコンポーネントの使い方です。

### Container - レイアウトコンテナ

コンテンツを中央に配置し、最大幅を制限するコンポーネント。

```tsx
import { Container } from "@/components/ui/container";

// 基本的な使用方法
<Container>
  <p>中央に配置されたコンテンツ</p>
</Container>

// main要素として使用
<Container as="main">
  <h2>セクションタイトル</h2>
</Container>
```

### Heading - 見出し

統一されたスタイルの見出し要素を提供するコンポーネント。

```tsx
import { Heading } from "@/components/ui/heading";

// メインタイトル（h1、primaryスタイル）
<Heading as="h1">赤羽台祭 2025</Heading>

// セクションタイトル（h2、secondaryスタイル）
<Heading as="h2" variant="secondary">イベント情報</Heading>
```

### Text - テキスト

統一されたテキストスタイルを提供するコンポーネント。

```tsx
import { Text } from "@/components/ui/text";

// 基本的な段落テキスト
<Text>これは基本的なテキストです。</Text>

// span要素として使用
<Text as="span">インライン要素として表示</Text>
```

### Divider - 区切り線

コンテンツを視覚的に分離する区切り線コンポーネント。

```tsx
import { Divider } from "@/components/ui/divider";

// 水平区切り線（デフォルト）
<Divider />

// 垂直区切り線
<Divider variant="vertical" />
```

### VisuallyHidden - スクリーンリーダー専用

視覚的には隠れているが、支援技術には読み上げられる要素。

```tsx
import { VisuallyHidden } from "@/components/ui/visually-hidden";

// ボタンの補足説明として
<button>
  <MenuIcon />
  <VisuallyHidden>メニュー</VisuallyHidden>
</button>
```

### StarDecoration - 星飾り

コンテンツに装飾的な星と線を追加するコンポーネント。

```tsx
import { StarDecoration } from "@/components/ui/star-decoration";

// 基本的な使用方法
<StarDecoration>
  <h2>タイトル</h2>
</StarDecoration>
```

### BlurredBox - ブラーボックス

背景をぼかして半透明にすることで、背景と同化しないようにするコンポーネント。

```tsx
import { BlurredBox } from "@/components/ui/blurred-box";

// 基本的な使用方法
<BlurredBox>
  <p>背景がぼかされたコンテンツ</p>
</BlurredBox>
```

### ヘルパー関数

各UIコンポーネントは、CSSクラス名を返すヘルパー関数も提供しています。

```tsx
import { container } from "@/components/ui/container";
import { heading } from "@/components/ui/heading";
import { text } from "@/components/ui/text";
import { divider } from "@/components/ui/divider";
import { blurredBox } from "@/components/ui/blurred-box";

// カスタムコンポーネントにスタイルを適用
<div className={container()}>
  <h2 className={heading({ variant: "primary" })}>タイトル</h2>
  <p className={text()}>テキスト内容</p>
  <hr className={divider({ variant: "horizontal" })} />
  <div className={blurredBox()}>ブラー効果</div>
</div>
```

## デプロイ

本プロジェクトは GitHub Pages にデプロイされます。`main` ブランチへのプッシュで自動デプロイが実行されます。
