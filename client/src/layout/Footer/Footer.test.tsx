import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from '@/layout/Footer';

describe('Footer component', () => {
  it('renders contact links, signature, and footer decorations', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
