import { Header } from "./components/Header";
import { Gameboard } from "./components/gameboards";

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
