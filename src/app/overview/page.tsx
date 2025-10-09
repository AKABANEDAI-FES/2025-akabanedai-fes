import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { StarDecoration } from "@/components/ui/star-decoration";
import { Text } from "@/components/ui/text";
import styles from "./page.module.css";
import "./page.module.css";
export default function OverviewPage() {
  return (
    <Container as="main">
      <div>
        <StarDecoration>
          <Heading as="h1">開催概要</Heading>
        </StarDecoration>

        <Heading as="h2" variant="secondary">
          赤羽台祭について
        </Heading>
        <Text>
          赤羽台祭（あかばねだいさい）は、東洋大学赤羽台キャンパスで毎年開催される大学祭です。情報連携学部、社会福祉デザイン学部、健康スポーツ科学部の3つの学部が、特色を生かしたさまざまな催しを展開します。
        </Text>
        <Text>
          開催期間中は、学生団体や地域の皆さまと協力してつくりあげた展示や体験型企画、ステージイベントなどが行われます。普段は落ち着いた雰囲気の赤羽台キャンパスが、この期間は活気にあふれたにぎやかな場所となります。
        </Text>

        <Text>
          この大学祭が、あなたと新しい何かを繋ぐきっかけとなりますように。皆さまのご来場を心よりお待ちしております。
        </Text>
        <Heading as="h2" variant="secondary">
          第9回赤羽台祭 開催概要
        </Heading>
        <Container>
          <table className={styles.mytable}>
            <tbody>
              <tr>
                <td>
                  <Text>✦開催日時</Text>
                </td>
                <td>
                  <Text>1日目：2025年11月2日(日)10:00～18:00</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>2日目：2025年11月3日(月)10:00～18:00</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text>✦会場</Text>
                </td>
                <td>
                  <Text>東洋大学赤羽台キャンパス</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>〒115-8650 東京都北区赤羽台1丁目7-11</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>※入口や会場案内についてはこちら</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>事前予約やチケットについては不要です</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text>✦来場について</Text>
                </td>
                <td>
                  <Text>入場料は無料です</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>※一部体験や飲食出店は有料です</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text className={styles.leftAline}>✦主催</Text>
                </td>
                <td>
                  <Text>赤羽台祭実行委員会</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text>✦お問い合わせ</Text>
                </td>
                <td>
                  <Text>support★akabanedai-fes.com</Text>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Text>※ ご連絡の際は★を@に変更してお送りください。</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </Container>
  );
}
