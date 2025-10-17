import { Text } from "@/components/ui/text";
import Section from "./section";
import styles from "./section.module.css";

const CampusNotice: React.FC = () => {
  return (
    <Section title="キャンパス内での注意事項" id="campus-notice">
      <div className={styles.content}>
        <ul>
          <li>
            <Text>火気の使用はご遠慮ください。</Text>
          </li>
          <li>
            <Text>キャンパス内は全面禁煙となっております。</Text>
          </li>
          <li>
            <Text>
              指定場所以外で飲食物をすることはできません。飲食可能な場所についてはパンフレットをご確認ください。
            </Text>
          </li>
          <li>
            <Text>構内の機材や設備の撮影はおやめください。</Text>
          </li>
          <li>
            <Text>
              事故防止のため、構内の機材にはお手を触れないようにお願いいたします。
            </Text>
          </li>
          <li>
            <Text>
              重要なアナウンスが流れる場合がございます。構内放送にご留意ください。
            </Text>
          </li>
          <li>
            <Text>
              他のお客様への迷惑行為や、スタッフの指示に従わない等の行為が見受けられた場合、ご退場頂いたり、入場をお断りする場合があります。
            </Text>
          </li>
        </ul>
        <footer className={styles.disclaimer}>
          <Text as="p">
            ※本学では大学祭の様子を記録するため、写真/動画の撮影を行っています。
            ご来場の皆さまのお名前等個人が特定されないよう配慮した上で、広報媒体素材として使用させていただくことがあります。
          </Text>
        </footer>
      </div>
    </Section>
  );
};

export default CampusNotice;
