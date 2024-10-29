import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import Form from './Form';
import StackBar from './StackBar';
import { skills } from '@/app/constants';

const Section3: React.FC = () => {
  return (
    <div className="section3-container">
      <StackBar className='stackbar-container2' {...{ skills }} />
      <motion.h2
        className='section3-title mt-[100px] lg:mt-0'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="flex flex-col w-full text-center gap-[50px]">
          <p className="section2-header-text text-white self-center">
            <span className='text-yellow-400'>Get</span> in touch
          </p>
          <p className="section1-text text-white font-normal">
            Have a question, project idea, or just want to connect? I’d love to hear from you! Enter your email below, and let’s start a conversation about how we can bring your vision to life.
          </p>
        </span>       
      </motion.h2>
      <div className='w-full items-center justify-center flex'>
        <Form />
      </div>
    </div>
  );
};

export default Section3;