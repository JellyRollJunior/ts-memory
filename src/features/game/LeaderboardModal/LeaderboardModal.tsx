import { Modal } from '@/components/Modal';
import SimpleBar from 'simplebar-react';
import gold from '@/assets/svgs/trophy-gold.svg';
import silver from '@/assets/svgs/trophy-silver.svg';
import bronze from '@/assets/svgs/trophy-bronze.svg';

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
  winners = ['bob', 'billy', 'joe', 'usagi', 'luna', 'joe', 'usagi', 'luna', 'joe', 'usagi', 'luna'],
}: leaderboardModalProps) => {
  return (
    <Modal
      className={className}
      open={isOpen}
      showLogo={false}
      headerText="Leaderboard"
      contentWrapperStyling="w-full"
    >
      <SimpleBar className="border-sand-beige mt-3 h-42 border-t-2 border-b-2 px-6">
        <ol className="my-2 flex flex-col gap-0.5">
          {winners.length == 0 ? (
            <li className='text-center'>No winners yet!</li>
          ) : (
            winners.map((winner, index) => (
              <li key={index + winner} className="grid w-full grid-cols-[24px_1fr_24px] items-center gap-2">
                <span>{index + 1}.</span>
                <span className="text-lg">{winner}</span>
                {index == 0 ? (
                  <img src={gold} />
                ) : index == 1 ? (
                  <img src={silver} />
                ) : index == 2 ? (
                  <img src={bronze} />
                ) : (
                  <div />
                )}
              </li>
            ))
          )}
        </ol>
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

export { LeaderboardModal };
