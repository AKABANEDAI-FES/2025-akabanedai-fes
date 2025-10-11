import { clsx } from "clsx";
import styles from "./text.module.css";

/**
 * テキストスタイルのCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントにテキストスタイルを適用
 * <Link className={text()}>リンクテキスト</Link>
 * @returns テキスト用のCSSクラス名
 */
export function text() {
  return styles.text;
}

export type Props<T extends React.ElementType = "p"> = {
  as?: T;
} & React.ComponentProps<T>;

/**
 * テキスト表示用のUIコンポーネント
 *
 * @description
 * 統一されたテキストスタイルを提供するコンポーネント。
 * 段落（p）、span、divなど任意のHTML要素としてレンダリング可能。
 *
 * @example
 * // 基本的な使用方法（段落として）
 * <Text>これは基本的なテキストです。</Text>
 *
 * @example
 * // span要素として使用
 * <Text as="span">インライン要素として表示</Text>
 *
 * @example
 * // カスタムクラスを追加
 * <Text className="custom-style">カスタムスタイルを適用したテキスト</Text>
 *
 * @param props - TextコンポーネントのProps
 */
export function Text<T extends React.ElementType = "p">({
  as: Component = "p",
  className,
  ...props
}: Props<T>) {
  return <Component className={clsx(text(), className)} {...props} />;
}
