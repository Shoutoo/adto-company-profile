'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  amount?: 'some' | 'all' | number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  once = true,
  amount = 0.2,
}: FadeInProps) {
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

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...getInitialPosition() };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth premium easing
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
