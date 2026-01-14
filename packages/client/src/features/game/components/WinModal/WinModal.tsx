import { Modal } from '@/shared/components/Modal';

type winModalProps = {
  className?: string;
  open: boolean;
  handlePlayAgain: () => void;
};

const WinModal = ({ className = '', open, handlePlayAgain }: winModalProps) => {
  return (
    <Modal
      className={className}
      open={open}
      showLogo={true}
      headerText="Winner!"
      contentWrapperStyling="flex flex-col items-center"
    >
      <p>wowza you have such great memory!</p>
      <div className="mt-3 grid w-full grid-cols-2 justify-center gap-5">
        <button className="primary-button px-5 py-0.5">Close</button>
        <button
          className="secondary-button px-5 py-0.5"
          onClick={handlePlayAgain}
        >
          Play again
        </button>
      </div>
    </Modal>
  );
};

export { WinModal };
