import clsx from "clsx";
import type { JSX } from "react";
import styles from "./parallax.module.css";

type ParallaxItem = (
  | {
      top: string;
      bottom?: undefined;
    }
  | {
      top?: undefined;
      bottom: string;
    }
) &
  (
    | {
        left: string;
        right?: undefined;
      }
    | {
        right: string;
        left?: undefined;
      }
  ) & {
    layer: number;
  };
const PARALLAX_ITEMS: ParallaxItem[] = [
  { top: "-40%", left: "-10%", layer: -2 },
  { top: "-26%", right: "-40%", layer: -3 },
  { top: "42%", left: "-12%", layer: 0 },
  { bottom: "16%", right: "-15%", layer: 0 },
  { top: "12%", left: "-25%", layer: -1 },
  { bottom: "8%", left: "-18%", layer: -2 },
  { top: "28%", right: "-40%", layer: -4 },
  { bottom: "44%", left: "-20%", layer: -5 },
  { bottom: "0%", right: "-35%", layer: -6 },
];

export type RootProps = JSX.IntrinsicElements["div"];

export function Root({ className, ...props }: RootProps) {
  return <div className={clsx(styles.parallax, className)} {...props} />;
}

export type LayerProps = JSX.IntrinsicElements["div"];

export function Layer({ className, ...props }: LayerProps) {
  return (
    <div className={clsx(styles.layer, className)} {...props}>
      {PARALLAX_ITEMS.map(({ top, bottom, left, right, layer }, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: static array
          key={index}
          className={styles.layerScene}
          style={
            {
              top,
              bottom,
              left,
              right,
              "--parallax-layer": layer,
            } as React.CSSProperties
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
