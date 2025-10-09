import React from 'react';
import Section from './section';

const CampusNotice: React.FC = () => {
  return (
    <Section title="キャンパス内での注意事項" id="campus-notice">
      <div className='content'>
        <ul>
          <li>火気の使用はご遠慮ください。</li>
          <li>キャンパス内は全面禁煙となっております。</li>
          <li>指定場所以外で飲食物をすることはできません。飲食可能な場所についてはパンフレットをご確認ください。</li>
          <li>構内の機材や設備の撮影はおやめください。</li>
          <li>事故防止のため、構内の機材にはお手を触れないようにお願いいたします。</li>
          <li>重要なアナウンスが流れる場合がございます。構内放送にご留意ください。</li>
          <li>他のお客様への迷惑行為や、スタッフの指示に従わない等の行為が見受けられた場合、ご退場頂いたり、入場をお断りする場合があります。</li>
        </ul>
        <div>
          ※本学では大学祭の様子を記録するため、写真/動画の撮影を行っています。<br />ご来場の皆さまのお名前等個人が特定されないよう配慮した上で、広報媒体素材として使用させていただくことがあります。
        </div>
      </div>
    </Section>
  );
};

export default CampusNotice;