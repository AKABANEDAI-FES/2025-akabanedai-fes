import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "デザイントークン/Breakpoints",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

const BreakpointIndicator = () => (
  <div
    style={{
      position: "fixed",
      top: "0",
      right: "0",
      padding: "0.5rem 1rem",
      backgroundColor: "var(--theme-default)",
      color: "var(--theme-fg)",
      fontSize: "0.75rem",
      fontWeight: "600",
      zIndex: 9999,
      fontFamily: "monospace",
    }}
  >
    <span className="mobile">Mobile (&lt; 640px)</span>
    <span className="small-tablet">Small Tablet (640px - 767px)</span>
    <span className="tablet">Tablet (768px - 1023px)</span>
    <span className="desktop">Desktop (1024px - 1279px)</span>
    <span className="large-desktop">Large Desktop (≥ 1280px)</span>
    <style>
      {`
        .mobile, .small-tablet, .tablet, .desktop, .large-desktop {
          display: none;
        }

        .mobile {
          display: inline;
        }

        @media (width >= 40rem) {
          .mobile {
            display: none;
          }
          .small-tablet {
            display: inline;
          }
        }

        @media (width >= 48rem) {
          .small-tablet {
            display: none;
          }
          .tablet {
            display: inline;
          }
        }

        @media (width >= 64rem) {
          .tablet {
            display: none;
          }
          .desktop {
            display: inline;
          }
        }

        @media (width >= 80rem) {
          .desktop {
            display: none;
          }
          .large-desktop {
            display: inline;
          }
        }
      `}
    </style>
  </div>
);

export const BreakpointList: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <BreakpointIndicator />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Breakpoints (ブレークポイント)
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-muted)",
            borderRadius: "var(--radius-l2)",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "0.875rem" }}>
              48rem (主要ブレークポイント)
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              @media (width &gt;= 48rem) - タブレット以上 (768px)
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-muted)",
            borderRadius: "var(--radius-l2)",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "0.875rem" }}>
              64rem (主要ブレークポイント)
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              @media (width &gt;= 64rem) - デスクトップ以上 (1024px)
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-muted)",
            borderRadius: "var(--radius-l2)",
            opacity: 0.6,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "0.875rem" }}>
              40rem (補助的なブレークポイント)
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              @media (width &gt;= 40rem) - 小型タブレット (640px)
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-muted)",
            borderRadius: "var(--radius-l2)",
            opacity: 0.6,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600", fontSize: "0.875rem" }}>
              80rem (補助的なブレークポイント)
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                fontFamily: "monospace",
              }}
            >
              @media (width &gt;= 80rem) - 大型デスクトップ (1280px)
            </div>
          </div>
        </div>
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.875rem",
          color: "var(--fg-muted)",
        }}
      >
        ブラウザのウィンドウサイズを変更して、右上のインジケーターで現在のブレークポイントを確認してください。
      </p>
    </div>
  ),
};

export const ResponsiveLayout: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <BreakpointIndicator />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        レスポンシブレイアウトの例
      </h3>

      <div
        style={{
          display: "grid",
        }}
        className="responsive-grid"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            style={{
              padding: "var(--space-lg)",
              backgroundColor: "var(--theme-default)",
              color: "var(--theme-fg)",
              borderRadius: "var(--radius-l2)",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            アイテム {num}
          </div>
        ))}
      </div>

      <style>
        {`
        .responsive-grid {
          grid-template-columns: 1fr;
          gap: var(--space-md);
        }

        @media (width >= 48rem) {
          .responsive-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-lg);
          }
        }

        @media (width >= 64rem) {
          .responsive-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-xl);
          }
        }
      `}
      </style>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
          レイアウトの変化:
        </p>
        <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
          <li>モバイル: 1カラム</li>
          <li>タブレット (≥ 48rem): 2カラム</li>
          <li>デスクトップ (≥ 64rem): 3カラム</li>
        </ul>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <BreakpointIndicator />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        レスポンシブタイポグラフィの例
      </h3>

      <div
        style={{
          padding: "var(--space-lg)",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
        }}
      >
        <h1 className="responsive-heading">レスポンシブな見出し</h1>
        <p className="responsive-text">
          このテキストは画面サイズに応じてフォントサイズが変わります。ブラウザのウィンドウサイズを変更して確認してください。
        </p>
      </div>

      <style>
        {`
        .responsive-heading {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-heights-tight);
          margin-bottom: var(--space-md);
        }

        .responsive-text {
          font-size: var(--font-size-sm);
          line-height: var(--line-heights-relaxed);
          color: var(--fg-muted);
        }

        @media (width >= 48rem) {
          .responsive-heading {
            font-size: var(--font-size-4xl);
          }

          .responsive-text {
            font-size: var(--font-size-md);
          }
        }

        @media (width >= 64rem) {
          .responsive-heading {
            font-size: var(--font-size-5xl);
          }

          .responsive-text {
            font-size: var(--font-size-lg);
          }
        }
      `}
      </style>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
          フォントサイズの変化:
        </p>
        <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
          <li>
            見出し: 2xl (モバイル) → 4xl (タブレット) → 5xl (デスクトップ)
          </li>
          <li>本文: sm (モバイル) → md (タブレット) → lg (デスクトップ)</li>
        </ul>
      </div>
    </div>
  ),
};

