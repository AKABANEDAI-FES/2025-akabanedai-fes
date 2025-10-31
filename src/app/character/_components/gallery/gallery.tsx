import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import styles from "./gallery.module.css";

type Props = {
  images: unknown[];
};

export const Gallery = ({ images }: Props) => {
  return (
    <section className={styles.gallery}>
      <StarDecoration>
        <Heading as="h2">ギャラリー</Heading>
      </StarDecoration>
      <div className={styles.grid}>
        {images.map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: this is static content
          <div key={index} className={styles.imagePlaceholder} />
        ))}
      </div>
    </section>
  );
};
