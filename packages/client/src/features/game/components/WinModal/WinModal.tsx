import type { FormEvent } from 'react';
import { Modal } from '@/shared/components/Modal';

type winModalProps = {
  className?: string;
  open: boolean;
  handlePlayAgain: () => void;
};

const WinModal = ({ className = '', open, handlePlayAgain }: winModalProps) => {
  const submitAndPlayAgain = (event: FormEvent) => {
    event.preventDefault();
    handlePlayAgain();
  };

  return (
    <Modal
      className={className}
      open={open}
      showLogo={true}
      headerText="Winner!"
      contentWrapperStyling="flex flex-col items-center"
    >
      <form className="mt-3 flex flex-col self-start">
        <label htmlFor="winner-name">Add your name to the leaderboards</label>
        <input
          className="border-sand-beige mt-1 h-8 rounded-md border-2 pr-1 pl-2"
          id="winner-name"
          type="text"
          minLength={1}
          maxLength={16}
          placeholder='name'
        />
        <div className="mt-3.5 flex w-full justify-center gap-5">
          <button
            type="button"
            className="primary-button px-5 py-0.5"
            onClick={handlePlayAgain}
          >
            Play again
          </button>
          <button
            className="secondary-button px-5 py-0.5"
            onClick={submitAndPlayAgain}
          >
            Submit & play again
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { WinModal };
