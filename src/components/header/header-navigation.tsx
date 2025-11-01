"use client";

import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import Link from "next/link";
import { BlurredBox } from "../ui/blurred-box";
import { Text } from "../ui/text";
import styles from "./header-navigation.module.css";
import { navigation } from "./nav";

export function Navigation() {
  return (
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
                        href={item.href}
                        className={styles.menuNavLink}
                        render={(props, _state) => (
                          <Link href={item.href} {...props} />
                        )}
                        target={item.external ? "_blank" : undefined}
                        aria-label={
                          item.external ? "（新しいタブで開きます）" : undefined
                        }
                      >
                        {item.label}
                      </NavigationMenu.Link>
                    ) : (
                      <Text
                        as="span"
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
  );
}
