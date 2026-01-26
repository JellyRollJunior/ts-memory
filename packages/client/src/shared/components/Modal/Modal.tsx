import { useRef, type ReactNode } from 'react';
import logo from '@/assets/pretty-guardian-logo.png';

type modalProps = {
  className?: string;
  open: boolean;
  showLogo: boolean;
  headerText: string;
  contentWrapperStyling?: string;
  children?: ReactNode;
};

const Modal = ({
  className = '',
  open = false,
  showLogo = true,
  headerText,
  contentWrapperStyling = '',
  children,
}: modalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const openModal = () => ref && ref.current && ref.current.showModal();
  const closeModal = () => ref && ref.current && ref.current.close();

  open ? openModal() : closeModal();

  return (
    <dialog ref={ref} className={`dialog min-w-2xs ${className}`}>
      <div className="flex flex-col items-center px-5 pt-2 pb-5">
        {showLogo && (
          <img
            className="mx-auto w-36"
            src={logo}
            alt="Sailor Moon sitting on a crescent moon"
          />
        )}
        <h2 className="text-xl font-bold">{headerText}</h2>
        <div className="flex w-full justify-between">
          <div>(☆｀• ω •´ )ｂ</div>☆<div>d(｀• ω • ´☆)</div>
        </div>
        <main className={`${contentWrapperStyling}`}>{children}</main>
      </div>
    </dialog>
  );
};

export { Modal };
