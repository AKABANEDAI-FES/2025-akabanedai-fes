import React from 'react';
import type { JSX } from "react";
import styles from './section.module.css';

interface SectionProps extends Omit<JSX.IntrinsicElements["section"], "children"> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, className, ...props }) => {
  return (
    <section className={`${styles.noticeSection} ${className || ''}`} {...props}>
      <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={`${styles.sectionContent} ${styles.content}`}>
        {children}
    </div>
    </section>
  );
};

export default Section;
