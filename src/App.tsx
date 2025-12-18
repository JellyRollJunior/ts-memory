import { Header } from "./components/Header.tsx";
import { Gameboard } from "./components/Gameboard.tsx";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <main className="px-3">
        <Gameboard />
      </main>
    </div>
  );
}

export default App;
