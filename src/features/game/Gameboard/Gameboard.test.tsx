import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import { Gameboard } from '@/features/game/Gameboard';
import { render, screen } from '@testing-library/react';

vi.mock('@/features/game/WinModal', () => ({
  WinModal: () => <dialog>I win!</dialog>,
}));

vi.mock('@/features/game/LoseModal', () => ({
  LoseModal: () => <dialog>I Lose!</dialog>,
}));

vi.mock('@/features/game/GameTile', () => ({
  GameTile: () => <li>GameTile!</li>,
}));

vi.mock('@/features/game/RefreshButton', () => ({
  GameTile: () => <button>Refresh!</button>,
}));

const NUM_SRC = 3;
const mockGiphyData = [...Array(NUM_SRC)].map((value, index) => index);
vi.mock('@/features/game/useGiphy.ts', () => ({
  useGiphy: () => ({
    isLoading: false,
    error: null,
    data: mockGiphyData,
    refetchGifs: () => {},
  }),
}));

describe('Gameboard component', () => {
  it('renders scoreboard and game tiles', () => {
    const { container } = render(<Gameboard />);

    expect(container).toMatchSnapshot();
  });

  it('renders a tile for each src', () => {
    render(<Gameboard />);

    const tiles = screen.getAllByRole('listitem');
    expect(tiles.length).toBe(NUM_SRC);
  })
});
