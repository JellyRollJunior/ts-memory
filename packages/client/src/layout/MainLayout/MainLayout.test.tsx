import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MainLayout } from '@/layout/MainLayout';

vi.mock('@/layout/Header', () => ({
  Header: () => <header />,
}));

vi.mock('@/layout/Footer', () => ({
  Footer: () => <footer />,
}));

describe('MainLayout layout component', () => {
  it('renders main page layout with children', () => {
    const { container } = render(
      <MainLayout>
        <div>I am a child!</div>
      </MainLayout>
    );

    expect(container).toMatchSnapshot();
  });
});
