import { Modal } from '@/components/Modal';

type loseModalProps = {
  className: string;
  open: boolean;
  handlePlayAgain: () => void;
};

const LoseModal = ({
  className = '',
  open,
  handlePlayAgain,
}: loseModalProps) => {
  return (
    <Modal
      className={className}
      open={open}
      showLogo={true}
      headerText="Lose"
      contentWrapperStyling="flex flex-col items-center"
    >
      <p className="mt-0.5">Keep trying, You can do it!</p>
      <button
        className="secondary-button mt-3 px-5 py-0.5"
        onClick={handlePlayAgain}
      >
        Play again
      </button>
    </Modal>
  );
};

export { LoseModal };
