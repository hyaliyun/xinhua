import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  ci: string;
  explanation: string[];
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {

  return (
    <div className={styles.card}>
      <h2>{poem.ci}</h2>
      <div className={styles.paragraphs}>
<p><strong>解释:</strong> {poem.explanation}</p>
      </div>
    </div>
  );
};

export default PoemCard;
