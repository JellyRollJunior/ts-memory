import type { GameState, Tile } from '@/features/game/types/types.ts';
import { Fragment } from 'react';
import { gameController } from '@/features/game/gameController';
import { GameTile } from '@/features/game/GameTile';
import { WinModal } from '@/features/game/WinModal';
import { LoseModal } from '@/features/game/LoseModal';
import { RefreshButton } from '@/components/RefreshButton';

type gameboardViewProps = {
  highScore: number;
  score: number;
  gameState: GameState;
  gameTiles: Tile[];
  onClickTile: (tileId: string) => void;
  restartGame: () => void;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
};

const GameboardView = ({
  highScore,
  score,
  gameState,
  gameTiles,
  onClickTile,
  restartGame,
  isLoading,
  error,
  onRetry,
}: gameboardViewProps) => {
  /* MODALS */
  const isWin = gameState === 'WIN' ? true : false;
  const isLose = gameState === 'LOSE' ? true : false;

  return (
    <>
      <div className="text-sand-beige-dark md:border-sand-beige w-full max-w-4xl md:rounded-3xl md:border-3 md:bg-white/40 md:px-10 md:pt-5 md:pb-8">
        {error && (
          <div className="flex w-full justify-center">
            <RefreshButton onClick={onRetry} />
          </div>
        )}
        <div className="text-sand-beige grid grid-cols-2 font-extrabold md:text-lg">
          <h2 className="text-center">High Score: {highScore}</h2>
          <h2 className="text-center">Score: {score}</h2>
        </div>
        <ul className="mt-5 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {isLoading || error != null
            ? [...Array(12)].map((value, index) => (
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

export { GameboardView };
