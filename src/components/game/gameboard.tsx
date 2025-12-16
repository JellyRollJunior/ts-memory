import { Fragment, useEffect, useState } from 'react';
import type { Tile } from './types.ts';
import { GameTile } from './gameTile.tsx';

const createTile = (src: string): Tile => {
  return {
    id: crypto.randomUUID(),
    src,
    clicked: false,
  };
};

const shuffleArray = <Type,>(inputArray: Type[]): Type[] => {
  const array = structuredClone(inputArray);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Gameboard = ({ card = 9 }) => {
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);

  const fetchSrc = async (numSrc: number): Promise<string[]> => {
    let i = 0;
    return Array(numSrc)
      .fill('')
      .map((): string => '' + i++);
  };

  useEffect(() => {
    const initGameBoard = async (): Promise<void> => {
      const srcArray = await fetchSrc(card);
      const tiles = [];
      for (const src of srcArray) {
        tiles.push(createTile(src));
      }
      setGameTiles(tiles);
    };

    initGameBoard();
  }, [card]);

  return (
    <div className="max-w-3xl">
      <h1 className="mt-12 text-center text-3xl font-bold text-slate-700">
        Typescript Memory!
      </h1>
      <ul className="mt-5 grid grid-cols-3 border border-black">
        {shuffleArray(gameTiles).map(
          (data): React.JSX.Element => (
            <Fragment key={data.id}>
              <GameTile data={data} />
            </Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export { Gameboard };
