import { Text } from "@/components/ui/text";
import Section from "./section";

const EntryNotice: React.FC = () => {
  return (
    <Section title="入退場について">
      <ul>
        <Text as="li">事前予約やチケットは不要です。</Text>
        <Text as="li">
          入場料は無料です。（※一部体験や飲食出店は有料です。）
        </Text>
        <Text as="li">
          駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
        </Text>
      </ul>
      <Text>※公共交通機関はアクセスのページをご確認ください。</Text>
    </Section>
  );
};

export default EntryNotice;
