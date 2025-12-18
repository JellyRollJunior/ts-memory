import type { GameState, Tile } from '../types/types.ts';
import { Fragment, useEffect, useState } from 'react';
import { gameController } from '../game/gameController.ts';
import { GameTile } from './GameTile.tsx';
import { useGiphy } from '../hooks/useGiphy.ts';

const Gameboard = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const { isLoading, error, data } = useGiphy('sailor moon', numTiles);

  useEffect(() => {
    const initGameBoard = (): void => {
      if (data) {
        const init = gameController.initGame(data);
        setGameState(init.state);
        setGameTiles(init.board);
      }
    };

    initGameBoard();
  }, [data]);

  const onClickTile = (tileId: string): void => {
    if (gameState == 'PLAYING') {
      const gameData = gameController.makeMove(tileId, gameState, gameTiles);
      setGameState(gameData.state);
      setGameTiles(gameData.board);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-center">{gameState}</h2>
      <ul className="mt-5 grid w-full grid-cols-2 gap-2">
        {isLoading || error != null
          ? [...Array(numTiles)].map((value, index) => (
              <Fragment key={index}>
                <GameTile
                  data={{ id: '', src: '', clicked: false }}
                  onClick={() => {}}
                  isLoading={isLoading}
                  isError={Boolean(error)}
                />
              </Fragment>
            ))
          : gameController.shuffleArray(gameTiles).map(
              (data): React.JSX.Element => (
                <Fragment key={data.id}>
                  <GameTile
                    data={data}
                    onClick={() => onClickTile(data.id)}
                    isLoading={isLoading}
                    isError={Boolean(error)}
                  />
                </Fragment>
              )
            )}
      </ul>
    </div>
  );
};

export { Gameboard };
