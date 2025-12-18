import type { Tile } from '../types/types.ts';

type AppProps = {
  data: Tile;
  onClick: () => void;
};

const GameTile = ({ data, onClick }: AppProps) => {
  return (
    <li
      className={`aspect-square h-full rounded-md border-3 border-sand-beige text-center hover:bg-gray-300 ${data.clicked && 'bg-gray-200'}`}
    >
      <button className="size-full" onClick={onClick}>
        <img className="size-full object-cover" src={data.src} />
      </button>
    </li>
  );
};

export { GameTile };
