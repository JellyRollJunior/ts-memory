import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { GameTile } from '@/features/game/components/GameTile';
import { render, screen } from '@testing-library/react';
import logo from '@/assets/pretty-guardian-logo.png';
import deadFace from '@/assets/svgs/dead-face.svg';

describe('Game Tile component', () => {
  const GAME_TILE_DATA = {
    id: 'test',
    src: logo,
    clicked: false,
  };

  it('Renders button with image', () => {
    const { container } = render(
      <GameTile
        data={GAME_TILE_DATA}
        onClick={() => {}}
        isLoading={false}
        isError={false}
        isCheating={false}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('Calls function in onClick prop on clicking button', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <GameTile
        data={GAME_TILE_DATA}
        onClick={onClick}
        isLoading={false}
        isError={false}
        isCheating={false}
      />
    );

    const gameTile = screen.getByRole('button');
    await user.click(gameTile);

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('Displays broken link icon on error', async () => {
    render(
      <GameTile
        data={GAME_TILE_DATA}
        onClick={() => {}}
        isLoading={false}
        isError={true}
        isCheating={false}
      />
    );

    const gameTileImg = screen.getByRole('img') as HTMLImageElement;
    expect(gameTileImg).toHaveAttribute('src', deadFace);
  });
});
