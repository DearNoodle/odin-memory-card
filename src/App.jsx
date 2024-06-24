import { MemoryCard } from './components/MemoryCard';
import { StatBoard } from './components/StatBoard';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <div>
      <MemoryCard
        score={score}
        setScore={setScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      ></MemoryCard>
      <StatBoard score={score}></StatBoard>
    </div>
  );
}

export default App;
