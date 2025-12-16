import type { Tile } from './types.ts';

type AppProps = {
  data: Tile,
}
const GameTile = ({ data }: AppProps) => {
  
  return (
    <li className="text-center px-3 py-5 border-black border hover:bg-gray-100">
      <div>{data.id}</div>
      <div>{data.src}</div>
    </li>
  );
};

export { GameTile };
