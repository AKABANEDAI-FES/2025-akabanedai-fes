import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "デザイントークン/Spacing",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

const SpacingItem = ({
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
      marginBottom: "0.75rem",
    }}
  >
    <div
      style={{
        width: value,
        height: "40px",
        backgroundColor: "var(--accent-default)",
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
        {token} = {value}
      </div>
    </div>
  </div>
);

export const SpacingScale: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Spacing Scale (スペーシングスケール)
      </h3>
      <SpacingItem
        name="Extra Small"
        value="var(--space-xs)"
        token="--space-xs"
      />
      <SpacingItem name="Small" value="var(--space-sm)" token="--space-sm" />
      <SpacingItem name="Medium" value="var(--space-md)" token="--space-md" />
      <SpacingItem name="Large" value="var(--space-lg)" token="--space-lg" />
      <SpacingItem
        name="Extra Large"
        value="var(--space-xl)"
        token="--space-xl"
      />
      <SpacingItem name="2XL" value="var(--space-2xl)" token="--space-2xl" />
      <SpacingItem name="3XL" value="var(--space-3xl)" token="--space-3xl" />
      <SpacingItem name="4XL" value="var(--space-4xl)" token="--space-4xl" />
      <SpacingItem name="5XL" value="var(--space-5xl)" token="--space-5xl" />
      <SpacingItem name="6XL" value="var(--space-6xl)" token="--space-6xl" />
      <SpacingItem name="7XL" value="var(--space-7xl)" token="--space-7xl" />
      <SpacingItem name="8XL" value="var(--space-8xl)" token="--space-8xl" />
    </div>
  ),
};

export const BorderRadius: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Border Radius (角丸)
      </h3>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--accent-default)",
              borderRadius: "var(--radius-l1)",
              marginBottom: "0.5rem",
            }}
          />
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Level 1</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --radius-l1
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            0.25rem
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--accent-default)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          />
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Level 2</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --radius-l2
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            0.5rem
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--accent-default)",
              borderRadius: "var(--radius-l3)",
              marginBottom: "0.5rem",
            }}
          />
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Level 3</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --radius-l3
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            0.75rem
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--accent-default)",
              borderRadius: "var(--radius-full)",
              marginBottom: "0.5rem",
            }}
          />
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Full</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --radius-full
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            9999px
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Shadows: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Shadows (シャドウ)
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg-default)",
              boxShadow: "var(--shadow-xs)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          >
            Box
          </div>
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
            Extra Small
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --shadow-xs
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg-default)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          >
            Box
          </div>
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Small</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --shadow-sm
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg-default)",
              boxShadow: "var(--shadow-md)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          >
            Box
          </div>
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Medium</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --shadow-md
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg-default)",
              boxShadow: "var(--shadow-lg)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          >
            Box
          </div>
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>Large</div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --shadow-lg
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--bg-default)",
              boxShadow: "var(--shadow-xl)",
              borderRadius: "var(--radius-l2)",
              marginBottom: "0.5rem",
            }}
          >
            Box
          </div>
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
            Extra Large
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            --shadow-xl
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Sizes (サイズ)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {[
          { name: "Extra Small", token: "--size-xs", value: "20rem" },
          { name: "Small", token: "--size-sm", value: "24rem" },
          { name: "Medium", token: "--size-md", value: "28rem" },
          { name: "Large", token: "--size-lg", value: "32rem" },
          { name: "Extra Large", token: "--size-xl", value: "36rem" },
          { name: "2XL", token: "--size-2xl", value: "42rem" },
          { name: "3XL", token: "--size-3xl", value: "48rem" },
          { name: "4XL", token: "--size-4xl", value: "56rem" },
          { name: "5XL", token: "--size-5xl", value: "64rem" },
          { name: "6XL", token: "--size-6xl", value: "72rem" },
          { name: "7XL", token: "--size-7xl", value: "80rem" },
          { name: "8XL", token: "--size-8xl", value: "90rem" },
          { name: "Full", token: "--size-full", value: "100%" },
        ].map(({ name, token, value }) => (
          <div
            key={token}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "150px",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
                width: "120px",
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
        ))}
      </div>
    </div>
  ),
};

export const UsageExample: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        使用例
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "0.875rem" }}>
            Spacing (余白)
          </h4>
          <div
            style={{
              padding: "var(--space-lg)",
              backgroundColor: "var(--bg-muted)",
              borderRadius: "var(--radius-l2)",
            }}
          >
            <div
              style={{
                padding: "var(--space-md)",
                backgroundColor: "var(--accent-default)",
                color: "var(--accent-fg)",
                borderRadius: "var(--radius-l1)",
                marginBottom: "var(--space-sm)",
              }}
            >
              padding: var(--space-md)
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
              外側の余白: var(--space-lg)
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "0.875rem" }}>
            Border Radius + Shadow (角丸 + シャドウ)
          </h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                flex: 1,
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-default)",
                borderRadius: "var(--radius-l2)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                カードコンポーネント
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
                radius-l2 + shadow-md
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "0.875rem" }}>
            Max Width (最大幅)
          </h4>
          <div
            style={{
              maxWidth: "var(--size-3xl)",
              padding: "var(--space-lg)",
              backgroundColor: "var(--bg-muted)",
              borderRadius: "var(--radius-l2)",
            }}
          >
            <p style={{ marginBottom: "var(--space-sm)" }}>
              このコンテンツの最大幅は --size-3xl (48rem) に設定されています。
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>
              max-width: var(--size-3xl)
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
