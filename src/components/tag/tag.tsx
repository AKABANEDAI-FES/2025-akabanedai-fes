import clsx from "clsx";
import styles from "./tag.module.css";

export type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Tag({ children, size = "md", className }: Props) {
  return (
    <span className={clsx(styles.tag, className)} data-size={size}>
      {children}
    </span>
  );
}
