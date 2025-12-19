import { Header } from './components/Header.tsx';
import { Gameboard } from './components/Gameboard.tsx';

function App() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <Header />
      <main className="flex w-full justify-center px-3 mt-1">
        <Gameboard />
      </main>
    </div>
  );
}

export default App;
