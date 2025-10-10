import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlurredBox } from "./blurred-box";

const meta = {
  title: "UI/BlurredBox",
  component: BlurredBox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "article", "aside"],
      description: "レンダリングするHTML要素",
    },
  },
} satisfies Meta<typeof BlurredBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "これはブラーボックス内のコンテンツです。",
    style: { padding: "2rem" },
  },
};

export const AsSection: Story = {
  args: {
    as: "section",
    children: "セクション要素として表示されます。",
    style: { padding: "2rem" },
  },
};

export const OverImage: Story = {
  render: () => (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1200/800)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 2rem",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BlurredBox style={{ padding: "2rem", borderRadius: "12px" }}>
        <h2 style={{ margin: "0 0 1rem 0" }}>画像の上のテキスト</h2>
        <p style={{ margin: 0 }}>
          背景画像がぼかされて、テキストが読みやすくなっています。
        </p>
      </BlurredBox>
    </div>
  ),
};
