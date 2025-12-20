import type { GameState, Tile } from '../types/types.ts';
import { Fragment, useEffect, useRef, useState, type RefObject } from 'react';
import { gameController } from '../game/gameController.ts';
import { GameTile } from './GameTile.tsx';
import { useGiphy } from '../hooks/useGiphy.ts';
import { WinModal } from './WinModal.tsx';
import { LoseModal } from './LoseModal.tsx';
import { RefreshButton } from './RefreshButton.tsx';

const Gameboard = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const [highScore, setHighScore] = useState(0);
  const { isLoading, error, data, refetchGifs } = useGiphy('sailor moon', numTiles);
  const score = gameTiles.filter((tile) => tile.clicked == true).length;
  const winModalRef = useRef<HTMLDialogElement | null>(null);
  const loseModalRef = useRef<HTMLDialogElement | null>(null);

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
    const score = gameTiles.filter((tile) => tile.clicked == true).length;
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
  const openModal = (ref: RefObject<HTMLDialogElement | null>): void => {
    if (!ref) return;
    const dialog = ref.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeModal = (ref: RefObject<HTMLDialogElement | null>): void => {
    if (!ref) return;
    const dialog = ref.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
  };

  useEffect(() => {
    if (gameState == 'WIN') {
      openModal(winModalRef);
    }
    if (gameState == 'LOSE') {
      openModal(loseModalRef);
    }
  }, [gameState]);

  return (
    <>
      <div className="text-sand-beige-dark w-full max-w-3xl">
        <div className="text-sand-beige mt-2 grid grid-cols-2 font-extrabold">
          <h2 className="text-center">High Score: {highScore}</h2>
          <h2 className="text-center">Score: {score}</h2>
        </div>
        {error && (
          <div className="mt-3 flex w-full justify-center">
            <RefreshButton onClick={refetchGifs} />
          </div>
        )}
        <ul className="mt-5 grid w-full grid-cols-2 gap-3">
          {isLoading || error != null
            ? [...Array(numTiles)].map((value, index) => (
                <Fragment key={index}>
                  <GameTile
                    data={{ id: '', src: '', clicked: false }}
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
        ref={winModalRef}
        handlePlayAgain={() => {
          restartGame();
          closeModal(winModalRef);
        }}
      />
      <LoseModal
        ref={loseModalRef}
        handlePlayAgain={() => {
          restartGame();
          closeModal(loseModalRef);
        }}
      />
    </>
  );
};

export { Gameboard };