export const ResponsiveSpacing: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <BreakpointIndicator />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        レスポンシブスペーシングの例
      </h3>

      <div className="responsive-container">
        <div className="responsive-card">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            レスポンシブカード
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)" }}>
            パディングが画面サイズに応じて変化します
          </p>
        </div>
      </div>

      <style>
        {`
        .responsive-container {
          padding: var(--space-md);
          backgroundColor: var(--bg-muted);
          borderRadius: var(--radius-l2);
        }

        .responsive-card {
          padding: var(--space-md);
          backgroundColor: var(--bg-default);
          borderRadius: var(--radius-l2);
          boxShadow: var(--shadow-sm);
        }

        @media (width >= 48rem) {
          .responsive-container {
            padding: var(--space-lg);
          }

          .responsive-card {
            padding: var(--space-lg);
            boxShadow: var(--shadow-md);
          }
        }

        @media (width >= 64rem) {
          .responsive-container {
            padding: var(--space-xl);
          }

          .responsive-card {
            padding: var(--space-xl);
            boxShadow: var(--shadow-lg);
          }
        }
      `}
      </style>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
          スペーシングの変化:
        </p>
        <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
          <li>コンテナ: md → lg → xl</li>
          <li>カード: md → lg → xl</li>
          <li>シャドウ: sm → md → lg</li>
        </ul>
      </div>
    </div>
  ),
};

export const ShowHideElements: StoryObj = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <BreakpointIndicator />
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        要素の表示/非表示の例
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div
          className="mobile-only"
          style={{
            padding: "var(--space-lg)",
            backgroundColor: "var(--color-theme-1)",
            borderRadius: "var(--radius-l2)",
            border: "2px solid var(--theme-default)",
          }}
        >
          <strong>モバイルのみ表示</strong>
          <p style={{ fontSize: "0.875rem", margin: "0.5rem 0 0 0" }}>
            タブレット以上では非表示になります
          </p>
        </div>

        <div
          className="tablet-up"
          style={{
            padding: "var(--space-lg)",
            backgroundColor: "var(--color-accent-1)",
            borderRadius: "var(--radius-l2)",
            border: "2px solid var(--color-accent-6)",
          }}
        >
          <strong>タブレット以上で表示</strong>
          <p style={{ fontSize: "0.875rem", margin: "0.5rem 0 0 0" }}>
            モバイルでは非表示になります
          </p>
        </div>

        <div
          className="desktop-up"
          style={{
            padding: "var(--space-lg)",
            backgroundColor: "var(--color-theme-1)",
            borderRadius: "var(--radius-l2)",
            border: "2px solid var(--theme-default)",
          }}
        >
          <strong>デスクトップ以上で表示</strong>
          <p style={{ fontSize: "0.875rem", margin: "0.5rem 0 0 0" }}>
            タブレット以下では非表示になります
          </p>
        </div>
      </div>

      <style>
        {`
        .mobile-only {
          display: block;
        }

        .tablet-up,
        .desktop-up {
          display: none;
        }

        @media (width >= 48rem) {
          .mobile-only {
            display: none;
          }

          .tablet-up {
            display: block;
          }
        }

        @media (width >= 64rem) {
          .desktop-up {
            display: block;
          }
        }
      `}
      </style>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "var(--bg-muted)",
          borderRadius: "var(--radius-l2)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>実装例:</p>
        <pre
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            backgroundColor: "var(--bg-default)",
            padding: "0.5rem",
            borderRadius: "var(--radius-l1)",
            overflow: "auto",
          }}
        >
          {`.mobile-only {
  display: block;
}

@media (width >= 48rem) {
  .mobile-only {
    display: none;
  }
}`}
        </pre>
      </div>
    </div>
  ),
};
