import type { Winner } from '@/features/winners/types.ts';
import SimpleBar from 'simplebar-react';
import { Modal } from '@/shared/components/Modal';
import { LeaderboardList } from '@/features/winners/components/LeaderboardList';
import { LoadingAnimation } from '@/shared/components/LoadingAnimation';

type leaderboardModalProps = {
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
  winners: Winner[];
  isLoadingWinners: boolean;
  error: string | null;
};

const LeaderboardModalView = ({
  className = '',
  isOpen,
  closeModal,
  winners = [],
  isLoadingWinners = false,
  error = null,
}: leaderboardModalProps) => {
  return (
    <Modal
      className={className}
      open={isOpen}
      showLogo={false}
      headerText="Leaderboard"
      contentWrapperStyling="w-full"
    >
      <SimpleBar className="border-sand-beige mt-3 h-42 border-t-2 border-b-2">
        {isLoadingWinners ? (
          <LoadingAnimation className='flex w-full mt-6 items-center justify-center' />
        ) : error ? (
          <div className="text-pink mt-3 text-center">{error}</div>
        ) : (
          <LeaderboardList className="px-3" winners={winners} />
        )}
      </SimpleBar>
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
