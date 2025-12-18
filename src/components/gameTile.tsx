import type { Tile } from '../types/types.ts';
import { motion } from 'motion/react';

type AppProps = {
  data: Tile;
  onClick: () => void;
  isLoading: boolean;
};

const GameTile = ({ data, onClick, isLoading = false }: AppProps) => {
  return !isLoading ? (
    <motion.li
      className={`border-sand-beige aspect-square h-full rounded-lg border-5 overflow-hidden`}
      style={{ backgroundColor: '#f0eee6' }}
      animate={{ backgroundColor: '#d9d4c0' }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      <button className="size-full" onClick={onClick}>
        <img className="size-full object-cover" src={data.src} />
      </button>
    </motion.li>
  ) : (
    <motion.li
      className={`border-sand-beige aspect-square h-full rounded-lg border-5`}
      style={{ backgroundColor: '#f0eee6' }}
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
