import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  word: string;
  abbreviation: string;
  pinyin: string;
  explanation: string;
  example: string;
  derivation: string;
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  return (
    <div className={styles.wordCard}>
      <div className={styles.character}>
        <h3>{poem.word} ({poem.pinyin})</h3>
      </div>
      <p><strong>缩写:</strong> {poem.abbreviation}</p>
      <div className={styles.example}>
        <p><strong>解释:</strong> {truncate(poem.explanation, 100)}</p>
      </div>
      <p><strong>出自:</strong> {truncate(poem.derivation, 100)}</p>
      <p><strong>造句:</strong> {truncate(poem.example, 100)}</p>
    </div>
  );
};

export default PoemCard;
