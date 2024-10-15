import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  word: string;
  oldword: string;
  strokes: string;
  pinyin: string;
  radicals: string;
  explanation: string;
  more: string;
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
      <p><strong>旧词:</strong> {poem.oldword}</p>
      <p><strong>笔画:</strong> {poem.strokes}</p>
      <p><strong>偏旁:</strong> {poem.radicals}</p>
      <div className={styles.example}>
      <p><strong>解释:</strong> {truncate(poem.explanation, 100)}</p>
      </div>
      <p><strong>更多:</strong> {truncate(poem.more, 100)}</p>
 
    </div>
  );
};

export default PoemCard;

