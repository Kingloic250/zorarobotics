import React, { type ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  glow = false,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20',
    secondary: 'bg-foreground/10 text-white border border-white/20 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300',
    outline: 'border border-accent text-white hover:bg-accent transition-all duration-300',
    ghost: 'text-white/70 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-medium',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden',
        variants[variant],
        sizes[size],
        glow && variant === 'secondary' && 'shadow-accent/40',
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
};