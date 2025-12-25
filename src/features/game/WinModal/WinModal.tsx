import type { Ref } from 'react';
import { Modal } from '@/components/Modal';

type winModalProps = {
  ref: Ref<HTMLDialogElement>;
  handlePlayAgain: () => void;
};

const WinModal = ({ ref, handlePlayAgain }: winModalProps) => {
  return (
    <Modal
      ref={ref}
      headerText="Winner!"
      contentWrapperStyling="flex flex-col items-center"
    >
      <p>wowza you have such great memory!</p>
      <div className="mt-3 grid w-full grid-cols-2 justify-center gap-5">
        <button className="border-blooming-dahlia bg-blooming-dahlia/40 rounded-md border-2 px-5 py-0.5">
          Close
        </button>
        <button
          className="border-sand-beige-dark bg-sand-beige/40 rounded-md border-2 px-5 py-0.5"
          onClick={handlePlayAgain}
        >
          Play again
        </button>
      </div>
    </Modal>
  );
};

export { WinModal };
