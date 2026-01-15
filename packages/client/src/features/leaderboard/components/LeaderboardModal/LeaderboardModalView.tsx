import type { Winner } from '@/features/leaderboard/schemas/winner.schema.ts';
import { Modal } from '@/shared/components/Modal';
import { LeaderboardList } from '@/features/leaderboard/components/LeaderboardList';

type leaderboardModalProps = {
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
  winners: Winner[];
};

const LeaderboardModalView = ({
  className = '',
  isOpen,
  closeModal,
  winners = [],
}: leaderboardModalProps) => {
  return (
    <Modal
      className={className}
      open={isOpen}
      showLogo={false}
      headerText="Leaderboard"
      contentWrapperStyling="w-full"
    >
      <div className="mt-3 h-42">
        <LeaderboardList className="px-3" winners={winners} />
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

export { LeaderboardModalView };
