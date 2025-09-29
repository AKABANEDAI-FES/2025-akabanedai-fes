import { clsx } from "clsx";
import styles from "./heading.module.css";

/**
 * 見出しのバリアント別CSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントに見出しスタイルを適用
 * <Title className={heading({ variant: "primary" })}>タイトル</Title>
 * @param params - 見出しのパラメータオブジェクト
 * @returns バリアントに対応するCSSクラス名
 */
export function heading({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) {
  return variant === "primary" ? styles.primary : styles.secondary;
}

export type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & Parameters<typeof heading>[0] &
  React.HTMLAttributes<HTMLHeadingElement>;

/**
 * 見出し表示用のUIコンポーネント
 *
 * @description
 * セマンティックなHTML見出し要素（h1-h6）と統一されたスタイリングを提供するコンポーネント。
 * primaryとsecondaryの2つのスタイルバリアントを選択可能。
 *
 * @example
 * // メインタイトルとして（h1要素）
 * <Heading as="h1">赤羽台祭2025</Heading>
 *
 * @example
 * // セクションタイトルとして（h2要素、secondaryスタイル）
 * <Heading as="h2" variant="secondary">イベント情報</Heading>
 *
 * @example
 * // カスタムクラスを追加
 * <Heading as="h2" className="special-heading">
 *   特別企画
 * </Heading>
 *
 * @param props - HeadingコンポーネントのProps
 */
export function Heading({
  as: Component,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <Component className={clsx(heading({ variant }), className)} {...props} />
  );
}
