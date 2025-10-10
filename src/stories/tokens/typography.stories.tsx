import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "デザイントークン/Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const FontSizes: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Font Sizes (フォントサイズ)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          { name: "Extra Small", token: "--font-size-xs", value: "0.75rem" },
          { name: "Small", token: "--font-size-sm", value: "0.875rem" },
          { name: "Medium", token: "--font-size-md", value: "1rem" },
          { name: "Large", token: "--font-size-lg", value: "1.125rem" },
          { name: "Extra Large", token: "--font-size-xl", value: "1.25rem" },
          { name: "2XL", token: "--font-size-2xl", value: "1.5rem" },
          { name: "3XL", token: "--font-size-3xl", value: "1.875rem" },
          { name: "4XL", token: "--font-size-4xl", value: "2.25rem" },
          { name: "5XL", token: "--font-size-5xl", value: "3rem" },
          { name: "6XL", token: "--font-size-6xl", value: "3.75rem" },
          { name: "7XL", token: "--font-size-7xl", value: "4.5rem" },
          { name: "8XL", token: "--font-size-8xl", value: "6rem" },
        ].map(({ name, token, value }) => (
          <div key={token}>
            <div
              style={{
                fontSize: `var(${token})`,
                marginBottom: "0.25rem",
              }}
            >
              あAa赤羽台祭
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              {name} - {token} ({value})
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Font Weights (フォントウェイト)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          { name: "Thin", token: "--font-weight-thin", value: "100" },
          {
            name: "Extra Light",
            token: "--font-weight-extralight",
            value: "200",
          },
          { name: "Light", token: "--font-weight-light", value: "300" },
          { name: "Normal", token: "--font-weight-normal", value: "400" },
          { name: "Medium", token: "--font-weight-medium", value: "500" },
          { name: "Semibold", token: "--font-weight-semibold", value: "600" },
          { name: "Bold", token: "--font-weight-bold", value: "700" },
          {
            name: "Extra Bold",
            token: "--font-weight-extrabold",
            value: "800",
          },
          { name: "Black", token: "--font-weight-black", value: "900" },
        ].map(({ name, token, value }) => (
          <div key={token}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: `var(${token})`,
                marginBottom: "0.25rem",
              }}
            >
              あAa赤羽台祭 2025
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              {name} - {token} ({value})
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const LineHeights: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Line Heights (行間)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {[
          { name: "None", token: "--line-heights-none", value: "1" },
          { name: "Tight", token: "--line-heights-tight", value: "1.25" },
          { name: "Normal", token: "--line-heights-normal", value: "1.5" },
          { name: "Relaxed", token: "--line-heights-relaxed", value: "1.75" },
          { name: "Loose", token: "--line-heights-loose", value: "2" },
        ].map(({ name, token, value }) => (
          <div key={token}>
            <div
              style={{
                fontSize: "1rem",
                lineHeight: `var(${token})`,
                padding: "0.5rem",
                backgroundColor: "var(--bg-muted)",
                borderRadius: "var(--radius-l1)",
                marginBottom: "0.5rem",
              }}
            >
              赤羽台祭は、学生が主体となって企画・運営する学園祭です。様々なイベントを通じて、学生同士の交流を深め、地域の皆様とのつながりを大切にしています。
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              {name} - {token} ({value})
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const FontFamily: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Font Family (フォントファミリー)
      </h3>
      <div>
        <div
          style={{
            fontSize: "1.25rem",
            fontFamily: "var(--font-sans-jp)",
            marginBottom: "0.5rem",
            padding: "1rem",
            backgroundColor: "var(--bg-muted)",
            borderRadius: "var(--radius-l2)",
          }}
        >
          <p style={{ marginBottom: "0.5rem" }}>
            赤羽台祭 2025 - Akabanedai Festival
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            あいうえお かきくけこ さしすせそ
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            アイウエオ カキクケコ サシスセソ
          </p>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>0123456789</p>
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--fg-muted)",
            fontFamily: "monospace",
          }}
        >
          --font-sans-jp
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--fg-muted)",
            marginTop: "0.5rem",
          }}
        >
          "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Noto
          Sans CJK JP", roboto, "Helvetica Neue", arial, "Yu Gothic", meiryo,
          sans-serif
        </div>
      </div>
    </div>
  ),
};

