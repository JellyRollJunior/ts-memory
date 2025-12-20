import type { Ref } from 'react';
import logo from '../assets/pretty-guardian-logo.png';

type loseModalProps = {
  ref: Ref<HTMLDialogElement>;
  handlePlayAgain: () => void;
};

const LoseModal = ({ ref, handlePlayAgain }: loseModalProps) => {
  return (
    <dialog className="dialog min-w-2xs" ref={ref}>
      <div className="flex flex-col items-center px-5 pt-2 pb-5">
        <img className="mx-auto w-36" src={logo} alt="" />
        <h2 className="text-xl font-bold">Lose</h2>
        <div className="flex w-full justify-between">
          <div>(☆｀• ω •´ )ｂ</div> ☆ <div>d(｀• ω • ´☆)</div>
        </div>
        <p className='mt-0.5'>Keep trying, You can do it!</p>
        <button
          className="border-blooming-dahlia bg-blooming-dahlia/40 rounded-md border-2 px-5 py-0.5 mt-3"
          onClick={handlePlayAgain}
        >
          Play again
        </button>
      </div>
    </dialog>
  );
};

export { LoseModal };
