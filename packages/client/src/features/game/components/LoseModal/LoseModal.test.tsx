import type { ReactNode } from 'react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoseModal } from '@/features/game/components/LoseModal';

vi.mock('@/shared/components/modal', () => ({
  Modal: ({ children }: { children: ReactNode }) => <dialog>{children}</dialog>,
}));

describe('Lose Modal component', () => {
  it('Renders encouraging message and play again button', () => {
    const { container } = render(
      <LoseModal open={true} handlePlayAgain={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it('Calls handlePlayAgain on clicking play again button', async () => {
    const user = userEvent.setup();
    const handlePlayAgain = vi.fn();
    render(<LoseModal open={true} handlePlayAgain={handlePlayAgain} />);

    const playAgainButton = screen.getByRole('button', { hidden: true });
    await user.click(playAgainButton);

    expect(handlePlayAgain).toHaveBeenCalledOnce();
  });
});
