import type { Variants } from 'motion/react';
import { motion } from 'motion/react';

type ItemVariantPhase = 'start' | 'middle';

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.39,
    },
  },
};

const createItemVariants = (
  phase: ItemVariantPhase,
  translateDistance: number,
  duration: number,
  color1: string,
  color2: string
): Variants => {
  const isMiddle = phase === 'middle';

  return {
    initial: {
      x: 0,
      y: 0,
      ...(isMiddle && { backgroundColor: color2 }),
    },

    animate: {
      y: isMiddle
        ? [translateDistance, 0, translateDistance]
        : [0, translateDistance, 0],

      opacity: isMiddle ? [1, 0, 1, 1, 1] : [1, 1, 1, 0, 1],

      scale: isMiddle ? [1, 0.7, 1, 1.4, 1] : [1, 1.4, 1, 0.7, 1],

      backgroundColor: isMiddle
        ? [color2, color1, color1, color1, color2]
        : [color1, color1, color2, color1, color1],

      transition: {
        y: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
        opacity: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
        scale: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
        backgroundColor: {
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      },
    },
  };
};

const TRANSLATE_DISTANCE = 35;
const DURATION = 3;
const COLOR_1 = '#ff819f';
const COLOR_2 = '#daab73';

const itemVariants = createItemVariants(
  'start',
  TRANSLATE_DISTANCE,
  DURATION,
  COLOR_1,
  COLOR_2
);

const itemVariantsMiddle = createItemVariants(
  'middle',
  TRANSLATE_DISTANCE,
  DURATION,
  COLOR_1,
  COLOR_2
);

type BallArrayProps = {
  containerVariants: Variants;
  itemVariants: Variants;
  numBalls?: number;
};

const BallArray = ({
  containerVariants,
  itemVariants,
  numBalls = 5,
}: BallArrayProps) => {
  return (
    <motion.div
      className="absolute flex justify-center gap-1.5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {[...Array(numBalls)].map((_value, index) => (
        <motion.div
          key={index + Date.toString()}
          className="size-2 rounded-full"
          variants={itemVariants}
        />
      ))}
    </motion.div>
  );
};

const LoadingAnimation = ({ className = '', numBalls = 9 }) => {
  return (
    <div className={`relative ${className}`}>
      <BallArray
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        numBalls={numBalls}
      />
      <BallArray
        containerVariants={containerVariants}
        itemVariants={itemVariantsMiddle}
        numBalls={numBalls}
      />
    </div>
  );
};

export { LoadingAnimation };
