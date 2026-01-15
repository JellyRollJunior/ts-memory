import { Modal } from '@/shared/components/Modal';
import { LeaderboardList } from '@/features/leaderboard/components/LeaderboardList';
import { useWinners } from '@/features/leaderboard/hooks/useWinners.ts';

type leaderboardModalProps = {
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
  winners?: string[];
};

const LeaderboardModal = ({
  className = '',
  isOpen,
  closeModal,
}: leaderboardModalProps) => {
  const { data, isLoading, error} = useWinners();

  return (
    <Modal
      className={className}
      open={isOpen}
      showLogo={false}
      headerText="Leaderboard"
      contentWrapperStyling="w-full"
    >
      <div className="mt-3 h-42">
        <LeaderboardList
          className="px-6"
          winners={data}
        />
      </div>
      <button
        className="secondary-button mx-auto mt-4 block px-5 py-0.5"
        onClick={closeModal}
      >
        Close
      </button>
    </Modal>
  );
};

export { LeaderboardModal };
