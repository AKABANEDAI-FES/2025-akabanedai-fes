import clsx from "clsx";
import styles from "./visually-hidden.module.css";

/**
 * スクリーンリーダー専用のCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントに視覚的に隠すスタイルを適用
 * <Label className={visuallyHidden()}>アイコンの説明</Label>
 * @returns スクリーンリーダー専用（視覚的に隠す）のCSSクラス名
 */
export function visuallyHidden() {
  return styles.srOnly;
}

export type Props<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentProps<T>;

/**
 * スクリーンリーダー専用のコンテンツを提供するUIコンポーネント
 *
 * @description
 * 視覚的には隠れているが、スクリーンリーダーなどの支援技術には読み上げられる要素を作成するコンポーネント。
 * アクセシビリティ向上のために、視覚的な情報を補足する説明文などに使用。
 *
 * @example
 * // ボタンの補足説明として
 * <button>
 *   <svg>...</svg>
 *   <VisuallyHidden>メニュー</VisuallyHidden>
 * </button>
 *
 * @param props - VisuallyHiddenコンポーネントのProps
 */
export function VisuallyHidden<T extends React.ElementType = "div">({
  as: Component = "div",
  className,
  ...props
}: Props<T>) {
  return <Component className={clsx(visuallyHidden(), className)} {...props} />;
}
