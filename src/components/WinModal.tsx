import type { Ref } from 'react';
import logo from '../assets/pretty-guardian-logo.png';

type winModalProps = {
  ref: Ref<HTMLDialogElement>;
};

const WinModal = ({ ref }: winModalProps) => {
  return (
    <dialog
      className="border-sand-beige mx-auto my-auto rounded-2xl border-3 backdrop:bg-white/40"
      ref={ref}
    >
      <div className="flex flex-col items-center px-5 pt-2 pb-5">
        <img className="mx-auto w-36" src={logo} alt="" />
        <h2 className="text-xl font-bold">Winner!</h2>
        <div className="flex w-full justify-between">
          <div>(☆｀• ω •´ )ｂ</div> ☆ <div>d(｀• ω • ´☆)</div>
        </div>
        <p>wowza you have such great memory!</p>
        <div className="mt-3 grid w-full grid-cols-2 justify-center gap-5">
          <button className="border-blooming-dahlia bg-blooming-dahlia/40 rounded-md border-2 px-5 py-0.5">
            Close
          </button>
          <button className="border-sand-beige-dark bg-sand-beige/40 rounded-md border-2 px-5 py-0.5">
            Play again
          </button>
        </div>
      </div>
    </dialog>
  );
};

export { WinModal };
