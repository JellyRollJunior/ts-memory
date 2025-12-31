import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from '@/layout/Header';

describe('Header component', () => {
  it('renders logo, title, and game explanation', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
