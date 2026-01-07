import { describe, it, expect } from 'vitest';
import { ErrorContent } from '@/layout/ErrorContent';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Error Content component', () => {
  it('Renders error messages and return home button', () => {
    const { container } = render(
      <BrowserRouter>
        <ErrorContent />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
