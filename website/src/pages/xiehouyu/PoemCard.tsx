import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  riddle: string;
  answer: string;
}

const PoemCard: React.FC<{  poem: Poem }> = ({ poem}) => {
  return (
    <div className={styles.card}>
      <h2>{poem.riddle}</h2>
      <div className={styles.paragraphs}>
      <p><strong>答案:</strong>{poem.answer}</p>
      </div>
    </div>
  );
};


export default PoemCard;


