import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-600 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-brand-600 hover:text-white',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
        outline:
          'border-border bg-background border shadow-sm hover:border-brand-600 hover:bg-surface-secondary',
        secondary:
          'text-secondary-foreground hover:bg-surface-secondary/80 hover:border-border border border-transparent bg-surface-secondary shadow-sm',
        ghost: 'hover:text-accent-foreground hover:bg-surface-secondary',
        link: 'text-brand-600 underline-offset-4 hover:underline',
        brand: 'shadow-brand-glow bg-brand-600 text-white hover:bg-brand-700',
        success: 'bg-[var(--success)] text-[var(--success-foreground)] shadow-sm hover:opacity-90',
        warning: 'bg-[var(--warning)] text-[var(--warning-foreground)] shadow-sm hover:opacity-90',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-10 px-4 text-[10px]',
        lg: 'h-14 px-10 text-sm',
        xl: 'h-16 px-12 text-sm',
        icon: 'h-12 w-12',
        'icon-sm': 'h-10 w-10',
        'icon-lg': 'h-14 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, disabled, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              aria-hidden="true"
              className="-ml-1 h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
