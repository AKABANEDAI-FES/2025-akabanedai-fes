import clsx from "clsx";
import styles from "./container.module.css";

export type Props = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

/**
 * コンテナのCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントにコンテナスタイルを適用
 * <Box className={container()}>コンテンツ</Box>
 * @returns コンテナ用のCSSクラス名
 */
export function container() {
  return styles.container;
}

/**
 * コンテンツを中央に配置し、最大幅を制限するUIコンポーネント
 *
 * @description
 * ページの主要なコンテンツを中央に配置し、読みやすさを向上させるためのコンテナコンポーネント。
 * 任意のHTML要素としてレンダリング可能。
 *
 * @example
 * // 基本的な使用方法（divとして）
 * <Container>これはコンテナ内のコンテンツです。</Container>
 *
 * @example
 * // section要素として使用
 * <Container as="section">セクションコンテンツ</Container>
 *
 * @example
 * // カスタムクラスを追加
 * <Container className="custom-container">カスタムスタイルを適用したコンテナ</Container>
 *
 * @param props - ContainerコンポーネントのProps
 */
export function Container({
  as: Component = "div",
  className,
  ...props
}: Props) {
  return <Component className={clsx(container(), className)} {...props} />;
}
