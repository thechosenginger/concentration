import { useEffect, useState } from 'react';
import { Header } from './components';
import { AppContainer } from './app.styles';

import Cards from './components/Cards/Cards';
import { Button } from '@mui/material';
import { puzzleImages } from './components/Cards/PuzzlesImages';

export function App() {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [solution, setSolution] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Select a random puzzle image
    const randomPuzzle =
      puzzleImages[Math.floor(Math.random() * puzzleImages.length)];
    setBackgroundImage(randomPuzzle.img);
    setSolution(randomPuzzle.solution.toLowerCase());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleGuess = () => {
    if (userInput.trim().toLowerCase() === solution) {
      setMessage('Congratulations! You solved the puzzle!');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setMessage('Incorrect. Try again!');
    }
  };

  return (
    <AppContainer $backgroundImage={backgroundImage}>
      {/* <NxWelcome title="ui" /> */}
      <Header />
      {/* <MemoryGrid buttonText="Memory Grid" placeholder="Memory Button" /> */}
      <Cards />
      <div className="guess-container">
        <input
          type="text"
          placeholder="Enter your guess..."
          value={userInput}
          onChange={handleInputChange}
        />
        <Button onClick={handleGuess}>On Submit</Button>
        {message && <p>{message}</p>}
      </div>
    </AppContainer>
  );
}

export default App;

// Next, need to add the rebus backimage and the text box to submit a guess
