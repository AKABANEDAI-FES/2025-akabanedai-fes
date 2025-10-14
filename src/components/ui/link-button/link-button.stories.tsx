import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LinkButton } from "./link-button";

const meta = {
  title: "UI/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "リンク先のURL",
    },
    children: {
      control: "text",
      description: "ボタン内のテキスト",
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "詳しくはこちら",
  },
};

export const WithLongText: Story = {
  args: {
    href: "#",
    children: "アクセス情報を見る",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "外部サイトへ",
  },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
      <LinkButton href="#">ホーム</LinkButton>
      <LinkButton href="#">企画一覧</LinkButton>
      <LinkButton href="#">アクセス</LinkButton>
      <LinkButton href="#">お問い合わせ</LinkButton>
    </div>
  ),
};
