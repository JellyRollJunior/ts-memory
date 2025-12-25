import type { Tile } from '../../types/types.ts';
import { motion } from 'motion/react';
import errorIcon from '../../assets/svgs/dead-face.svg';

type gameTileProps = {
  data: Tile;
  onClick: () => void;
  isLoading: boolean;
  isError: boolean;
  isCheating: boolean;
};

const GameTile = ({
  data,
  onClick,
  isLoading = false,
  isError = false,
  isCheating = false,
}: gameTileProps) => {
  if (isLoading) {
    return (
      <motion.li
        className="border-sand-beige aspect-16/11 h-full w-full rounded-3xl border-5"
        style={{ backgroundColor: '#e8e5d9' }}
        animate={{ backgroundColor: '#d9d4c0' }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.8,
          ease: 'easeInOut',
        }}
      />
    );
  }
  return (
    <li
      className={`border-sand-beige bg-sand-beige-light aspect-16/11 h-full w-full overflow-hidden rounded-3xl border-5 ${isCheating && data.clicked && 'outline-pink outline-3'}`}
    >
      <button className="size-full" onClick={onClick}>
        {!isError ? (
          <img className="size-full object-cover" src={data.src} />
        ) : (
          <img className="m-auto" src={errorIcon} />
        )}
      </button>
    </li>
  );
};

export { GameTile };
