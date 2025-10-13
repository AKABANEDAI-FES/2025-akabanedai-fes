import clsx from "clsx";
import type { JSX } from "react";
import styles from "./link-button.module.css";

/**
 * リンクボタンスタイルのCSSクラス名を返すヘルパー関数
 * @example
 * // カスタムコンポーネントにリンクボタンスタイルを適用
 * <Link className={linkButton()}>詳しくはこちら</Link>
 * @returns リンクボタン用のCSSクラス名
 */
export function linkButton() {
  return styles.linkButton;
}

export type Props = JSX.IntrinsicElements["a"];

/**
 * リンクボタン用のUIコンポーネント
 *
 * @description
 * ボタンのような見た目のリンクを提供するコンポーネント。
 * アンカー要素（a）としてレンダリングされ、すべての標準的なリンク属性をサポート。
 *
 * @example
 * // 基本的な使用方法
 * <LinkButton href="/access">アクセス情報</LinkButton>
 *
 * @example
 * // 外部リンクとして使用
 * <LinkButton href="https://example.com" target="_blank" rel="noopener noreferrer">
 *   外部サイトへ
 * </LinkButton>
 *
 * @example
 * // カスタムクラスを追加
 * <LinkButton href="#" className="custom-style">
 *   カスタムスタイル
 * </LinkButton>
 *
 * @param props - LinkButtonコンポーネントのProps（標準的なアンカー要素の属性）
 */
export function LinkButton({ className, ...props }: Props) {
  return <a className={clsx(linkButton(), className)} {...props} />;
}
