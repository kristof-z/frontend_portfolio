"use client";
import { motion, } from 'framer-motion';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { projects } from '@/app/constants';

export default function Section2() {
  return (
    <div className="section2-container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section2-header flex flex-col text-center -translate-x-5 lg:translate-x-0">
          <p className="section2-header-text text-white">Featured</p>
          <p className="section2-header-text translate-x-5 lg:translate-x-20">Projects</p>
        </div>
      </motion.h2>

      <div className="section2-content">
        {projects.map((project, index) => (
          <div
            key={index}
            className='section2-project'
          >
            <ProjectCard
              index={project.index}
              title={project.title}
              description={project.description}
              github={project.github}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
