import { clsx } from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./carousel.module.css";

type EmblaCtx = ReturnType<typeof useEmblaCarousel>;

const EmblaContext = createContext<EmblaCtx | undefined>(undefined);

const useCarousel = () => {
  const ctx = useContext(EmblaContext);
  if (!ctx) {
    throw new Error("useCarousel must be used within <Carousel.Root>");
  }
  return ctx;
};

/* ---------- Root ---------- */
export type RootProps = React.JSX.IntrinsicElements["section"] & {
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number; // ms
};

function Root({
  children,
  className,
  loop = true,
  autoplay = true,
  autoplayDelay = 3000,
  ...props
}: RootProps) {
  const plugins = useMemo(() => {
    return autoplay
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
      : [];
  }, [autoplay, autoplayDelay]);

  const embla = useEmblaCarousel(
    { loop },
    plugins as Parameters<typeof useEmblaCarousel>[1],
  );

  return (
    <EmblaContext.Provider value={embla}>
      <section className={clsx(styles.root, className)} {...props}>
        {children}
      </section>
    </EmblaContext.Provider>
  );
}

/* ---------- Viewport ---------- */
export type ViewportProps = React.JSX.IntrinsicElements["div"];
function Viewport({ children, className, ...props }: ViewportProps) {
  const [ref] = useCarousel();
  return (
    <div ref={ref} className={clsx(styles.viewport, className)} {...props}>
      {children}
    </div>
  );
}

/* ---------- Container ---------- */
type ContainerProps = React.JSX.IntrinsicElements["div"];
function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
}

/* ---------- Slide ---------- */
type SlideProps = React.JSX.IntrinsicElements["div"];
function Slide({ children, className, ...props }: SlideProps) {
  return (
    <div className={clsx(styles.slide, className)} {...props}>
      {children}
    </div>
  );
}

/* ---------- Indicator (Dots) ---------- */
type IndicatorProps = Omit<React.JSX.IntrinsicElements["div"], "children">;
function Indicator({ className, ...props }: IndicatorProps) {
  const [, api] = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => api?.scrollTo(index),
    [api],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    return () => {
      api.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
    };
  }, [api, onInit, onSelect]);

  return (
    <div className={clsx(styles.indicator, className)} {...props}>
      {scrollSnaps.map((snap, index) => (
        <button
          key={`snap-${snap}`}
          type="button"
          onClick={() => onDotButtonClick(index)}
          className={clsx(
            styles.dot,
            index === selectedIndex && styles.dotActive,
          )}
          aria-current={index === selectedIndex ? "true" : undefined}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export const Carousel = {
  Root,
  Viewport,
  Container,
  Slide,
  Indicator,
};
