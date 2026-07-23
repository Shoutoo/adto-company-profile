import * as React from 'react';

import { cn } from '@/lib/utils/cn';

/**
 * Skeleton placeholder component for loading states.
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'border-border animate-pulse rounded-none border bg-surface-secondary',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
