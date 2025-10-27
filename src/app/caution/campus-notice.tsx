import { Text } from "@/components/ui/text";
import Section from "./section";

export default function CampusNotice() {
  return (
    <Section title="キャンパス内での注意事項">
      <ul>
        <Text as="li">火気の使用はご遠慮ください。</Text>
        <Text as="li">キャンパス内は全面禁煙となっております。</Text>
        <Text as="li">
          指定場所以外で飲食物をすることはできません。飲食可能な場所についてはパンフレットをご確認ください。
        </Text>
        <Text as="li">構内の機材や設備の撮影はおやめください。</Text>
        <Text as="li">
          事故防止のため、構内の機材にはお手を触れないようにお願いいたします。
        </Text>
        <Text as="li">
          重要なアナウンスが流れる場合がございます。構内放送にご留意ください。
        </Text>
        <Text as="li">
          他のお客様への迷惑行為や、スタッフの指示に従わない等の行為が見受けられた場合、ご退場頂いたり、入場をお断りする場合があります。
        </Text>

        <Text>
          ※本学では大学祭の様子を記録するため、写真/動画の撮影を行っています。
          ご来場の皆さまのお名前等個人が特定されないよう配慮した上で、広報媒体素材として使用させていただくことがあります。
        </Text>
      </ul>
    </Section>
  );
}
