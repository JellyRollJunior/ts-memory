import type { GameState, Tile } from '@/features/game/types.ts';
import { useEffect, useState } from 'react';
import { gameController } from '@/features/game/controller/index.ts';
import { useGiphy } from '@/features/game/hooks/useGiphy.ts';
import { GameboardView } from './GameboardView.tsx';

const GameboardContainer = ({ numTiles = 12 }) => {
  const [gameState, setGameState] = useState<GameState>('NONE');
  const [gameTiles, setGameTiles] = useState<Tile[]>([] as Tile[]);
  const [highScore, setHighScore] = useState(0);
  const { isLoading, error, data, refetchGifs } = useGiphy(
    'sailor moon',
    numTiles
  );
  const score = gameController.calculateScore(gameTiles);

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

      // update score
      const newScore = gameController.calculateScore(gameData.board);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    }
  };

  const restartGame = (): void => {
    const gameData = gameController.restartGame(gameTiles);
    setGameState(gameData.state);
    setGameTiles(gameData.board);
  };

  return (
    <GameboardView
      highScore={highScore}
      score={score}
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
