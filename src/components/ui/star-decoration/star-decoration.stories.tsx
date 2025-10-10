import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarDecoration } from "./star-decoration";

const meta = {
  title: "UI/StarDecoration",
  component: StarDecoration,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StarDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h2>赤羽台祭</h2>,
  },
};

export const WithText: Story = {
  args: {
    children: <h2>イベント情報</h2>,
  },
};

export const WithLongText: Story = {
  args: {
    children: <h2>特別企画のお知らせ</h2>,
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <StarDecoration>
        <h2>セクション1</h2>
      </StarDecoration>
      <StarDecoration>
        <h2>セクション2</h2>
      </StarDecoration>
      <StarDecoration>
        <h2>セクション3</h2>
      </StarDecoration>
    </div>
  ),
};

export const Composition: Story = {
  render: () => (
    <StarDecoration.Root>
      <h2>上部に装飾</h2>
      <StarDecoration.Decoration />
      <p>装飾の下のコンテンツ</p>
    </StarDecoration.Root>
  ),
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>赤羽台祭2025</h2>
        <p style={{ fontSize: "0.875rem", color: "#666" }}>
          2025年10月11日-12日開催
        </p>
      </div>
    ),
  },
};
