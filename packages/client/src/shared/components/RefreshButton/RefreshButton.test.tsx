import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { RefreshButton } from '@/shared/components/RefreshButton';
import { render } from '@testing-library/react';

describe('Refresh button component', () => {
  it('Renders an icon button with the refresh icon', () => {
    const { container } = render(<RefreshButton onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
