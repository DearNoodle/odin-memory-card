import { useState } from 'react';

export function StatBoard({ score }) {
  const [bestScore, setBestScore] = useState(0);
  if (score > bestScore) {
    setBestScore(score);
  }
  return (
    <div className='stat'>
      <h1>Score: {score}</h1>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}
