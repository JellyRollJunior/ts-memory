import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { Modal } from '@/shared/components/Modal';
import { render, screen } from '@testing-library/react';

describe('Modal component', () => {
  it('renders dialog, logo, and emojis', () => {
    const { container } = render(
      <Modal
        className=""
        open={true}
        showLogo={true}
        headerText="Test"
        contentWrapperStyling=""
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders text from prop: headerText in heading', () => {
    const headerText = 'Test';
    render(
      <Modal
        className=""
        open={true}
        showLogo={true}
        headerText={headerText}
        contentWrapperStyling=""
      />
    );

    expect(
      screen.getByRole('heading', { name: headerText, hidden: true })
    ).toBeInTheDocument();
  });

  it('does not render logo if showLogo == false', () => {
    render(
      <Modal
        className=""
        open={true}
        showLogo={false}
        headerText="Test"
        contentWrapperStyling=""
      />
    );

    const logo = screen.queryByRole('img');
    expect(logo).not.toBeInTheDocument();
  });
});
