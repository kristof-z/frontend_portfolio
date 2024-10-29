import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  label: string;
  href: string; 
  icon: React.ReactNode; 
}

function IconButton({ label, href, icon }: IconButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="bg-yellow-400 text-black p-4 rounded-full flex items-center justify-center m-[10px] relative"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }} 
    >
      {icon}
    </motion.a>
  );
};

export default IconButton;
