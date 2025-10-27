import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Slideshow } from "./_components/slideshow";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "赤羽台祭について",
	openGraph: {
		title: "赤羽台祭について",
	},
};

export default function AboutPage() {
	return (
    <Container className={styles.about}>
      <Slideshow />
    </Container>
	);
}
