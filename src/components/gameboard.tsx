import type { GameState, Tile } from '../types/types.ts';
import { Fragment, useEffect, useState } from 'react';
import { gameController } from '../game/gameController.ts';
import { GameTile } from './gameTile.tsx';

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

const Gameboard = ({ size = 9 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);

  useEffect(() => {
    const initGameBoard = async (): Promise<void> => {
      const init = await gameController.initGame(size);
      setGameState(init.state);
      setGameTiles(init.board);
    };

    initGameBoard();
  }, [size]);

  const onClickTile = (tileId: string): void => {
    if (gameState == 'PLAYING') {
      const gameData = gameController.makeMove(gameState, tileId, gameTiles);
      const winVerifiedGameData = gameController.verifyWin(gameData.state, gameData.board);
      setGameState(winVerifiedGameData.state);
      setGameTiles(winVerifiedGameData.board);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="mt-12 text-center text-3xl font-bold text-slate-700">
        Typescript Memory!
      </h1>
      <h2 className="text-center">{gameState}</h2>
      <ul className="mt-5 grid grid-cols-3 border border-black">
        {shuffleArray(gameTiles).map(
          (data): React.JSX.Element => (
            <Fragment key={data.id}>
              <GameTile data={data} onClick={() => onClickTile(data.id)} />
            </Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export { Gameboard };
