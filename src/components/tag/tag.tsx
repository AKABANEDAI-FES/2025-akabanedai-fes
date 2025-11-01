import clsx from "clsx";
import styles from "./tag.module.css";

export function tag({ size }: { size: "sm" | "md" | "lg" }) {
  return clsx(
    styles.tag,
    { sm: styles.sm, md: styles.md, lg: styles.lg }[size],
  );
}

export type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Tag({ children, size = "md", className }: Props) {
  return <span className={clsx(tag({ size }), className)}>{children}</span>;
}
