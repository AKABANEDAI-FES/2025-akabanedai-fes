import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import styles from "./gallery.module.css";

type Props = {
  images: string[];
};

export const Gallery = ({ images }: Props) => {
  return (
    <section className={styles.gallery}>
      <StarDecoration>
        <Heading as="h2">ギャラリー</Heading>
      </StarDecoration>
      <BlurredBox className={styles.grid}>
        {images.map((image) => (
          <div key={image} className={styles.imageWrapper}>
            <Image
              src={image}
              alt=""
              className={styles.image}
              width={200}
              height={200}
            />
          </div>
        ))}
      </BlurredBox>
    </section>
  );
};
