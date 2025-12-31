import { Modal } from '@/components/Modal';

type leaderboardModalProps = {
  className: string;
  isOpen: boolean;
  closeModal: () => void;
};

const LeaderboardModal = ({
  className = '',
  isOpen,
  closeModal,
}: leaderboardModalProps) => {
  return (
    <Modal
      className={className}
      open={isOpen}
      showLogo={false}
      headerText="Leaderboard"
    >
      <div className="mt-2">This is the leaderboard!</div>
      <button
        className="secondary-button mx-auto mt-2 block px-5 py-0.5"
        onClick={closeModal}
      >
        Close
      </button>
    </Modal>
  );
};

export { LeaderboardModal };
