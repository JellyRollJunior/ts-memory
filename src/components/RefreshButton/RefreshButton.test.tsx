import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RefreshButton } from '@/components/RefreshButton';
import { render, screen } from '@testing-library/react';

describe('Refresh button component', () => {
  it('Renders a button with the refresh icon', () => {
    const { container } = render(<RefreshButton onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('Calls function provided in onClick prop on clicking button', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<RefreshButton onClick={onClick} />);

    const refreshButton = screen.getByRole('button');
    await user.click(refreshButton);

    expect(onClick).toHaveBeenCalledOnce();
  })
});
