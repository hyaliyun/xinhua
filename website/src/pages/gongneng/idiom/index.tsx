import React, { useState } from 'react';
import cnchar from 'cnchar';
import 'cnchar-idiom'; // Make sure to import the cnchar-name plugin for name generation
import styles from './NameGenerator.module.css'; // Custom styles if needed

import Layout from '@theme/Layout';

import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TopBanner() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="https://www.543x.com"
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{ newVersion: announcedVersion }}>
            {'成语接龙'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

const idiomList = [
  '画龙点睛', '对牛弹琴', '纸上谈兵', '守株待兔', '心花怒发','斧钺之诛','五尺之童','五彩缤纷','眠霜卧雪','大慈大悲','一星半点','引吭高声','家亡国破','袁安高卧','一无所能',// Add more idioms here as needed
];

const IdiomGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState<'character' | 'tone' | 'pinyin'>('character');

  // Function to generate a random idiom from the predefined list
  const generateRandomIdiom = () => {
    const randomIndex = Math.floor(Math.random() * idiomList.length);
    const randomIdiom = idiomList[randomIndex];
    setInputValue(randomIdiom);
    setResult('');
  };

  // Function to continue the idiom chain
  const continueIdiomChain = () => {
    const current = result || inputValue;

    if (!current) {
      generateRandomIdiom();
      return;
    }

    const tailWord = current[current.length - 1];
    let nextIdioms = [];

    if (mode === 'character') {
      nextIdioms = cnchar.idiom(tailWord);
    } else if (mode === 'tone') {
      nextIdioms = cnchar.idiom(tailWord.spell('low', 'tone'), 'spell', 'tone');
    } else if (mode === 'pinyin') {
      nextIdioms = cnchar.idiom(tailWord.spell('low'), 'spell');
    }

    if (nextIdioms.length === 0) {
      alert('没有查找到符合条件成语，请重新生成成语');
      return;
    }

    setInputValue(current);
    setResult(cnchar._.pickRandomEle(nextIdioms));
  };

  return (
    <div className={styles.section}>
      <div className={styles.jxBlock}>
        <input
          id="_input"
          className={styles.jxInput}
          placeholder="请输入或生成一个成语"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={styles.jxBlock} id="_result">{result}</div>

      <div className={`${styles.jxBlock} ${styles.radioGroup}`}>
        <input
          id="_radio1"
          type="radio"
          checked={mode === 'character'}
          onChange={() => setMode('character')}
        />
        <label htmlFor="_radio1">汉字模式</label>
        <input
          id="_radio2"
          type="radio"
          checked={mode === 'tone'}
          onChange={() => setMode('tone')}
        />
        <label htmlFor="_radio2">音调模式</label>
        <input
          id="_radio3"
          type="radio"
          checked={mode === 'pinyin'}
          onChange={() => setMode('pinyin')}
        />
        <label htmlFor="_radio3">拼音模式</label>
      </div>

      <button className={styles.jxButton} onClick={generateRandomIdiom}>
        生成
      </button>
      <button className={styles.jxButton} onClick={continueIdiomChain}>
        接龙
      </button>
    </div>
  );
};


export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <IdiomGenerator />
        </div>
      </main>
    </Layout>
  );
}
