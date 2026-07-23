import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns at each breakpoint */
  cols?: {
    default?: 1 | 2 | 3 | 4;
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4 | 5 | 6;
    xl?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  /** Gap size between grid items */
  gap?: 'sm' | 'default' | 'lg' | 'xl';
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
} as const;

const smColClasses = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
} as const;

const mdColClasses = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
} as const;

const lgColClasses = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
} as const;

const xlColClasses = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
} as const;

const gapClasses = {
  sm: 'gap-3',
  default: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
} as const;

/**
 * Responsive CSS Grid wrapper with breakpoint-aware column configuration.
 */
export function ResponsiveGrid({
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'default',
  className,
  children,
  ...props
}: ResponsiveGridProps) {
  return (
    <div
      className={cn(
        'grid',
        cols.default && colClasses[cols.default],
        cols.sm && smColClasses[cols.sm],
        cols.md && mdColClasses[cols.md],
        cols.lg && lgColClasses[cols.lg],
        cols.xl && xlColClasses[cols.xl],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SplitLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ratio of left to right content */
  ratio?: '1:1' | '1:2' | '2:1' | '1:3' | '3:1';
  /** Reverse order on mobile */
  reverseOnMobile?: boolean;
  /** Gap between columns */
  gap?: 'sm' | 'default' | 'lg' | 'xl';
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end';
}

const ratioClasses = {
  '1:1': 'lg:grid-cols-2',
  '1:2': 'lg:grid-cols-[1fr_2fr]',
  '2:1': 'lg:grid-cols-[2fr_1fr]',
  '1:3': 'lg:grid-cols-[1fr_3fr]',
  '3:1': 'lg:grid-cols-[3fr_1fr]',
} as const;

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
} as const;

/**
 * Two-column split layout with configurable ratio.
 * Stacks to single column on mobile.
 */
export function SplitLayout({
  ratio = '1:1',
  reverseOnMobile = false,
  gap = 'lg',
  align = 'center',
  className,
  children,
  ...props
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1',
        ratioClasses[ratio],
        gapClasses[gap],
        alignClasses[align],
        reverseOnMobile && 'flex-col-reverse',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
