import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "./heading";

const meta = {
  title: "UI/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "レンダリングする見出し要素",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "見出しのスタイルバリアント",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Primary: Story = {
  args: {
    as: "h1",
    variant: "primary",
    children: "赤羽台祭2025",
  },
};

export const H1Secondary: Story = {
  args: {
    as: "h1",
    variant: "secondary",
    children: "赤羽台祭2025",
  },
};

export const H2Primary: Story = {
  args: {
    as: "h2",
    variant: "primary",
    children: "イベント情報",
  },
};

export const H2Secondary: Story = {
  args: {
    as: "h2",
    variant: "secondary",
    children: "イベント情報",
  },
};

export const AllHeadingLevels: Story = {
  args: {
    as: "h1",
    variant: "primary",
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading as="h1">見出しレベル1</Heading>
      <Heading as="h2">見出しレベル2</Heading>
      <Heading as="h3">見出しレベル3</Heading>
      <Heading as="h4">見出しレベル4</Heading>
      <Heading as="h5">見出しレベル5</Heading>
      <Heading as="h6">見出しレベル6</Heading>
    </div>
  ),
};

export const VariantComparison: Story = {
  args: {
    as: "h1",
    variant: "primary",
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Primary</p>
        <Heading as="h2" variant="primary">
          見出しテキスト
        </Heading>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
          Secondary
        </p>
        <Heading as="h2" variant="secondary">
          見出しテキスト
        </Heading>
      </div>
    </div>
  ),
};
