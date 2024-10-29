"use client";
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion'; // Import Framer Motion
import StackBar from "./StackBar";
import Buttons from "./Buttons";
import { likes, skills } from "@/app/constants";


export default function Section1() {
  return (
    <div className="section1-container">
      <div className="section1-content">
        <motion.h1
          className="section1-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-yellow-400 mr-5 lg:mr-8">Hi</p> there!
        </motion.h1>
        <motion.h2
          className="section1-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-white mb-[30px]">I like</p>
            <ReactTyped 
              className=""
              strings={likes} 
              loop 
              typeSpeed={40}
              backSpeed={10}
              showCursor={true}
              cursorChar="."
              autoInsertCss={true}
            />
     
        </motion.h2>

        <motion.h3
          className="section1-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          This page showcases my work and dedication to development. I am excited to share my skills and hope it gives you insight into how I can contribute to your next project or team. Let’s build something great together!
        </motion.h3>
      </div>
      <Buttons />

      <StackBar {...{ skills }} />
    </div>
  );
}
