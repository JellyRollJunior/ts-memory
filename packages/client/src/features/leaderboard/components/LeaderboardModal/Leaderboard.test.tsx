import type { ReactNode } from 'react';
import '@testing-library/jest-dom/vitest';
import UserEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { LeaderboardModal } from '@/features/leaderboard/components/LeaderboardModal';

vi.mock('simplebar-react', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock('@/features/leaderboard/components/LeaderboardList', () => ({
  LeaderboardList: () => <ol>I am a list of winners!</ol>
}));

describe('Leaderboard modal component', () => {
  const WINNERS = ['bob', 'billy', 'usagi'];

  it('renders title, leaderboard, and close button', () => {
    const { container } = render(
      <LeaderboardModal isOpen={true} closeModal={() => {}} winners={WINNERS} />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls closeModal function on clicking close button', async () => {
    const user = UserEvent.setup();
    const closeModal = vi.fn();
    render(
      <LeaderboardModal
        isOpen={true}
        closeModal={closeModal}
        winners={WINNERS}
      />
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    await user.click(closeButton);

    expect(closeModal).toHaveBeenCalledOnce();
  });
});
