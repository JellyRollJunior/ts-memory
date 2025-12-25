import type { Ref, ReactNode } from 'react';
import logo from '@/assets/pretty-guardian-logo.png';

type modalProps = {
  ref: Ref<HTMLDialogElement>,
  headerText: string,
  contentWrapperStyling?: string;
  children?: ReactNode;
};

const Modal = ({ ref, headerText, contentWrapperStyling = "", children }: modalProps) => {
  return (
    <dialog className="dialog min-w-2xs" ref={ref}>
      <div className="flex flex-col items-center px-5 pt-2 pb-5">
        <img className="mx-auto w-36" src={logo} alt="Sailor Moon sitting on a crescent moon" />
        <h2 className="text-xl font-bold">{headerText}</h2>
        <div className="flex w-full justify-between">
          <div>(☆｀• ω •´ )ｂ</div> ☆ <div>d(｀• ω • ´☆)</div>
        </div>
        <main className={`${contentWrapperStyling}`}>{children}</main>
      </div>
    </dialog>
  );
};

export { Modal };
