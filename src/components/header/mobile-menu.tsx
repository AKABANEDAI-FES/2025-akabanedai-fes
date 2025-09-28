"use client";

import { Accordion } from "@ark-ui/react";
import { Dialog } from "@ark-ui/react/dialog";
import clsx from "clsx";
import Link from "next/link";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Star from "@/assets/star.svg";
import SymbolIcon from "@/assets/symbol.svg";
import Menu from "./menu.svg";
import styles from "./mobile-menu.module.css";

const navItems = [
  { label: "企画情報" },
  { label: "赤羽台祭について" },
  { label: "公式コンテンツ" },
  { label: "ご来場の皆様へ" },
];

export function MobileMenu() {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [backdropVars, setBackdropVars] = useState<CSSProperties>({
    "--cx": "50vw",
    "--cy": "50vh",
    "--maxr": "150vmax",
  } as CSSProperties);

  const measure = useCallback(() => {
    const btn = triggerRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const r = Math.ceil(
      Math.max(
        Math.hypot(cx - 0, cy - 0),
        Math.hypot(cx - vw, cy - 0),
        Math.hypot(cx - 0, cy - vh),
        Math.hypot(cx - vw, cy - vh),
      ),
    );

    setBackdropVars({
      "--cx": `${cx}px`,
      "--cy": `${cy}px`,
      "--maxr": `${r}px`,
    } as CSSProperties);
  }, []);

  useEffect(() => {
    const onResize = () => measure();
    const onScroll = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [measure]);

  return (
    <div className={styles.container}>
      <Link href="/" aria-label="赤羽台祭 ホームへ" className={styles.top}>
        <SymbolIcon />
      </Link>
      <Dialog.Root
        persistentElements={[() => triggerRef.current]}
        trapFocus={false}
      >
        <Dialog.Trigger
          className={clsx(styles.menuButton)}
          aria-label="メニュー"
          ref={triggerRef}
          onClickCapture={measure}
        >
          <Menu />
        </Dialog.Trigger>
        <Dialog.Backdrop className={styles.backdrop} style={backdropVars} />
        <Dialog.Positioner className={styles.positioner}>
          <Dialog.Content className={styles.content}>
            <Accordion.Root>
              {navItems.map((item) => (
                <Accordion.Item key={item.label} value={item.label}>
                  <Accordion.ItemTrigger
                    className={styles.accordionTrigger}
                    disabled
                  >
                    <Accordion.ItemIndicator>
                      <Star />
                    </Accordion.ItemIndicator>
                    {item.label}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>{null}</Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
}
