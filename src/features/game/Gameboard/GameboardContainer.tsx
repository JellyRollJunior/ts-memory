import type { GameState, Tile } from '@/features/game/types/types.ts';
import { useEffect, useState } from 'react';
import { gameController } from '@/features/game/gameController';
import { useGiphy } from '@/features/game/useGiphy.ts';
import { GameboardView } from './GameboardView.tsx';

const GameboardContainer = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const { isLoading, error, data, refetchGifs } = useGiphy(
    'sailor moon',
    numTiles
  );

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
  };

  const restartGame = (): void => {
    const gameData = gameController.restartGame(gameTiles);
    setGameState(gameData.state);
    setGameTiles(gameData.board);
  };

  return (
    <GameboardView
      gameState={gameState}
      gameTiles={gameTiles}
      onClickTile={onClickTile}
      restartGame={restartGame}
      isLoading={isLoading}
      error={error}
      onRetry={refetchGifs}
    />
  );
};

export { GameboardContainer };
