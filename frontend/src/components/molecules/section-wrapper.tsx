'use client';

import * as React from 'react';

import { motion } from 'framer-motion';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils/cn';

export interface SectionHeaderConfig {
  overline?: string;
  title: string;
  description?: string;
}

export interface SectionWrapperProps {
  header?: SectionHeaderConfig;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'default' | 'alt' | 'gradient' | 'mesh' | 'dark';
  padding?: 'default' | 'sm' | 'lg' | 'none';
  container?: 'default' | 'narrow' | 'wide' | 'full';
  animate?: boolean;
}

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function SectionWrapper({
  header,
  children,
  className,
  containerClassName,
  id,
  background = 'default',
  padding = 'default',
  container = 'default',
  animate = true,
}: SectionWrapperProps) {
  const { ref, isInView } = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-40px',
    enabled: animate,
  });

  return (
    <section
      ref={ref}
      className={cn(
        'relative',
        /* Background variants */
        background === 'default' && 'bg-white',
        background === 'alt' && 'bg-[#F4F7FA]',
        background === 'gradient' && 'bg-gradient-section',
        background === 'mesh' && 'bg-enterprise-mesh bg-white',
        background === 'dark' && 'bg-[#F4F7FA]',
        /* Padding */
        padding === 'default' && 'section-padding',
        padding === 'sm' && 'section-padding-sm',
        padding === 'lg' && 'section-padding-lg',
        padding === 'none' && 'py-0',
        className
      )}
      id={id}
    >
      {/* Subtle top gradient accent line */}
      {(background === 'alt' || background === 'dark') && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(53,85,122,0.15) 30%, rgba(245,130,32,0.2) 50%, rgba(53,85,122,0.15) 70%, transparent 100%)',
          }}
        />
      )}

      {/* Very subtle radial ambient for alt sections */}
      {background === 'alt' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(53,85,122,0.03) 0%, transparent 70%)',
          }}
        />
      )}

      <div
        className={cn(
          'relative z-10',
          container === 'default' && 'container-page',
          container === 'narrow' && 'container-narrow',
          container === 'wide' && 'container-wide',
          container === 'full' && 'container-full',
          containerClassName
        )}
      >
        {header && (
          <motion.div
            animate={animate && isInView ? 'visible' : undefined}
            className="section-header"
            initial={animate ? 'hidden' : undefined}
            variants={animate ? headerVariants : undefined}
          >
            {header.overline && (
              <div className="mb-5 inline-flex items-center gap-2.5">
                {/* Gradient accent line */}
                <span
                  className="inline-block h-[2px] w-7 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #35557A, #F58220)' }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#35557A' }}>
                  {header.overline}
                </p>
              </div>
            )}
            <h2 className="text-headline text-foreground">
              {header.title}
            </h2>
            {header.description && (
              <p className="text-body-lg mx-auto mt-4 max-w-2xl text-muted-foreground">
                {header.description}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
