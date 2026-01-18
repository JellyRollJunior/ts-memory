import { useState, type FormEvent } from 'react';
import { Modal } from '@/shared/components/Modal';
import { useSubmitWinner } from '@/features/game/hooks/useSubmitWinner.ts';

type winModalProps = {
  className?: string;
  open: boolean;
  handlePlayAgain: () => void;
};

const WinModal = ({ className = '', open, handlePlayAgain }: winModalProps) => {
  const [name, setName] = useState('');
  const { submitWinner, isLoading, error } = useSubmitWinner();

  const resetInputs = () => {
    setName('');
  };

  const submitAndPlayAgain = async (event: FormEvent) => {
    event.preventDefault();
    await submitWinner(name);
    if (!error) {
      resetInputs();
      handlePlayAgain();
    }
  };

  return (
    <Modal
      className={className}
      open={open}
      showLogo={true}
      headerText="Winner!"
      contentWrapperStyling="flex flex-col items-center"
    >
      <form className="mt-4 flex flex-col self-start">
        <label htmlFor="winner-name">Add your name to the leaderboards</label>
        <input
          className="border-sand-beige mt-1 h-8 w-full rounded-md border-2 pr-1 pl-2"
          id="winner-name"
          type="text"
          minLength={1}
          maxLength={16}
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="self-end text-sm text-red-400">{error}</div>
        <div className="mt-1.5 flex w-full justify-center gap-5">
          <button
            type="button"
            className="primary-button px-5 py-0.5"
            onClick={() => {
              resetInputs();
              handlePlayAgain();
            }}
          >
            Play again
          </button>
          <button
            className="secondary-button px-5 py-0.5"
            onClick={submitAndPlayAgain}
            disabled={isLoading}
          >
            Submit & play again
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { WinModal };
