import { motion } from 'motion/react';
import refresh from '../../assets/svgs/refresh.svg';

type refreshButtonProps = {
  onClick: () => void;
};

const RefreshButton = ({ onClick }: refreshButtonProps) => {
  return (
    <motion.button
      className="hover:bg-sand-beige-light rounded-full p-1"
      initial={{
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      whileHover={{
        rotate: 360,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      }}
      onClick={onClick}
    >
      <img src={refresh} alt="refresh button" />
    </motion.button>
  );
};

export { RefreshButton };
