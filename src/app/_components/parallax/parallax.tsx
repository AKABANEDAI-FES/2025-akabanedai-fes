import clsx from "clsx";
import type { JSX } from "react";
import styles from "./parallax.module.css";

type ParallaxItem = {
  top: string;
  left: string;
  layer: number;
};
const PARALLAX_ITEMS: ParallaxItem[] = [
  // 奥
  { top: "20%", left: "15%", layer: -2 },
  { top: "85%", left: "80%", layer: -2 },

  // 中奥
  { top: "40%", left: "80%", layer: -1 },
  { top: "55%", left: "5%", layer: -1 },

  // 中央
  { top: "45%", left: "50%", layer: 0 },

  // 中手前
  { top: "60%", left: "70%", layer: 1 },

  // 手前
  { top: "65%", left: "20%", layer: 2 },
];

export type RootProps = JSX.IntrinsicElements["div"];

export function Root({ className, ...props }: RootProps) {
  return <div className={clsx(styles.parallax, className)} {...props} />;
}

export type LayerProps = JSX.IntrinsicElements["div"];

export function Layer({ className, ...props }: LayerProps) {
  return (
    <div className={clsx(styles.layer, className)} {...props}>
      {PARALLAX_ITEMS.map(({ top, left, layer }, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: static array
          key={index}
          className={styles.layerScene}
          style={
            { top, left, "--parallax-layer": layer } as React.CSSProperties
          }
        >
          <div className={styles.item} />
        </div>
      ))}
    </div>
  );
}

export type ContentProps = JSX.IntrinsicElements["div"];

export function Content({ className, ...props }: ContentProps) {
  return <div className={clsx(styles.content, className)} {...props} />;
}
