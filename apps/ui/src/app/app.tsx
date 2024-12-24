import { useEffect, useState } from 'react';
import { Header } from './components';
import { AppContainer } from './app.styles';

import Cards from './components/Cards/Cards';

export function App() {
  return (
    <AppContainer>
      {/* <NxWelcome title="ui" /> */}
      <Header />
      {/* <MemoryGrid buttonText="Memory Grid" placeholder="Memory Button" /> */}
      <Cards />
    </AppContainer>
  );
}

export default App;
