import React from 'react';
import { motion } from 'framer-motion';

export const MovingBorderBtn = ({
  children,
  onClick,
  href,
  download,
  className = "",
}) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      className={`relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFF5_0%,#0B0B0F_50%,#00FFF5_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-neon-bg-secondary px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-neon-bg/80 transition-colors">
        {children}
      </span>
    </Component>
  );
};

export default MovingBorderBtn;
