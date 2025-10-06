import clsx from "clsx";
import Star from "@/assets/star.svg";
import { Divider } from "@/components/ui/divider";
import styles from "./star-decoration.module.css";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function StarDecoration({ className, children }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      {children}
      <div className={styles.decoration}>
        <Star className={styles.star} />
        <Divider className={styles.divider} />
        <Star className={styles.star} />
      </div>
    </div>
  );
}
