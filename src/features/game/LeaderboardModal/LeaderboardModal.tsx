import { Modal } from '@/components/Modal';

type leaderboardModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const LeaderboardModal = ({ isOpen, closeModal }: leaderboardModalProps) => {
  return (
    <Modal open={isOpen} headerText="Leaderboard">
      <div className='mt-2'>This is the leaderboard!</div>
      <button className='secondary-button mt-2 mx-auto block px-5 py-0.5' onClick={closeModal}>Close</button>
    </Modal>
  );
};

export { LeaderboardModal };
