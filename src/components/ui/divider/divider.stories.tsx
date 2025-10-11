import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "区切り線の向き",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200px", display: "flex", alignItems: "stretch" }}>
        <Story />
      </div>
    ),
  ],
};

export const BetweenContent: Story = {
  render: () => (
    <div>
      <p>上のコンテンツ</p>
      <Divider />
      <p>下のコンテンツ</p>
    </div>
  ),
};

export const VerticalBetweenContent: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span>左のコンテンツ</span>
      <Divider variant="vertical" style={{ height: "2rem" }} />
      <span>右のコンテンツ</span>
    </div>
  ),
};
