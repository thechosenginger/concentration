import { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import Card from './Card/Card';
import Popup from '../Popup/Popup';

import { cardImages } from './CardImages';

export interface ICard {
  id: number;
  img: string;
  status: string;
  number: number;
}

export default function Cards() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [previousCardState, setPreviousCardState] = useState<number>(-1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [prize, setPrize] = useState<string | null>(null);

  const prizes = ['Gift Card', 'Cash', 'Gift', 'Lotto Ticket'];

  const handleWin = () => {
    // Ramdomly select a prize
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(randomPrize);
    handleOpenPopup();
  };

  const previousIndex = useRef(-1);

  const matchCheck = (currentCard: number) => {
    if (cards[currentCard].img === cards[previousCardState].img) {
      // Update matched cards' status to "matched"
      cards[previousCardState].status = 'active matched';
      cards[currentCard].status = 'active matched';

      // Remove matched cards after 2 seconds
      setTimeout(() => {
        // alert('You have found a match!. Your prize is a ____!!!');
        handleWin();
        cards[previousCardState].status = 'removed';
        cards[currentCard].status = 'removed';
        setCards([...cards]);
      }, 2000);
      setPreviousCardState(-1);
    } else {
      // Mark cards as "unmatched after a short delay"
      cards[currentCard].status = 'active';
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = 'unmatch';
        cards[previousCardState].status = 'unmatch';
      }, 1000);
    }
  };

  const clickHandler = (index: number) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === 'active matched') {
        alert('already matched');
      } else {
        if (previousCardState === -1) {
          // First card selection
          previousIndex.current = index;
          cards[index].status = 'active';
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          // Second card selection
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert('card currently selected');
    }
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: Math.random(),
        number: index + 1,
        status: 'hidden',
      }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const prizeList = {};

  return (
    <>
      <Button onClick={shuffleCards} variant="contained" color="primary">
        New Game
      </Button>
      {showPopup && prize && <Popup prize={prize} onClose={handleClosePopup} />}
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              key={index}
              index={index}
              clickHandler={clickHandler}
            />
          );
        })}
      </div>
    </>
  );
}
