import type { Ref } from "react";

type winModalProps = {
  ref: Ref<HTMLDialogElement>;
};

const WinModal = ({ ref }: winModalProps) => {
  return (
    <dialog ref={ref}>
      hi i am a winner!
      <div>
        <button>Play again</button>
        <button>Close</button>
      </div>
    </dialog>
  );
};

export { WinModal };
