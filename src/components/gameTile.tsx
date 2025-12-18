import type { Tile } from '../types/types.ts';
import { motion } from 'motion/react';
import errorIcon from '../assets/svgs/dead-face.svg';

type AppProps = {
  data: Tile;
  onClick: () => void;
  isLoading: boolean;
  isError: boolean;
};

const GameTile = ({
  data,
  onClick,
  isLoading = false,
  isError = false,
}: AppProps) => {
  return !isLoading ? (
    <li
      className={`border-sand-beige bg-sand-beige-light aspect-square h-full overflow-hidden rounded-lg border-5`}
    >
      <button className="size-full" onClick={onClick}>
        {!isError ? (
          <img className="size-full object-cover" src={data.src} />
        ) : (
          <img className="m-auto" src={errorIcon} />
        )}
      </button>
    </li>
  ) : (
    <motion.li
      className="border-sand-beige aspect-square h-full rounded-lg border-5"
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
};

export { GameTile };
