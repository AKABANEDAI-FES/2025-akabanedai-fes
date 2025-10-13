import React from 'react';
import Section from './section'; 
import styles from './section.module.css';
import {Text} from "@/components/ui/text";


const EntryNotice: React.FC = () => {
  return (
    <Section title="入退場について" id="entry-notice">
        <div className={styles.content}>
            <ul>
                <li><Text>事前予約やチケットは不要です。</Text></li>
                <li><Text>入場料は無料です。（※一部体験や飲食出店は有料です。）</Text></li>                    
                <li><Text>駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。</Text></li>
            </ul>
            <div><Text>※公共交通機関はアクセスのページをご確認ください。</Text></div>
        </div>
    </Section>
  );
};

export default EntryNotice;