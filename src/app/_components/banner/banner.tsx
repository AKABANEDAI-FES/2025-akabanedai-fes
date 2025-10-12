import { VisuallyHidden } from "@/components/ui/visually-hidden";
import styles from "./banner.module.css";
import FirstView from "./first-view.svg";
import MobileFirstView from "./mobile-first-view.svg";

export function Banner() {
  return (
    <div>
      <VisuallyHidden>
        <h1>赤羽台祭 2025</h1>
        <p>つながるリンク、広がる輪。</p>
        <time dateTime="2025-11-02">11/02(日)</time>～
        <time dateTime="2025-11-03">11/03(月)</time>
        <time dateTime="10:00">10:00</time>～<time dateTime="18:00">18:00</time>
      </VisuallyHidden>
      <MobileFirstView
        aria-hidden="true"
        role="presentation"
        className={styles.mobile}
      />
      <FirstView
        aria-hidden="true"
        role="presentation"
        className={styles.desktop}
      />
    </div>
  );
}
