'use client';

/**
 * Toast notification provider using Sonner.
 * @module lib/providers/toast-provider
 */

import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

/**
 * Provides toast notification capabilities.
 * Automatically adapts to the current theme.
 */
export function ToastProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      closeButton
      expand
      richColors
      position="top-right"
      theme={theme as 'light' | 'dark' | 'system'}
      toastOptions={{
        duration: 5000,
        classNames: {
          toast: 'group border-border bg-background text-foreground shadow-lg',
          description: 'text-muted-foreground',
          actionButton: 'bg-primary text-primary-foreground font-medium',
          cancelButton: 'bg-muted text-muted-foreground font-medium',
          error: 'bg-destructive text-destructive-foreground border-destructive',
          success:
            'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-100 dark:border-emerald-800',
          warning:
            'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950 dark:text-amber-100 dark:border-amber-800',
          info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950 dark:text-blue-100 dark:border-blue-800',
        },
      }}
      visibleToasts={5}
    />
  );
}
