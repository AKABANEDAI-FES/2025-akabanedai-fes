import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { StarDecoration } from '@/components/ui/star-decoration';
import { OmikujiCard } from './_components/omikuji-card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'おみくじ',
  description: '赤羽台祭のおみくじで運を試そう！',
  openGraph: {
    title: 'おみくじ',
    description: '赤羽台祭のおみくじで運を試そう！',
  },
};

export default function OmikujiPage() {
  return (
    <Container as="main" className={styles.omikujiPage}>
      <StarDecoration>
        <Heading as="h1" variant="primary">
          おみくじ
        </Heading>
      </StarDecoration>

      <Text className={styles.description}>
        赤羽台祭のおみくじで、あなたの運を試してみましょう！
      </Text>

      <div className={styles.cardContainer}>
        <OmikujiCard />
      </div>

      <div className={styles.legendContainer}>
        <Heading as="h2" variant="secondary">
          運勢について
        </Heading>
        <ul className={styles.legendList}>
          <li>
            <span className={styles.legendLabel}>大吉</span>
            <span>最高の運気。何をしても上手くいく時期です</span>
          </li>
          <li>
            <span className={styles.legendLabel}>中吉</span>
            <span>良い運気。目標達成が期待できます</span>
          </li>
          <li>
            <span className={styles.legendLabel}>小吉</span>
            <span>まあまあの運気。コツコツと努力が大切です</span>
          </li>
          <li>
            <span className={styles.legendLabel}>吉</span>
            <span>良好な運気。進めていることは成功しやすいです</span>
          </li>
          <li>
            <span className={styles.legendLabel}>末吉</span>
            <span>普通の運気。焦らず対応することが大事です</span>
          </li>
          <li>
            <span className={styles.legendLabel}>凶</span>
            <span>注意が必要。慎重に行動することをお勧めします</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}
