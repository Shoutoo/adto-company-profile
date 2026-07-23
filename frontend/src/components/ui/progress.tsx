'use client';

import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils/cn';

/**
 * Progress bar component built on top of Radix Progress Primitive.
 */
const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
  }
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('bg-secondary relative h-2 w-full overflow-hidden rounded-none', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        'bg-primary h-full w-full flex-1 transition-all duration-500 ease-out',
        indicatorClassName
      )}
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
