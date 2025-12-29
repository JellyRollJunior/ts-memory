import { motion } from 'motion/react';
import { IconButton } from '@/components/IconButton';
import refresh from '@/assets/svgs/refresh.svg';

type refreshButtonProps = {
  onClick: () => void;
};

const RefreshButton = ({ onClick }: refreshButtonProps) => {
  return (
    <motion.div
      className="hover:bg-sand-beige-light rounded-full"
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
      <IconButton className="p-2" src={refresh} onClick={onClick} />
    </motion.div>
  );
};

export { RefreshButton };
