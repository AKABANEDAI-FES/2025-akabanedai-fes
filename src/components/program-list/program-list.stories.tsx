import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Program } from "@/types/program";
import { getPrograms } from "@/utils/program";
import { ProgramList } from "./program-list";

const samplePrograms: Program[] = getPrograms();

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
    programs: samplePrograms.slice(0, 5),
  },
};

export const Many: Story = {
  args: {
    programs: samplePrograms,
  },
};
