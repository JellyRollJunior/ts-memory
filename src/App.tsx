import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <Header />
      <main className="flex w-full justify-center px-3 mt-3">
        <Gameboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
