'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils/cn';

export interface CtaSectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'brand' | 'dark' | 'outline';
  className?: string;
}

export function CtaSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'brand',
  className,
}: CtaSectionProps) {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className={cn('section-padding', className)}>
      <div className="container-page">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          className={cn(
            'relative overflow-hidden rounded-[28px] p-8 md:p-16 lg:p-20',
            variant === 'brand' && 'text-white',
            variant === 'dark' && 'text-white',
            variant === 'outline' && 'border border-border bg-background'
          )}
          initial={{ opacity: 0, y: 24 }}
          style={
            variant === 'brand'
              ? { background: 'linear-gradient(135deg, #35557A 0%, #2C496A 50%, #1C2C40 100%)' }
              : variant === 'dark'
                ? { background: '#121C29' }
                : undefined
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative elements for brand/dark variants */}
          {(variant === 'brand' || variant === 'dark') && (
            <>
              {/* Ambient radial glow — top left */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(53,85,122,0.6) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              {/* Orange accent orb — bottom right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(245,130,32,0.35) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
              />
              {/* Subtle grid pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Top accent gradient line */}
              <div
                aria-hidden="true"
                className="absolute left-16 right-16 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(245,130,32,0.5), rgba(255,255,255,0.15), rgba(245,130,32,0.5), transparent)',
                }}
              />
              {/* Decorative vertical line — right */}
              <div
                aria-hidden="true"
                className="absolute right-24 top-0 h-full w-px opacity-10"
                style={{ background: 'linear-gradient(to bottom, transparent, white, transparent)' }}
              />
            </>
          )}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2
              className={cn(
                'font-heading text-4xl font-bold tracking-tight md:text-5xl',
                variant === 'dark' ? 'text-white' : variant === 'outline' ? 'text-foreground' : 'text-white'
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                'text-body-lg mt-4',
                variant === 'brand' && 'text-white/80',
                variant === 'dark' && 'text-brand-100',
                variant === 'outline' && 'text-muted-foreground'
              )}
            >
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className={cn(
                  'rounded-full transition-all duration-300',
                  variant !== 'outline'
                    ? 'bg-white text-brand-700 hover:bg-white/95 hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:-translate-y-0.5'
                    : ''
                )}
                size="lg"
                variant={variant === 'outline' ? 'brand' : 'default'}
              >
                <Link href={primaryAction.href}>
                  <Phone className="h-4 w-4" />
                  {primaryAction.label}
                </Link>
              </Button>
              {secondaryAction && (
                <Button
                  asChild
                  className={cn(
                    'rounded-full transition-all duration-300',
                    variant !== 'outline'
                      ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                      : 'text-foreground'
                  )}
                  size="lg"
                  variant="ghost"
                >
                  <Link href={secondaryAction.href}>
                    {secondaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
