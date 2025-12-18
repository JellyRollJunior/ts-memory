import { Gameboard } from "./components/gameboard";

function App() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center">
      <main className="mx-3">
        <Gameboard />
      </main>
    </div>
  );
}

export default App;
