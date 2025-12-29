import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import { IconButton } from '@/components/IconButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import deadFaceIcon from '@/assets/svgs/dead-face.svg';

describe('Icon Button component', () => {
  it('Renders a button around img specified in src', () => {
    const { container } = render(
      <IconButton className="" src={deadFaceIcon} onClick={() => {}} alt='' />
    );

    expect(container).toMatchSnapshot();
  });

  it('Calls function in onClick prop on clicking button', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<IconButton className="" src={deadFaceIcon} onClick={onClick} alt='' />);

    const iconButton = screen.getByRole('button');
    await user.click(iconButton);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
