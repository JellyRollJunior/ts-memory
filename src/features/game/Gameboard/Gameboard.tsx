import type { GameState, Tile } from '@/features/game/types/types.ts';
import { Fragment, useEffect, useState } from 'react';
import { gameController } from '@/features/game/gameController';
import { useGiphy } from '@/features/game/useGiphy.ts';
import { GameTile } from '@/features/game/GameTile';
import { WinModal } from '@/features/game/WinModal';
import { LoseModal } from '@/features/game/LoseModal';
import { RefreshButton } from '@/components/RefreshButton';

const Gameboard = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const [highScore, setHighScore] = useState(0);
  const { isLoading, error, data, refetchGifs } = useGiphy(
    'sailor moon',
    numTiles
  );
  const score = gameTiles.filter((tile) => tile.isClicked == true).length;

  // Init tiles on receiving src data
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
    const score = gameTiles.filter((tile) => tile.isClicked == true).length;
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const restartGame = (): void => {
    const gameData = gameController.restartGame(gameTiles);
    setGameState(gameData.state);
    setGameTiles(gameData.board);
  };

  /* MODALS */
  const isWin = gameState === 'WIN' ? true : false;
  const isLose = gameState === 'LOSE' ? true : false;

  return (
    <>
      <div className="text-sand-beige-dark md:border-sand-beige w-full max-w-4xl md:rounded-3xl md:border-3 md:bg-white/40 md:px-10 md:pt-5 md:pb-8">
        <div className="text-sand-beige grid grid-cols-2 font-extrabold md:text-lg">
          <h2 className="text-center">High Score: {highScore}</h2>
          <h2 className="text-center">Score: {score}</h2>
        </div>
        {error && (
          <div className="mt-3 flex w-full justify-center">
            <RefreshButton onClick={refetchGifs} />
          </div>
        )}
        <ul className="mt-5 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {isLoading || error != null
            ? [...Array(numTiles)].map((value, index) => (
                <Fragment key={index}>
                  <GameTile
                    data={{ id: '', src: '', isClicked: false }}
                    onClick={() => value}
                    isLoading={isLoading}
                    isError={Boolean(error)}
                    isCheating={false}
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
                      isCheating={true}
                    />
                  </Fragment>
                )
              )}
        </ul>
      </div>
      <WinModal
        open={isWin}
        handlePlayAgain={() => {
          restartGame();
        }}
      />
      <LoseModal
        open={isLose}
        handlePlayAgain={() => {
          restartGame();
        }}
      />
    </>
  );
};

export { Gameboard };
