import type { Winner } from '@/features/leaderboard/schemas/winner.schema.ts';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LeaderboardList } from './LeaderboardList.tsx';

describe('Leaderboard List components', () => {
  const WINNERS: Winner[] = [
    { name: 'billy', datetime: 'jean' },
    { name: 'jean', datetime: 'jean' },
    { name: 'is', datetime: 'jean' },
    { name: 'not', datetime: 'jean' },
    { name: 'my', datetime: 'jean' },
    { name: 'lover', datetime: 'jean' },
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
