import type { ReactNode } from 'react';
import UserEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { LeaderboardModalView } from '@/features/winners/components/LeaderboardModal/LeaderboardModalView.js';

vi.mock('simplebar-react', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock('@/features/winners/components/LeaderboardList', () => ({
  LeaderboardList: () => <ol>I am a list of winners!</ol>,
}));

describe('Leaderboard modal component', () => {
  it('renders title, leaderboard, and close button', () => {
    const { container } = render(
      <LeaderboardModalView
        isOpen={true}
        closeModal={() => {}}
        winners={[]}
        isLoadingWinners={false}
        error={null}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls closeModal function on clicking close button', async () => {
    const user = UserEvent.setup();
    const closeModal = vi.fn();
    render(
      <LeaderboardModalView
        isOpen={true}
        closeModal={closeModal}
        winners={[]}
        isLoadingWinners={false}
        error={null}
      />
    );

    const closeButton = screen.getByRole('button', {
      name: 'Close',
      hidden: true,
    });
    await user.click(closeButton);

    expect(closeModal).toHaveBeenCalledOnce();
  });
});
