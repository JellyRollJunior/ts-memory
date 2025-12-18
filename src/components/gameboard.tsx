import type { GameState, Tile } from '../types/types.ts';
import { Fragment, useEffect, useState } from 'react';
import { gameController } from '../game/gameController.ts';
import { GameTile } from './gameTile.tsx';

const Gameboard = ({ size = 9 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);

  useEffect(() => {
    const initGameBoard = async (): Promise<void> => {
      // Fill src w/ dummy data
      let i = 0;
      const srcArray = Array(size)
        .fill('')
        .map((): string => '' + i++);
      const init = gameController.initGame(srcArray);
      setGameState(init.state);
      setGameTiles(init.board);
    };

    initGameBoard();
  }, [size]);

  const onClickTile = (tileId: string): void => {
    if (gameState == 'PLAYING') {
      const gameData = gameController.makeMove(tileId, gameState, gameTiles);
      setGameState(gameData.state);
      setGameTiles(gameData.board);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="mt-12 text-center text-3xl font-bold text-slate-700">
        Typescript Memory!
      </h1>
      <h2 className="text-center">{gameState}</h2>
      <ul className="mt-5 grid grid-cols-3 border border-black">
        {gameController.shuffleArray(gameTiles).map(
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
