import clsx from "clsx";
import type { JSX } from "react";
import Star from "@/assets/star.svg";
import { Divider } from "@/components/ui/divider";
import styles from "./star-decoration.module.css";

function Root({ children, className, ...props }: StarDecoration.RootProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
}

function Decoration({ className, ...props }: StarDecoration.DecorationProps) {
  return (
    <div className={clsx(styles.decoration, className)} {...props}>
      <Star className={styles.star} />
      <Divider className={styles.divider} />
      <Star className={styles.star} />
    </div>
  );
}

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function StarDecoration({ children, ...props }: Props) {
  return (
    <Root {...props}>
      {children}
      <Decoration />
    </Root>
  );
}

StarDecoration.Root = Root;
StarDecoration.Decoration = Decoration;

export namespace StarDecoration {
  export type RootProps = JSX.IntrinsicElements["div"];
  export type DecorationProps = JSX.IntrinsicElements["div"];
}
