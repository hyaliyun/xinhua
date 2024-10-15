import React, { useState } from 'react';
import cnchar from 'cnchar';
import 'cnchar-name'; // Make sure to import the cnchar-name plugin for name generation
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
            {'取名字'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

const NameGenerator: React.FC = () => {
  const [inputTemplate, setInputTemplate] = useState('***');
  const [nameCount, setNameCount] = useState(5);
  const [gender, setGender] = useState<'both' | 'boy' | 'girl'>('both');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  const handleGenerateNames = () => {
    const names = cnchar.name(inputTemplate, { number: nameCount, gender });
    setGeneratedNames(names);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <label>如：陈**，王*，李*明:</label>
        <input
          className={styles.input}
          value={inputTemplate}
          onChange={(e) => setInputTemplate(e.target.value)}
          placeholder="如：陈**，王*，李*明"
        />
      </div>

      <div className={styles.block}>
        <label>请输入生成名字个数:</label>
        <input
          className={styles.input}
          type="number"
          value={nameCount}
          onChange={(e) => setNameCount(parseInt(e.target.value) || 5)}
        />
      </div>

      <div className={styles.block}>
        <label>
          <input
            type="radio"
            name="gender"
            checked={gender === 'both'}
            onChange={() => setGender('both')}
          />
          不限
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            checked={gender === 'boy'}
            onChange={() => setGender('boy')}
          />
          男孩名
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            checked={gender === 'girl'}
            onChange={() => setGender('girl')}
          />
          女孩名
        </label>
      </div>

      <div className={styles.block}>
        <button className={styles.button} onClick={handleGenerateNames}>
          生成
        </button>
      </div>

      <div className={styles.result}>
        {generatedNames.length > 0 && (
          <ul>
            {generatedNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <NameGenerator />
        </div>
      </main>
    </Layout>
  );
}
