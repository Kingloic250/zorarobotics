import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard = ({ children, className, hoverGlow = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -5, borderColor: 'rgba(0, 242, 255, 0.3)' } : {}}
      className={cn(
        'group relative overflow-hidden rounded-sm glass-panel p-6 transition-colors duration-300',
        hoverGlow && 'hover:bg-white/5',
        className
      )}
    >
      {/* Glow highlight on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
