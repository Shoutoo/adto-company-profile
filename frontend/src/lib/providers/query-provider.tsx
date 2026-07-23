'use client';

/**
 * TanStack Query provider component.
 * Initializes the QueryClient and wraps the app with QueryClientProvider.
 * @module lib/providers/query-provider
 */

import { useState } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createQueryClient } from '@/lib/config/query-client.config';

interface QueryProviderProps {
  children: React.ReactNode;
}

/**
 * Provides TanStack Query context to the application.
 * Creates a single QueryClient per component lifecycle.
 * Includes devtools in development mode.
 */
export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
