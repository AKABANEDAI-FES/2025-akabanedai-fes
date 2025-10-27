"use client";

import Image, { type StaticImageData } from "next/image";
import slideshow1 from "@/assets/slideshow1.png";
import slideshow2 from "@/assets/slideshow2.png";
import slideshow3 from "@/assets/slideshow3.png";
import slideshow4 from "@/assets/slideshow4.png";
import slideshow5 from "@/assets/slideshow5.png";
import { Carousel } from "@/components/ui/carousel";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import styles from "./slideshow.module.css";

export function Slideshow() {
  const images: StaticImageData[] = [
    slideshow1,
    slideshow2,
    slideshow3,
    slideshow4,
    slideshow5,
  ];
  return (
    <section>
      <StarDecoration className={styles.heading}>
        <Heading as="h1" variant="primary">
          昨年度の様子
        </Heading>
      </StarDecoration>
      <Carousel.Root>
        <Carousel.Viewport>
          <Carousel.Container>
            {images.map((img) => (
              <Carousel.Slide key={img.src}>
                <Image
                  src={img}
                  alt=""
                  fill
                  className={styles.image}
                  priority
                />
              </Carousel.Slide>
            ))}
          </Carousel.Container>
        </Carousel.Viewport>

        <Carousel.Indicator />
      </Carousel.Root>
    </section>
  );
}
