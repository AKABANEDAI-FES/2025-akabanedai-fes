"use client"; 

import React from 'react';
import Section from './section'; 
import styles from './section.module.css';



const EntryNotice: React.FC = () => {
  return (
    <Section title="入退場について" id="entry-notice">
        <div className={styles.content}>
            <ul>
                <li>事前予約やチケットは不要です。</li>
                <li>入場料は無料です。（※一部体験や飲食出店は有料です。）</li>                    
                <li>駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。</li>
            </ul>
            <div>※公共交通機関はアクセスのページをご確認ください。</div>
        </div>
    </Section>
  );
};

export default EntryNotice;