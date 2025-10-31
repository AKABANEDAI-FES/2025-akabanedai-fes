import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "タグ",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "タグ",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "タグ",
    size: "lg",
  },
};
