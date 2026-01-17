import type { Winner } from '@/features/winners/types.ts';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LeaderboardList } from './LeaderboardList.tsx';

describe('Leaderboard List components', () => {
  const WINNERS: Winner[] = [
    { name: 'billy', datetime: new Date() },
    { name: 'jean', datetime: new Date() },
    { name: 'is', datetime: new Date() },
    { name: 'not', datetime: new Date() },
    { name: 'my', datetime: new Date() },
    { name: 'lover', datetime: new Date() },
  ];

  it('renders a list of winners', () => {
    const { container } = render(<LeaderboardList winners={WINNERS} />);

    expect(container).toMatchSnapshot();
  });

  it('renders every name in winners prop', () => {
    render(<LeaderboardList winners={WINNERS} />);
    const winnerListItems = screen.getAllByRole('listitem');

    expect(winnerListItems.length).toBe(WINNERS.length);
  });
});
