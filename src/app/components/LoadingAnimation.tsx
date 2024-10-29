import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';

const circleVariants = {
  hidden: { strokeDashoffset: 100 },
  visible: (progress: number) => ({
    strokeDashoffset: 100 - progress,
    transition: { duration: 0.3, ease: 'easeInOut' },
  }),
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function LoadingAnimation() {
  const {progress} = useProgress();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">
        {/* Circular Progress Bar */}
        <svg className="w-24 h-24">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#ddd"
            strokeWidth="5"
            fill="transparent"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#facc15"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray="100"
            strokeDashoffset="100"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            custom={progress}
          />
        </svg>

        {/* Progress Number */}
        <motion.div
          className="absolute text-yellow-400 font-bold text-xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          key={progress}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  );
}
