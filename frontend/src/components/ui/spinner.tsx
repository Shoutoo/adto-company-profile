import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

const spinnerVariants = cva('text-muted-foreground animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
  label?: string;
}

/**
 * Spinner component for displaying progress/busy status.
 */
function Spinner({ className, size, label = 'Loading...', ...props }: SpinnerProps) {
  return (
    <div className={cn('flex items-center justify-center', className)} role="status" {...props}>
      <Loader2 className={cn(spinnerVariants({ size }))} />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { Spinner, spinnerVariants };
