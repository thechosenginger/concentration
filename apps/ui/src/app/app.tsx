// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Header, MemoryGrid } from './components';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="ui" /> */}
      <Header />
      <MemoryGrid
        buttonText="Memory Grid"
        placeholder="Memory Button"
      />
    </div>
  );
}

export default App;
