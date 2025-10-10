import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VisuallyHidden } from "./visually-hidden";

const meta = {
  title: "UI/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "span", "p"],
      description: "レンダリングするHTML要素",
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <p>
        この下にスクリーンリーダー専用のテキストがありますが、視覚的には見えません。
      </p>
      <VisuallyHidden>
        このテキストはスクリーンリーダーでのみ読み上げられます。
      </VisuallyHidden>
      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
        ※ブラウザの開発者ツールで要素を確認すると、DOMには存在していることがわかります。
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <button
      type="button"
      style={{
        padding: "0.5rem 1rem",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      <span aria-hidden="true">☰</span>
      <VisuallyHidden>メニュー</VisuallyHidden>
    </button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <button
        type="button"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid #ccc",
          background: "white",
          cursor: "pointer",
          fontSize: "1.25rem",
        }}
      >
        <span aria-hidden="true">❤️</span>
        <VisuallyHidden>お気に入りに追加</VisuallyHidden>
      </button>
      <button
        type="button"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid #ccc",
          background: "white",
          cursor: "pointer",
          fontSize: "1.25rem",
        }}
      >
        <span aria-hidden="true">🔗</span>
        <VisuallyHidden>リンクをコピー</VisuallyHidden>
      </button>
    </div>
  ),
};

export const FormLabel: Story = {
  render: () => (
    <form>
      <div style={{ marginBottom: "1rem" }}>
        <VisuallyHidden as="label" htmlFor="search">
          検索
        </VisuallyHidden>
        <input
          id="search"
          type="search"
          placeholder="検索..."
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
        />
      </div>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        ※入力欄にはvisuallyHiddenでラベルが設定されています（スクリーンリーダーでのみ読み上げられます）
      </p>
    </form>
  ),
};
