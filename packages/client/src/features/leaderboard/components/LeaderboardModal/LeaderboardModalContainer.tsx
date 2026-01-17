import { useWinners } from '@/features/leaderboard/hooks/useWinners';
import { LeaderboardModalView } from '@/features/leaderboard/components/LeaderboardModal/LeaderboardModalView.tsx';

type leaderboardModalContainerProps = {
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
};

const LeaderboardModalContainer = ({
  className = '',
  isOpen,
  closeModal,
}: leaderboardModalContainerProps) => {
  const { data, isLoading, error } = useWinners();

  return (
    <LeaderboardModalView
      className={className}
      isOpen={isOpen}
      closeModal={closeModal}
      winners={data}
      isLoadingWinners={isLoading}
      error={error}
    />
  );
};

export { LeaderboardModalContainer };
