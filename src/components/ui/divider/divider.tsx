import { clsx } from "clsx";
import type { JSX } from "react";
import styles from "./divider.module.css";

/**
 * 区切り線のバリアント別CSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントに区切り線スタイルを適用
 * <Separator className={divider({ variant: "vertical" })} />
 * @param params - 区切り線のパラメータオブジェクト
 * @returns バリアントに対応するCSSクラス名の組み合わせ
 */
export function divider({
  variant = "horizontal",
}: {
  variant?: "vertical" | "horizontal";
}) {
  return clsx(
    styles.divider,
    variant === "vertical" ? styles.vertical : styles.horizontal,
  );
}

export type Props = Parameters<typeof divider>[0] &
  JSX.IntrinsicElements["div"];

/**
 * 視覚的な区切り線を表示するUIコンポーネント
 *
 * @description
 * コンテンツを視覚的に分離するための区切り線コンポーネント。
 * 水平（horizontal）と垂直（vertical）の2つの向きから選択可能。
 *
 * @example
 * // セクション間の水平区切り線（デフォルト）
 * <Divider />
 *
 * @example
 * // 明示的に水平区切り線を指定
 * <Divider variant="horizontal" />
 *
 * @example
 * // 垂直区切り線（サイドバーとメインコンテンツの間など）
 * <Divider variant="vertical" />
 *
 * @example
 * // カスタムスタイルを適用
 * <Divider className="thick-divider" />
 *
 * @param props - DividerコンポーネントのProps
 */
export function Divider({
  variant = "horizontal",
  className,
  ...props
}: Props) {
  return <div className={clsx(divider({ variant }), className)} {...props} />;
}
