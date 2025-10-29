import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import type { JSX } from "react";
import SymbolIcon from "@/assets/symbol.svg";
import { BlurredBox } from "../ui/blurred-box";
import { Text } from "../ui/text";
import styles from "./header.module.css";
import { navigation } from "./nav";

export type Props = Omit<JSX.IntrinsicElements["div"], "children">;

export function Header({ className, ...props }: Props) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <header className={styles.header}>
        <Link href="/" aria-label="赤羽台祭 ホームへ">
          <SymbolIcon className={styles.symbol} />
        </Link>
        <NavigationMenu.Root className={styles.navigation}>
          <NavigationMenu.List className={styles.navigationList}>
            {navigation.map((nav) => (
              <NavigationMenu.Item key={nav.label}>
                <NavigationMenu.Trigger>
                  <Text as="span">{nav.label}</Text>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={styles.menuContent}>
                  <BlurredBox as="ul" className={styles.menuNavList}>
                    {nav.items.map((item) => (
                      <Text as="li" key={item.label}>
                        {item.href ? (
                          <NavigationMenu.Link
                            key={item.label}
                            href={item.href}
                            className={styles.menuNavLink}
                            render={<Link href={item.href} />}
                          >
                            {item.label}
                          </NavigationMenu.Link>
                        ) : (
                          // biome-ignore lint/a11y/useSemanticElements: リンクでないメニュー項目のため
                          <Text
                            as="span"
                            role="link"
                            aria-disabled="true"
                            className={styles.menuNavLink}
                          >
                            {item.label}
                          </Text>
                        )}
                      </Text>
                    ))}
                  </BlurredBox>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              className={styles.positioner}
              side="bottom"
              align="start"
              alignOffset={-32}
              collisionAvoidance={{ side: "none" }}
            >
              <NavigationMenu.Popup>
                <NavigationMenu.Viewport />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>
      </header>
    </div>
  );
}
