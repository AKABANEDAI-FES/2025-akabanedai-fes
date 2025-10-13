import clsx from "clsx";
import styles from "./blurred-box.module.css";

export type Props = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

/**
 * ブラーボックスのCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントにブラーボックススタイルを適用
 * <Box className={blurredBox()}>コンテンツ</Box>
 * @returns ブラーボックス用のCSSクラス名
 */
export function blurredBox() {
  return styles.blurredBox;
}

/**
 * 背景をぼかして半透明にするUIコンポーネント
 *
 * @description
 * 背景と同化しないようにbackdrop-filterでブラーをかけ、半透明の白背景を適用するコンポーネント。
 * 任意のHTML要素としてレンダリング可能。
 *
 * @example
 * // 基本的な使用方法（divとして）
 * <BlurredBox>これはブラーボックス内のコンテンツです。</BlurredBox>
 *
 * @example
 * // section要素として使用
 * <BlurredBox as="section">セクションコンテンツ</BlurredBox>
 *
 * @example
 * // カスタムクラスを追加
 * <BlurredBox className="custom-box">カスタムスタイルを適用したボックス</BlurredBox>
 *
 * @param props - BlurredBoxコンポーネントのProps
 */
export function BlurredBox({
  as: Component = "div",
  className,
  ...props
}: Props) {
  return <Component className={clsx(blurredBox(), className)} {...props} />;
}
