import { Heading } from "@/components/ui/heading";
import styles from "./gallery.module.css";

type Props = {
  images: unknown[];
};

export const Gallery = ({ images }: Props) => {
  return (
    <section className={styles.gallery}>
      <Heading as="h2" variant="secondary">
        ギャラリー
      </Heading>
      <div className={styles.grid}>
        {images.map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: this is static content
          <div key={index} className={styles.imagePlaceholder} />
        ))}
      </div>
    </section>
  );
};
