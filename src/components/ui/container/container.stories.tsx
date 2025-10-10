import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./container";

const meta = {
  title: "UI/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "article", "main"],
      description: "レンダリングするHTML要素",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "これはコンテナ内のコンテンツです。",
  },
};

export const AsSection: Story = {
  args: {
    as: "section",
    children: "セクション要素として表示されます。",
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <>
        <h2>見出し</h2>
        <p>
          コンテナは、コンテンツを中央に配置し、最大幅を制限することで、読みやすさを向上させます。
        </p>
        <p>
          このコンポーネントは、ページの主要なコンテンツ領域に使用されます。レスポンシブデザインに対応しており、画面サイズに応じて適切な余白を提供します。
        </p>
      </>
    ),
  },
};

export const MultipleContainers: Story = {
  render: () => (
    <>
      <Container style={{ background: "#f0f0f0", padding: "2rem 0" }}>
        <p>最初のコンテナ</p>
      </Container>
      <Container style={{ background: "#e0e0e0", padding: "2rem 0" }}>
        <p>2番目のコンテナ</p>
      </Container>
      <Container style={{ background: "#d0d0d0", padding: "2rem 0" }}>
        <p>3番目のコンテナ</p>
      </Container>
    </>
  ),
};
