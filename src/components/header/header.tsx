"use client";

import clsx from "clsx";
import Link from "next/link";
import type { JSX } from "react";
import SymbolIcon from "@/assets/symbol.svg";
import styles from "./header.module.css";
import { Navigation } from "./header-navigation";

export type Props = Omit<JSX.IntrinsicElements["div"], "children">;

export function Header({ className, ...props }: Props) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <header className={styles.header}>
        <Link href="/" aria-label="赤羽台祭 ホームへ">
          <SymbolIcon className={styles.symbol} />
        </Link>
        <Navigation />
      </header>
    </div>
  );
}
