import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { programs } from "@/constants/programs";
import { ProgramList } from "./program-list";

const meta = {
  title: "Components/ProgramList",
  component: ProgramList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgramList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    programs: programs.slice(0, 5),
  },
};

export const Many: Story = {
  args: {
    programs: programs,
  },
};
