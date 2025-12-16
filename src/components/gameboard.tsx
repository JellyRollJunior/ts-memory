import { GameTile } from "./gameTile";

const Gameboard = ({ card = 9 }) => {
  const cardArray = new Array(card).fill(0);

  return (
    <div className="max-w-3xl">
      <h1 className="text-center text-3xl font-bold text-slate-700">
        Typescript Memory!
      </h1>
      <ul className="grid grid-cols-3">
        {cardArray.map(
          (): React.JSX.Element => (
            <GameTile />
          )
        )}
      </ul>
    </div>
  );
};

export { Gameboard };
