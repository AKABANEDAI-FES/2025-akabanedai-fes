import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "デザイントークン/Colors",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

const ColorSwatch = ({
  name,
  value,
  token,
}: {
  name: string;
  value: string;
  token: string;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "0.5rem",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "40px",
        backgroundColor: value,
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-l1)",
      }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: "600", fontSize: "0.875rem" }}>{name}</div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--fg-muted)",
          fontFamily: "monospace",
        }}
      >
        {token}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--fg-muted)",
          fontFamily: "monospace",
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

const ColorGroup = ({
  title,
  colors,
}: {
  title: string;
  colors: Array<{ name: string; value: string; token: string }>;
}) => (
  <div style={{ marginBottom: "2rem" }}>
    <h3
      style={{
        fontSize: "1.25rem",
        fontWeight: "700",
        marginBottom: "1rem",
      }}
    >
      {title}
    </h3>
    {colors.map((color) => (
      <ColorSwatch key={color.token} {...color} />
    ))}
  </div>
);

export const Grayscale: StoryObj = {
  render: () => (
    <ColorGroup
      title="Grayscale (グレースケール)"
      colors={[
        {
          name: "Gray 1 (White)",
          value: "var(--color-gray-1)",
          token: "--color-gray-1",
        },
        {
          name: "Gray 2",
          value: "var(--color-gray-2)",
          token: "--color-gray-2",
        },
        {
          name: "Gray 3",
          value: "var(--color-gray-3)",
          token: "--color-gray-3",
        },
        {
          name: "Gray 4",
          value: "var(--color-gray-4)",
          token: "--color-gray-4",
        },
        {
          name: "Gray 5",
          value: "var(--color-gray-5)",
          token: "--color-gray-5",
        },
        {
          name: "Gray 6",
          value: "var(--color-gray-6)",
          token: "--color-gray-6",
        },
        {
          name: "Gray 7",
          value: "var(--color-gray-7)",
          token: "--color-gray-7",
        },
        {
          name: "Gray 8 (Black)",
          value: "var(--color-gray-8)",
          token: "--color-gray-8",
        },
      ]}
    />
  ),
};

export const GrayscaleAlpha: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: "var(--bg-muted)", padding: "1rem" }}>
      <ColorGroup
        title="Grayscale Alpha (透明度付きグレー)"
        colors={[
          {
            name: "Gray A1 (10%)",
            value: "var(--color-gray-a1)",
            token: "--color-gray-a1",
          },
          {
            name: "Gray A2 (20%)",
            value: "var(--color-gray-a2)",
            token: "--color-gray-a2",
          },
          {
            name: "Gray A3 (30%)",
            value: "var(--color-gray-a3)",
            token: "--color-gray-a3",
          },
          {
            name: "Gray A4 (40%)",
            value: "var(--color-gray-a4)",
            token: "--color-gray-a4",
          },
          {
            name: "Gray A5 (50%)",
            value: "var(--color-gray-a5)",
            token: "--color-gray-a5",
          },
          {
            name: "Gray A6 (60%)",
            value: "var(--color-gray-a6)",
            token: "--color-gray-a6",
          },
          {
            name: "Gray A7 (70%)",
            value: "var(--color-gray-a7)",
            token: "--color-gray-a7",
          },
          {
            name: "Gray A8 (80%)",
            value: "var(--color-gray-a8)",
            token: "--color-gray-a8",
          },
          {
            name: "Gray A9 (90%)",
            value: "var(--color-gray-a9)",
            token: "--color-gray-a9",
          },
        ]}
      />
    </div>
  ),
};

export const Accent: StoryObj = {
  render: () => (
    <ColorGroup
      title="Accent (アクセントカラー)"
      colors={[
        {
          name: "Accent 1",
          value: "var(--color-accent-1)",
          token: "--color-accent-1",
        },
        {
          name: "Accent 2",
          value: "var(--color-accent-2)",
          token: "--color-accent-2",
        },
        {
          name: "Accent 3",
          value: "var(--color-accent-3)",
          token: "--color-accent-3",
        },
        {
          name: "Accent 4",
          value: "var(--color-accent-4)",
          token: "--color-accent-4",
        },
        {
          name: "Accent 5",
          value: "var(--color-accent-5)",
          token: "--color-accent-5",
        },
        {
          name: "Accent 6 (Default)",
          value: "var(--color-accent-6)",
          token: "--color-accent-6",
        },
        {
          name: "Accent 7",
          value: "var(--color-accent-7)",
          token: "--color-accent-7",
        },
        {
          name: "Accent 8",
          value: "var(--color-accent-8)",
          token: "--color-accent-8",
        },
      ]}
    />
  ),
};

export const AccentAlpha: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: "var(--bg-muted)", padding: "1rem" }}>
      <ColorGroup
        title="Accent Alpha (透明度付きアクセント)"
        colors={[
          {
            name: "Accent A1 (10%)",
            value: "var(--color-accent-a1)",
            token: "--color-accent-a1",
          },
          {
            name: "Accent A2 (20%)",
            value: "var(--color-accent-a2)",
            token: "--color-accent-a2",
          },
          {
            name: "Accent A3 (30%)",
            value: "var(--color-accent-a3)",
            token: "--color-accent-a3",
          },
          {
            name: "Accent A4 (40%)",
            value: "var(--color-accent-a4)",
            token: "--color-accent-a4",
          },
          {
            name: "Accent A5 (50%)",
            value: "var(--color-accent-a5)",
            token: "--color-accent-a5",
          },
          {
            name: "Accent A6 (60%)",
            value: "var(--color-accent-a6)",
            token: "--color-accent-a6",
          },
          {
            name: "Accent A7 (70%)",
            value: "var(--color-accent-a7)",
            token: "--color-accent-a7",
          },
          {
            name: "Accent A8 (80%)",
            value: "var(--color-accent-a8)",
            token: "--color-accent-a8",
          },
          {
            name: "Accent A9 (90%)",
            value: "var(--color-accent-a9)",
            token: "--color-accent-a9",
          },
        ]}
      />
    </div>
  ),
};

