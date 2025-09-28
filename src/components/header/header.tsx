import clsx from "clsx";
import Link from "next/link";
import type { JSX } from "react";
import SymbolIcon from "@/assets/symbol.svg";
import { Text } from "../ui/text";
import styles from "./header.module.css";

export type Props = Omit<JSX.IntrinsicElements["div"], "children">;

const navItems = [
  { label: "企画情報" },
  { label: "赤羽台祭について" },
  { label: "公式コンテンツ" },
  { label: "ご来場の皆様へ" },
];

export function Header({ className, ...props }: Props) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <header className={styles.header}>
        <Link href="/" aria-label="赤羽台祭 ホームへ">
          <SymbolIcon className={styles.symbol} />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={styles.navigationItem}
                aria-disabled
              >
                <Text as="span">{item.label}</Text>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
