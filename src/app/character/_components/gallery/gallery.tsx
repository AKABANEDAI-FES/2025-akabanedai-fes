import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import styles from "./gallery.module.css";
import gallery01 from "./gallery01.webp";
import gallery02 from "./gallery02.webp";
import gallery03 from "./gallery03.webp";
import gallery04 from "./gallery04.webp";
import gallery05 from "./gallery05.webp";
import gallery06 from "./gallery06.webp";
import gallery07 from "./gallery07.webp";
import gallery08 from "./gallery08.webp";
import gallery09 from "./gallery09.webp";

const galleryImages = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
];

export const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <StarDecoration>
        <Heading as="h2">ギャラリー</Heading>
      </StarDecoration>
      <BlurredBox className={styles.grid}>
        {galleryImages.map((image) => (
          <div key={image.src} className={styles.imageWrapper}>
            <Image src={image} alt="" className={styles.image} />
          </div>
        ))}
      </BlurredBox>
    </section>
  );
};
