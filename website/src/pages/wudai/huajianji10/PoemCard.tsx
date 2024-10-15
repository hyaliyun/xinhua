import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  word: string;
  pinyin: string;
  abbreviation: string;
  explanation: string;
  derivation: string;
  example: string;
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
      <p><strong>Abbreviation:</strong> {poem.abbreviation}</p>
      <p><strong>Explanation:</strong> {truncate(poem.explanation, 100)}</p>
      <p><strong>Derivation:</strong> {truncate(poem.derivation, 100)}</p>
      <p><strong>Example:</strong> {truncate(poem.example, 100)}</p>
    </div>
  );
};

export default PoemCard;
