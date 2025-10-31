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
import { Text } from "../ui/text";
import Menu from "./menu.svg";
import styles from "./mobile-menu.module.css";
import { navigation } from "./nav";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
    measure();
    window.addEventListener("resize", measure, true);
    return () => {
      window.removeEventListener("resize", measure, true);
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
        open={isOpen}
        onOpenChange={(e) => {
          setIsOpen(e.open);
          measure();
        }}
      >
        <Dialog.Trigger
          className={clsx(styles.menuButton)}
          aria-label="メニュー"
          ref={triggerRef}
        >
          <Menu />
        </Dialog.Trigger>
        <Dialog.Backdrop className={styles.backdrop} style={backdropVars} />
        <Dialog.Positioner className={styles.positioner}>
          <Dialog.Content className={styles.content}>
            <Accordion.Root className={styles.accordion}>
              {navigation.map((section) => (
                <Accordion.Item key={section.label} value={section.label}>
                  <Accordion.ItemTrigger className={styles.accordionTrigger}>
                    <Accordion.ItemIndicator
                      className={styles.accordionIndicator}
                    >
                      <Star />
                    </Accordion.ItemIndicator>
                    {section.label}
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent className={styles.accordionContent}>
                    <ul className={styles.itemList}>
                      {section.items.map((item) => (
                        <Text as="li" key={item.label}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className={styles.itemLink}
                              onNavigate={() => setIsOpen(false)}
                              target={item.external ? "_blank" : undefined}
                              aria-label={
                                item.external
                                  ? "（新しいタブで開きます）"
                                  : undefined
                              }
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <span
                              className={styles.itemLink}
                              aria-disabled="true"
                            >
                              {item.label}
                            </span>
                          )}
                        </Text>
                      ))}
                    </ul>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
}
