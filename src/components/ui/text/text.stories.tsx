import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "./text";

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div"],
      description: "レンダリングするHTML要素",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "これは基本的なテキストです。",
  },
};

export const AsSpan: Story = {
  args: {
    as: "span",
    children: "インライン要素として表示されます。",
  },
};

export const AsDiv: Story = {
  args: {
    as: "div",
    children: "div要素として表示されます。",
  },
};

export const LongText: Story = {
  args: {
    children:
      "赤羽台祭は、学生が主体となって企画・運営する学園祭です。様々な企画やイベントを通じて、学生同士の交流を深め、地域の皆様とのつながりを大切にしています。",
  },
};

export const MultipleParagraphs: Story = {
  render: () => (
    <div>
      <Text>
        最初の段落です。テキストコンポーネントのデフォルト表示を示しています。
      </Text>
      <Text>
        2番目の段落です。複数の段落を並べることで、読みやすい文章構造を作ることができます。
      </Text>
      <Text>
        3番目の段落です。統一されたスタイリングにより、一貫性のあるデザインを実現できます。
      </Text>
    </div>
  ),
};

export const InlineText: Story = {
  render: () => (
    <p>
      これは通常のテキストで、
      <Text as="span" style={{ fontWeight: "bold", color: "#e91e63" }}>
        この部分はTextコンポーネント
      </Text>
      で装飾されています。
    </p>
  ),
};
