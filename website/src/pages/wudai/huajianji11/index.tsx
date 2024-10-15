import React, { useState } from 'react';

import PoemCard from './PoemCard';
import poemsData from './poetrys.json';
import styles from './PoemCard.module.css';
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
            {'南唐'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

function App() {
    const [visibleCount, setVisibleCount] = useState(20); // Start by showing 3 poems
  
    const loadMore = () => {
      setVisibleCount(prevCount => prevCount + 20); // Load 3 more poems each time
    };

  return (
    <div>
      <div className={styles.cardContainer}>
        {poemsData.slice(0, visibleCount).map((poem, index) => (
          <PoemCard key={index} poem={poem} />
        ))}
      </div>
      {visibleCount < poemsData.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          查看更多
        </button>
      )}
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <App />
        </div>
      </main>
    </Layout>
  );
}
