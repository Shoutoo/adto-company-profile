'use client';

/**
 * Toast utility wrapping Sonner.
 * Provides typed toast functions matching the design system.
 */

import { toast as sonnerToast } from 'sonner';

type ToastOptions = {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export const toast = {
  success: (message: string, options?: ToastOptions) =>
    sonnerToast.success(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action
        ? { label: options.action.label, onClick: options.action.onClick }
        : undefined,
    }),

  error: (message: string, options?: ToastOptions) =>
    sonnerToast.error(message, {
      description: options?.description,
      duration: options?.duration ?? 7000,
      action: options?.action
        ? { label: options.action.label, onClick: options.action.onClick }
        : undefined,
    }),

  warning: (message: string, options?: ToastOptions) =>
    sonnerToast.warning(message, {
      description: options?.description,
      duration: options?.duration,
    }),

  info: (message: string, options?: ToastOptions) =>
    sonnerToast.info(message, {
      description: options?.description,
      duration: options?.duration,
    }),

  loading: (message: string) => sonnerToast.loading(message),

  dismiss: (id?: string | number) => sonnerToast.dismiss(id),

  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    }
  ) => sonnerToast.promise(promise, messages),
};