export const Complementary: StoryObj = {
  render: () => (
    <ColorGroup
      title="Complementary (補色カラー)"
      colors={[
        {
          name: "Complementary 1",
          value: "var(--color-complementary-1)",
          token: "--color-complementary-1",
        },
        {
          name: "Complementary 2",
          value: "var(--color-complementary-2)",
          token: "--color-complementary-2",
        },
        {
          name: "Complementary 3",
          value: "var(--color-complementary-3)",
          token: "--color-complementary-3",
        },
        {
          name: "Complementary 4",
          value: "var(--color-complementary-4)",
          token: "--color-complementary-4",
        },
        {
          name: "Complementary 5",
          value: "var(--color-complementary-5)",
          token: "--color-complementary-5",
        },
        {
          name: "Complementary 6 (Default)",
          value: "var(--color-complementary-6)",
          token: "--color-complementary-6",
        },
        {
          name: "Complementary 7",
          value: "var(--color-complementary-7)",
          token: "--color-complementary-7",
        },
        {
          name: "Complementary 8",
          value: "var(--color-complementary-8)",
          token: "--color-complementary-8",
        },
      ]}
    />
  ),
};

export const ComplementaryAlpha: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: "var(--bg-muted)", padding: "1rem" }}>
      <ColorGroup
        title="Complementary Alpha (透明度付き補色)"
        colors={[
          {
            name: "Complementary A1 (10%)",
            value: "var(--color-complementary-a1)",
            token: "--color-complementary-a1",
          },
          {
            name: "Complementary A2 (20%)",
            value: "var(--color-complementary-a2)",
            token: "--color-complementary-a2",
          },
          {
            name: "Complementary A3 (30%)",
            value: "var(--color-complementary-a3)",
            token: "--color-complementary-a3",
          },
          {
            name: "Complementary A4 (40%)",
            value: "var(--color-complementary-a4)",
            token: "--color-complementary-a4",
          },
          {
            name: "Complementary A5 (50%)",
            value: "var(--color-complementary-a5)",
            token: "--color-complementary-a5",
          },
          {
            name: "Complementary A6 (60%)",
            value: "var(--color-complementary-a6)",
            token: "--color-complementary-a6",
          },
          {
            name: "Complementary A7 (70%)",
            value: "var(--color-complementary-a7)",
            token: "--color-complementary-a7",
          },
          {
            name: "Complementary A8 (80%)",
            value: "var(--color-complementary-a8)",
            token: "--color-complementary-a8",
          },
          {
            name: "Complementary A9 (90%)",
            value: "var(--color-complementary-a9)",
            token: "--color-complementary-a9",
          },
        ]}
      />
    </div>
  ),
};

export const Semantic: StoryObj = {
  render: () => (
    <div>
      <ColorGroup
        title="Semantic Colors (セマンティックカラー)"
        colors={[
          {
            name: "Foreground Default",
            value: "var(--fg-default)",
            token: "--fg-default",
          },
          {
            name: "Foreground Muted",
            value: "var(--fg-muted)",
            token: "--fg-muted",
          },
          {
            name: "Background Default",
            value: "var(--bg-default)",
            token: "--bg-default",
          },
          {
            name: "Background Muted",
            value: "var(--bg-muted)",
            token: "--bg-muted",
          },
          {
            name: "Accent Default",
            value: "var(--accent-default)",
            token: "--accent-default",
          },
          {
            name: "Accent Foreground",
            value: "var(--accent-fg)",
            token: "--accent-fg",
          },
          {
            name: "Border Default",
            value: "var(--border-default)",
            token: "--border-default",
          },
          {
            name: "Border Muted",
            value: "var(--border-muted)",
            token: "--border-muted",
          },
        ]}
      />
    </div>
  ),
};

export const UsageExample: StoryObj = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: "1rem" }}>使用例</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            テキストカラー
          </h4>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "var(--bg-default)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-l2)",
            }}
          >
            <p style={{ color: "var(--fg-default)", marginBottom: "0.5rem" }}>
              デフォルトテキスト (--fg-default)
            </p>
            <p style={{ color: "var(--fg-muted)" }}>
              ミュートテキスト (--fg-muted)
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            背景カラー
          </h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                flex: 1,
                padding: "2rem",
                backgroundColor: "var(--bg-default)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-l2)",
                textAlign: "center",
              }}
            >
              --bg-default
            </div>
            <div
              style={{
                flex: 1,
                padding: "2rem",
                backgroundColor: "var(--bg-muted)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-l2)",
                textAlign: "center",
              }}
            >
              --bg-muted
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            アクセントカラー
          </h4>
          <button
            type="button"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--accent-default)",
              color: "var(--accent-fg)",
              border: "none",
              borderRadius: "var(--radius-l2)",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            アクセントボタン
          </button>
        </div>

        <div>
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
            ボーダーカラー
          </h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                flex: 1,
                padding: "2rem",
                border: "2px solid var(--border-default)",
                borderRadius: "var(--radius-l2)",
                textAlign: "center",
              }}
            >
              --border-default
            </div>
            <div
              style={{
                flex: 1,
                padding: "2rem",
                border: "2px solid var(--border-muted)",
                borderRadius: "var(--radius-l2)",
                textAlign: "center",
              }}
            >
              --border-muted
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
