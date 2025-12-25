import type { Ref } from 'react';
import { Modal } from '@/components/Modal';

type loseModalProps = {
  ref: Ref<HTMLDialogElement>;
  handlePlayAgain: () => void;
};

const LoseModal = ({ ref, handlePlayAgain }: loseModalProps) => {
  return (
    <Modal
      ref={ref}
      headerText="Lose"
      contentWrapperStyling="flex flex-col items-center"
    >
      <p className="mt-0.5">Keep trying, You can do it!</p>
      <button
        className="border-blooming-dahlia bg-blooming-dahlia/40 mt-3 rounded-md border-2 px-5 py-0.5"
        onClick={handlePlayAgain}
      >
        Play again
      </button>
    </Modal>
  );
};

export { LoseModal };
