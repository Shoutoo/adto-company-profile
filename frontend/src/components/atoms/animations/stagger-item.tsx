'use client';

import * as React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  style?: React.CSSProperties;
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  style,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, ...getInitialPosition() },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
  };

  return (
    <motion.div variants={itemVariants} className={cn(className)} style={style}>
      {children}
    </motion.div>
  );
}
