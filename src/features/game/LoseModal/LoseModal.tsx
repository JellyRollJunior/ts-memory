import { Modal } from '@/components/Modal';

type loseModalProps = {
  open: boolean,
  handlePlayAgain: () => void,
};

const LoseModal = ({ open, handlePlayAgain }: loseModalProps) => {
  return (
    <Modal
      open={open}
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
