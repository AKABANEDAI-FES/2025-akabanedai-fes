import Image from "next/image";
import { BlurredBox } from "@/components/ui/blurred-box";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import styles from "./gallery.module.css";
import gallery01 from "./gallery01.png";
import gallery02 from "./gallery02.png";
import gallery03 from "./gallery03.png";
import gallery04 from "./gallery04.png";
import gallery05 from "./gallery05.png";
import gallery06 from "./gallery06.png";
import gallery07 from "./gallery07.png";
import gallery08 from "./gallery08.png";
import gallery09 from "./gallery09.png";

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
