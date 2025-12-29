import { describe, it, expect, vi } from 'vitest';
import { ErrorPage } from '@/pages/ErrorPage';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';

vi.mock('@/layout/ErrorContent', () => ({
  ErrorContent: () => <div>Error here!</div>,
}));

vi.mock('@/layout/MainLayout', () => ({
  MainLayout: ({ children }: { children: ReactNode }) => (
    <main>{children}</main>
  ),
}));

describe('Error Page component', () => {
  it('renders ErrorContent inside MainLayout', () => {
    const { container } = render(<ErrorPage />);

    expect(container).toMatchSnapshot();
  });
});