export const TypographyScale: StoryObj = {
  render: () => (
    <div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Typography Scale (タイポグラフィスケール)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h4
            style={{
              fontSize: "var(--font-size-6xl)",
              fontWeight: "var(--font-weight-bold)",
              lineHeight: "var(--line-heights-tight)",
              marginBottom: "0.5rem",
            }}
          >
            見出し 6XL
          </h4>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-6xl + font-weight-bold + line-heights-tight
          </div>
        </div>

        <div>
          <h4
            style={{
              fontSize: "var(--font-size-4xl)",
              fontWeight: "var(--font-weight-bold)",
              lineHeight: "var(--line-heights-tight)",
              marginBottom: "0.5rem",
            }}
          >
            見出し 4XL
          </h4>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-4xl + font-weight-bold + line-heights-tight
          </div>
        </div>

        <div>
          <h4
            style={{
              fontSize: "var(--font-size-2xl)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "var(--line-heights-tight)",
              marginBottom: "0.5rem",
            }}
          >
            見出し 2XL
          </h4>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-2xl + font-weight-semibold + line-heights-tight
          </div>
        </div>

        <div>
          <p
            style={{
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "var(--line-heights-relaxed)",
              marginBottom: "0.5rem",
            }}
          >
            本文テキスト Large -
            赤羽台祭は、学生が主体となって企画・運営する学園祭です。様々なイベントを通じて、学生同士の交流を深めています。
          </p>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-lg + font-weight-normal + line-heights-relaxed
          </div>
        </div>

        <div>
          <p
            style={{
              fontSize: "var(--font-size-md)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "var(--line-heights-normal)",
              marginBottom: "0.5rem",
            }}
          >
            本文テキスト Medium -
            赤羽台祭は、学生が主体となって企画・運営する学園祭です。様々なイベントを通じて、学生同士の交流を深めています。
          </p>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-md + font-weight-normal + line-heights-normal
          </div>
        </div>

        <div>
          <p
            style={{
              fontSize: "var(--font-size-sm)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "var(--line-heights-normal)",
              color: "var(--fg-muted)",
              marginBottom: "0.5rem",
            }}
          >
            補足テキスト Small - 注釈や補助的な情報を表示する際に使用します。
          </p>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--fg-muted)",
              fontFamily: "monospace",
            }}
          >
            font-size-sm + font-weight-normal + line-heights-normal + fg-muted
          </div>
        </div>
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
      <div
        style={{
          padding: "var(--space-xl)",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
        }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-5xl)",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "var(--line-heights-tight)",
            marginBottom: "var(--space-md)",
          }}
        >
          赤羽台祭 2025
        </h1>

        <h2
          style={{
            fontSize: "var(--font-size-3xl)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "var(--line-heights-tight)",
            marginBottom: "var(--space-sm)",
            marginTop: "var(--space-lg)",
          }}
        >
          イベント情報
        </h2>

        <p
          style={{
            fontSize: "var(--font-size-md)",
            fontWeight: "var(--font-weight-normal)",
            lineHeight: "var(--line-heights-relaxed)",
            marginBottom: "var(--space-md)",
          }}
        >
          赤羽台祭は、学生が主体となって企画・運営する学園祭です。様々なイベントを通じて、学生同士の交流を深め、地域の皆様とのつながりを大切にしています。
        </p>

        <h3
          style={{
            fontSize: "var(--font-size-xl)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "var(--line-heights-tight)",
            marginBottom: "var(--space-sm)",
          }}
        >
          開催日時
        </h3>

        <p
          style={{
            fontSize: "var(--font-size-md)",
            fontWeight: "var(--font-weight-normal)",
            lineHeight: "var(--line-heights-normal)",
            marginBottom: "var(--space-sm)",
          }}
        >
          2025年10月11日(土) - 12日(日)
        </p>

        <p
          style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-normal)",
            lineHeight: "var(--line-heights-normal)",
            color: "var(--fg-muted)",
          }}
        >
          ※雨天決行・荒天中止
        </p>
      </div>
    </div>
  ),
};
