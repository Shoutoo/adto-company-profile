'use client';

import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

export interface HeroAction {
  label: string;
  href: string;
  variant?: 'brand' | 'outline' | 'default' | 'secondary';
  icon?: React.ReactNode;
}

export interface HeroSectionProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  actions?: HeroAction[];
  children?: React.ReactNode;
  className?: string;
  backgroundVariant?: 'default' | 'gradient' | 'mesh' | 'dark';
  align?: 'left' | 'center';
  size?: 'default' | 'lg' | 'sm';
  imageUrl?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function HeroSection({
  overline,
  title,
  titleHighlight,
  description,
  actions,
  children,
  className,
  backgroundVariant = 'default',
  align = 'center',
  size = 'default',
  imageUrl,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        size === 'lg' && 'min-h-[85vh] py-32',
        size === 'default' && 'min-h-[60vh] py-24',
        size === 'sm' && 'min-h-[40vh] py-16',
        backgroundVariant === 'gradient' && 'bg-gradient-hero',
        backgroundVariant === 'mesh' && 'bg-brand-50/50',
        backgroundVariant === 'dark' && 'bg-[#F4F7FA]',
        className
      )}
    >
      {/* Background photo layer */}
      {/* FORCE HMR INVALIDATION */}
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imageUrl}')`,
            }}
          />
          {/* Layer 1: Strong white gradient from left to protect text */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0.35) 100%)'
            }}
          />
          {/* Layer 2: Subtle brand tint (Navy to Orange) for premium corporate feel */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background: 'linear-gradient(135deg, rgba(10,47,92,0.06) 0%, rgba(255,90,0,0.04) 100%)'
            }}
          />
          {/* Layer 3: Soft vignette for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.15) 100%)'
            }}
          />
        </>
      )}

      {/* Radial glow — top center brand bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(53, 85, 122, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Floating brand orb — left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #0A2F5C 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating accent orb — right bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #FF5A00 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Subtle dot pattern overlay (only when no image) */}
      {!imageUrl && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dots-brand opacity-40"
        />
      )}

      {/* Bottom fade to white (only when no image) */}
      {!imageUrl && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.65) 0%, transparent 50%)' }}
        />
      )}

      <div className="container-page relative z-10">
        <motion.div
          animate="visible"
          className={cn(
            'max-w-4xl',
            align === 'center' && 'mx-auto text-center',
            align === 'left' && 'text-left'
          )}
          initial="hidden"
          variants={containerVariants}
        >
          {overline && (
            <motion.div className="mb-7 inline-flex items-center gap-2.5" variants={itemVariants}>
              {/* Gradient accent line */}
              <span
                className="inline-block h-[2px] w-8 rounded-full"
                style={{ background: 'linear-gradient(90deg, #35557A, #F58220)' }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: '#35557A' }}
              >
                {overline}
              </span>
            </motion.div>
          )}

          <motion.h1
            className={cn(
              'font-heading font-bold leading-[1.08] tracking-tight',
              size === 'lg' && 'text-5xl md:text-6xl lg:text-7xl',
              size === 'default' && 'text-4xl md:text-5xl lg:text-6xl',
              size === 'sm' && 'text-3xl md:text-4xl lg:text-5xl',
              'text-[#0A2F5C]'
            )}
            variants={itemVariants}
          >
            {title}
            {titleHighlight && (
              <span className="mt-2 block" style={{ color: '#35557A' }}>
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          <motion.p
            className={cn(
              'text-body-lg mt-6 max-w-2xl text-slate-600 font-medium',
              align === 'center' && 'mx-auto'
            )}
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {actions && actions.length > 0 && (
            <motion.div
              className={cn('mt-10 flex flex-wrap gap-4', align === 'center' && 'justify-center')}
              variants={itemVariants}
            >
              {actions.map((action) => (
                <Button
                  key={action.label}
                  asChild
                  size="lg"
                  variant={action.variant ?? 'brand'}
                  className={cn(
                    'group transition-all duration-[400ms] ease-out',
                    action.variant === 'brand' &&
                      'shadow-[0_4px_12px_rgba(53,85,122,0.15)] hover:shadow-[0_8px_24px_rgba(53,85,122,0.30)] hover:-translate-y-1',
                    action.variant === 'outline' &&
                      'bg-white/80 backdrop-blur-md border border-[rgba(53,85,122,0.15)] text-[#35557A] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white hover:border-[rgba(53,85,122,0.25)] hover:shadow-[0_6px_16px_rgba(53,85,122,0.12)] hover:-translate-y-1'
                  )}
                >
                  <Link className="px-8 text-xs font-bold uppercase tracking-widest" href={action.href}>
                    {action.label}
                    {action.icon ?? <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </Link>
                </Button>
              ))}
            </motion.div>
          )}

          {children && (
            <motion.div className="mt-10" variants={itemVariants}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
