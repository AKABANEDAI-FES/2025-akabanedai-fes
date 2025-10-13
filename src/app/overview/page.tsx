import { BlurredBox } from "@/components/ui/blurred-box";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";
import "./page.module.css";
export default function OverviewPage() {
  return (
    <Container as="main" className={styles.mainContainer}>
      <StarDecoration className={styles.myStarDecoration}>
        <Heading as="h1" className={styles.headLine}>
          開催概要
        </Heading>
      </StarDecoration>

      <BlurredBox className={styles.firstGroup}>
        <Heading as="h2" variant="secondary">
          赤羽台祭について
        </Heading>
        <Text>
          赤羽台祭（あかばねだいさい）は、東洋大学赤羽台キャンパスで毎年開催される大学祭です。情報連携学部、社会福祉デザイン学部、健康スポーツ科学部の3つの学部が、特色を生かしたさまざまな催しを展開します。
        </Text>
        <Text>
          開催期間中は、学生団体や地域の皆さまと協力してつくりあげた展示や体験型企画、ステージイベントなどが行われます。
          <br></br>
          普段は落ち着いた雰囲気の赤羽台キャンパスが、この期間は活気にあふれたにぎやかな場所となります。
        </Text>

        <Text>
          この大学祭が、あなたと新しい何かを繋ぐきっかけとなりますように。
          <br></br>皆さまのご来場を心よりお待ちしております。
        </Text>
      </BlurredBox>

      <BlurredBox className={styles.secondGroup}>
        <Container className={styles.secondHeading}>
          <Heading as="h2" variant="secondary">
            第9回赤羽台祭
          </Heading>
          <Heading as="h2" variant="secondary">
            開催概要
          </Heading>
        </Container>

        <Container>
          <table>
            <tbody>
              <tr>
                <td>
                  <Text>✦開催日時</Text>
                </td>
                <td className={styles.mytd}>
                  <Text>1日目：2025年11月2日(日)10:00～18:00</Text>
                </td>
              </tr>

              <tr>
                <td></td>
                <td className={styles.mytd}>
                  <Text>2日目：2025年11月3日(月)10:00～18:00</Text>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Text>✦会場</Text>
                </td>
                <td className={styles.mytd}>
                  <Text>東洋大学赤羽台キャンパス</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className={styles.mytd}>
                  <Text>〒115-8650 東京都北区赤羽台1丁目7-11</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className={styles.mytd}>
                  <Text>
                    ※入口や会場案内については
                    <a href="../_components/access/access.tsx">こちら</a>
                  </Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className={styles.mytd}>
                  <Text>事前予約やチケットについては不要です</Text>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td>
                  <Text>✦来場について</Text>
                </td>
                <td className={styles.mytd}>
                  <Text>入場料は無料です</Text>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td className={styles.mytd}>
                  <Text>※一部体験や飲食出店は有料です</Text>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Text>✦主催</Text>
                </td>
                <td className={styles.mytd}>
                  <Text>赤羽台祭実行委員会</Text>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Text>✦お問い合わせ</Text>
                </td>
                <td className={styles.mytd}>
                  <Text>support[at]akabanedai-fes.com</Text>
                </td>
              </tr>
              <tr>
                <td> &nbsp;</td>
                <td className={styles.mytd}>
                  <Text>※ ご連絡の際は[at]を@に変更してお送りください。</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </BlurredBox>
    </Container>
  );
}
