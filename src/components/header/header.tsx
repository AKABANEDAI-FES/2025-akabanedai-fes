import Link from "next/link";
import SymbolIcon from "@/assets/symbol.svg";
import styles from "./header.module.css";

type NavItem = {
  label: string;
  href?: string;
};

const navItems: NavItem[] = [
  { label: "企画情報" },
  { label: "赤羽台祭について" },
  { label: "公式コンテンツ" },
  { label: "ご来場の皆様へ" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="赤羽台祭 ホームへ">
        <SymbolIcon className={styles.symbol} />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {navItems.map((item) => (
            <li
              key={item.label}
              aria-disabled={!item.href}
              className={styles.navigationItem}
            >
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
