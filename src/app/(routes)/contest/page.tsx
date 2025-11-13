import Image from "next/image";
import result1 from "@/assets/result1.webp";
import result2 from "@/assets/result2.webp";
import result3 from "@/assets/result3.webp";
import result4 from "@/assets/result4.webp";
import result5 from "@/assets/result5.webp";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { createMetadata } from "@/utils/seo";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "企画コンテスト",
});

export default function CampusMapPage() {
  return (
    <Container as="main" className={styles.container}>
      <StarDecoration>
        <Heading as="h1">企画コンテスト</Heading>
      </StarDecoration>
      <div className={styles.content}>
        <Heading as="h2" variant="secondary" className={styles.contestHeading}>
        最終結果
      </Heading>
        <Image
					src={result1}
					alt="企画コンテストの結果１"
					className={styles.result}
				/>
				<Image
					src={result2}
					alt="企画コンテストの結果２"
					className={styles.result}
				/>
				<Image
					src={result3}
					alt="企画コンテストの結果３"
					className={styles.result}
				/>
        <Image
					src={result4}
					alt="企画コンテストの結果4"
					className={styles.result}
				/>
				<Image
					src={result5}
					alt="企画コンテストの結果5"
					className={styles.result}
				/>
      </div>
    </Container>
  );
}
