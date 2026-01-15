import UserEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { LeaderboardModalView } from '@/features/leaderboard/components/LeaderboardModal/LeaderboardModalView.jsx';

vi.mock('@/features/leaderboard/components/LeaderboardList', () => ({
  LeaderboardList: () => <ol>I am a list of winners!</ol>,
}));

describe('Leaderboard modal component', () => {
  it('renders title, leaderboard, and close button', () => {
    const { container } = render(
      <LeaderboardModalView isOpen={true} closeModal={() => {}} winners={[]} />
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
      />
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    await user.click(closeButton);

    expect(closeModal).toHaveBeenCalledOnce();
  });
});
