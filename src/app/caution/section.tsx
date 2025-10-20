import type { JSX } from "react";
import { BlurredBox } from "@/components/ui/blurred-box";
import styles from "./section.module.css";

interface SectionProps
  extends Omit<JSX.IntrinsicElements["section"], "children"> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <BlurredBox
      className={[styles.noticeSection, className].filter(Boolean).join(" ")}
      {...props}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div>{children}</div>
    </BlurredBox>
  );
};

export default Section;
