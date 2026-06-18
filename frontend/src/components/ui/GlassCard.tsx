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
      whileHover={hoverGlow ? { y: -5 } : {}}
      className={cn(
        'group relative overflow-hidden rounded-sm glass-panel p-6 transition-colors duration-300',
        hoverGlow && 'hover:border-accent/30 border-border',
        className
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};