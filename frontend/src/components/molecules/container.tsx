import * as React from 'react';

import { cn } from '@/lib/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container width variant */
  size?: 'narrow' | 'default' | 'wide' | 'full';
  /** HTML element to render */
  as?: 'div' | 'section' | 'article' | 'main';
}

/**
 * Responsive container wrapper with consistent max-width and padding.
 */
export function Container({
  size = 'default',
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        size === 'narrow' && 'container-narrow',
        size === 'default' && 'container-page',
        size === 'wide' && 'container-wide',
        size === 'full' && 'container-full',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
