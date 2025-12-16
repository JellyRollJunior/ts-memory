import type { Tile } from './types.ts';

type AppProps = {
  data: Tile,
  onClick: () => void,
}

const GameTile = ({ data, onClick }: AppProps) => {
  
  return (
    <li className={`text-center border-black border hover:bg-gray-300 ${data.clicked && 'bg-gray-200'}`}>
      <button className='px-3 py-5' onClick={onClick}>
        <div>{data.id}</div>
        <div>{data.src}</div>
        <div>{data.clicked ? "true" : "false"}</div>
      </button>
    </li>
  );
};

export { GameTile };
