import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, github, link, index }) => {
  const alignment = index % 2 === 0 ? 'left' : 'right';

  return (
    <div className="project-card" style={{ alignItems: alignment === 'left' ? 'flex-start' : 'flex-end' }}>
      <motion.h2
        className={`project-card-title ${alignment === 'left' ? 'text-left' : 'text-right'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className={`project-card-description ${alignment === 'left' ? 'text-left' : 'text-right'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {description}
      </motion.p>
      <div className="flex gap-3 lg:gap-5">
        {link && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href={link} className="project-card-link">
              Visit
            </Link>
          </motion.div>
        )}
        {github && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href={github} className="project-card-link text-white">
              Github
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
