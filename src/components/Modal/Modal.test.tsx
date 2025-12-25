import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { Modal } from '@/components/Modal';
import { render, screen } from '@testing-library/react';

describe('Modal component', () => {
  it('Renders dialog, logo, and emojis', () => {
    const { container } = render(
      <Modal ref={null} headerText="Test" contentWrapperStyling="" />
    );

    expect(container).toMatchSnapshot();
  });

  it('Renders text from prop: headerText in heading', () => {
    const headerText = 'Test';
    render(
      <Modal ref={null} headerText={headerText} contentWrapperStyling="" />
    );

    expect(
      screen.getByRole('heading', { name: headerText, hidden: true })
    ).toBeInTheDocument();
  });
});
