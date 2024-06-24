import { cardData } from './data';
import { useState } from 'react';

export function MemoryCard({ score, setScore, clickedCards, setClickedCards }) {
  const [cardArrange, setCardArrange] = useState(cardData.sort(() => 0.5 - Math.random()));

  function handleClick(cardName) {
    if (!clickedCards.includes(cardName)) {
      const newClickedCards = [...clickedCards, cardName];
      setClickedCards(newClickedCards);
      setScore(score + 1);
      setCardArrange(cardArrange.sort(() => 0.5 - Math.random()));
    } else {
      setClickedCards([]);
      setScore(0);
    }
  }

  return (
    <div className='cards'>
      {cardArrange.map((card) => (
        <div
          key={card.id}
          className='card'
          id={'merm-' + card.name}
          onClick={() => handleClick(card.name)}
        >
          <img src={card.url} alt='' srcSet='' />
        </div>
      ))}
    </div>
  );
}
