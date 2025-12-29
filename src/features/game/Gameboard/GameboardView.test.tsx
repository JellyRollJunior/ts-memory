import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GameboardView } from '@/features/game/Gameboard/GameboardView.tsx';
import { gameController } from '@/features/game/gameController';

vi.mock('@/features/game/GameTile', () => ({
  GameTile: () => <li>Tile!</li>,
}));

vi.mock('@/features/game/WinModal', () => ({
  WinModal: ({ isOpen }: { isOpen: boolean }) => (
    <dialog open={isOpen}>Win</dialog>
  ),
}));

vi.mock('@/features/game/LoseModal', () => ({
  LoseModal: ({ isOpen }: { isOpen: boolean }) => (
    <dialog open={isOpen}>Lose</dialog>
  ),
}));

describe('GameboardView component', () => {
  const gameData = gameController.initGame(['SRC_1', 'SRC_2']);

  it('renders score, gametiles, and win/lose modals', () => {
    const { container } = render(
      <GameboardView
        highScore={0}
        score={0}
        gameState={gameData.state}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={null}
        onRetry={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('opens WinModal on state === WIN', () => {
    render(
      <GameboardView
        highScore={0}
        score={0}
        gameState={'WIN'}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={null}
        onRetry={() => {}}
      />
    );

    expect(screen.getByText('Win')).toBeInTheDocument();
  });

  it('opens LoseModal on state === LOSE', () => {
    render(
      <GameboardView
        highScore={0}
        score={0}
        gameState={'LOSE'}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={null}
        onRetry={() => {}}
      />
    );

    expect(screen.getByText('Lose')).toBeInTheDocument();
  });

  it('renders high score and score according to highScore and score props', () => {
    const HIGHSCORE = 10;
    const SCORE = 8;
    render(
      <GameboardView
        highScore={HIGHSCORE}
        score={SCORE}
        gameState={'PLAYING'}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={null}
        onRetry={() => {}}
      />
    );

    expect(screen.getByRole('heading', {name: `High Score: ${HIGHSCORE}`})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: `Score: ${SCORE}`})).toBeInTheDocument();
  });

  it('renders refresh button on error === true', () => {
    render(
      <GameboardView
        highScore={0}
        score={0}
        gameState={'PLAYING'}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={'Hello I am an error'}
        onRetry={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: 'Refresh button'})).toBeInTheDocument();
  })

  it('renders a tile for each tile in gameData board', () => {
    render(
      <GameboardView
        highScore={0}
        score={0}
        gameState={'PLAYING'}
        gameTiles={gameData.board}
        onClickTile={() => {}}
        restartGame={() => {}}
        isLoading={false}
        error={null}
        onRetry={() => {}}
      />
    );

    const gameTiles = screen.getAllByRole('listitem')
    expect(gameTiles.length).toBe(gameData.board.length);
  })
});
