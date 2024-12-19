import { useState } from 'react';
import { Header } from './components';
import { Button } from '@mui/material';
import { AppContainer, CardGrid, Card } from './app.styles';

const cardImages = [
  { src: '../assets/images/common/Christmas/Santa/Santa_1.png' },
  { src: '../assets/images/common/Christmas/Santa/Santa_2.png' },
  { src: '../assets/images/common/Christmas/Santa/Santa_3.png' },
  { src: '../assets/images/common/Christmas/Santa/Santa_4.png' },
  { src: '../assets/images/common/Christmas/Santa/Santa_5.png' },
  { src: '../assets/images/common/Christmas/Santa/Santa_6.png' },
  { src: '../assets/images/common/Christmas/Elf/Elf_1.png' },
  { src: '../assets/images/common/Christmas/Elf/Elf_2.png' },
  { src: '../assets/images/common/Christmas/Elf/Elf_3.png' },
  { src: '../assets/images/common/Christmas/Elf/Elf_4.png' },
  { src: '../assets/images/common/Christmas/Elf/Elf_5.png' },
  { src: '../assets/images/common/Christmas/Penguin/Pengu_1.png' },
  { src: '../assets/images/common/Christmas/Penguin/Pengu_2.png' },
  { src: '../assets/images/common/Christmas/Penguin/Pengu_3.png' },
  { src: '../assets/images/common/Christmas/Penguin/Pengu_4.png' },
];

interface ICard {
  src: string;
  id: number;
}

export function App() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <AppContainer>
      {/* <NxWelcome title="ui" /> */}
      <Header />
      {/* <MemoryGrid buttonText="Memory Grid" placeholder="Memory Button" /> */}
      <Button onClick={shuffleCards} variant="contained" color="primary">
        New Game
      </Button>

      <CardGrid>
        {cards.map((card) => (
          <Card key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img
                className="back"
                src="../assets/images/common/Christmas/Christmas_Back.png"
                alt="card back"
              />
            </div>
          </Card>
        ))}
      </CardGrid>
    </AppContainer>
  );
}

export default App;
