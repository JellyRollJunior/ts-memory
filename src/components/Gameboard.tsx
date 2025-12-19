import type { GameState, Tile } from '../types/types.ts';
import { Fragment, useEffect, useState } from 'react';
import { gameController } from '../game/gameController.ts';
import { GameTile } from './GameTile.tsx';
import { useGiphy } from '../hooks/useGiphy.ts';

const Gameboard = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const [highScore, setHighScore] = useState(0);
  const { isLoading, error, data } = useGiphy('sailor moon', numTiles);
  const score = gameTiles.filter((tile) => tile.clicked == true).length;

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
    const score = gameTiles.filter((tile) => tile.clicked == true).length;
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <div className="w-full max-w-3xl text-sand-beige-dark">
      <div className="mt-2 grid grid-cols-2 text-blooming-dahlia font-bold">
        <h2 className='text-center'>High Score: {highScore}</h2>
        <h2 className='text-center'>Score: {score}</h2>
      </div>
      <ul className="mt-5 grid w-full grid-cols-2 gap-2">
        {isLoading || error != null
          ? [...Array(numTiles)].map((value, index) => (
              <Fragment key={index}>
                <GameTile
                  data={{ id: '', src: '', clicked: false }}
                  onClick={() => value}
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
