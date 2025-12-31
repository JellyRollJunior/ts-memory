import type { ReactNode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { HomePage } from '@/pages/HomePage';
import { render } from '@testing-library/react';

vi.mock('@/layout/MainLayout', () => ({
  MainLayout: ({ children }: { children: ReactNode }) => (
    <main>{children}</main>
  ),
}));

vi.mock('@/features/game', () => ({
  Gameboard: () => <div>I am a Gameboard!</div>,
}));

describe('HomePage component', () => {
  it('renders gameboard in main layout', () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });
});
