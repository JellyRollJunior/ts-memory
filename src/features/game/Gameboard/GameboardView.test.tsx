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
});
