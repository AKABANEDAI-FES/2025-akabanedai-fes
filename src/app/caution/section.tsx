import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import styles from "./section.module.css";

interface SectionProps
  extends Omit<JSX.IntrinsicElements["section"], "children"> {
  title: string;
  children: ReactNode;
}

export default function Section({
  title,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <BlurredBox
      as="section"
      className={clsx(styles.noticeSection, className)}
      {...props}
    >
      <Heading as="h2" className={styles.sectionTitle}>
        {title}
      </Heading>
      <div>{children}</div>
    </BlurredBox>
  );
}
