'use client';

/**
 * TanStack Query client configuration.
 * Configures caching, retry logic, and stale time defaults.
 * @module lib/config/query-client
 */

import { QueryClient, type DefaultOptions } from '@tanstack/react-query';

/** Default query options for all queries */
const queryDefaults: DefaultOptions['queries'] = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 30 * 60 * 1000, // 30 minutes (garbage collection)
  retry: (failureCount, error) => {
    // Don't retry on 4xx errors (client errors)
    if (error instanceof Error && 'status' in error) {
      const status = (error as Error & { status: number }).status;
      if (status >= 400 && status < 500) {
        return false;
      }
    }
    return failureCount < 3;
  },
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
};

/** Default mutation options */
const mutationDefaults: DefaultOptions['mutations'] = {
  retry: false,
};

/** Combined default options */
const defaultOptions: DefaultOptions = {
  queries: queryDefaults,
  mutations: mutationDefaults,
};

/**
 * Create a new QueryClient instance.
 * Called once per app lifecycle (in the provider).
 */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions,
  });
}

/** Stale time presets for different data types */
export const STALE_TIMES = {
  /** Rarely changing data (site settings, SEO config) */
  STATIC: 60 * 60 * 1000, // 1 hour
  /** Moderately changing data (services, team, clients) */
  SEMI_STATIC: 15 * 60 * 1000, // 15 minutes
  /** Default stale time */
  DEFAULT: 5 * 60 * 1000, // 5 minutes
  /** Frequently changing data (messages, dashboard) */
  DYNAMIC: 60 * 1000, // 1 minute
  /** Real-time data (notifications) */
  REAL_TIME: 15 * 1000, // 15 seconds
  /** Never auto-refetch */
  INFINITY: Infinity,
} as const;

/** Query key factory for consistent cache keys */
export const queryKeys = {
  // Public
  home: ['home'] as const,
  about: ['about'] as const,
  services: {
    all: ['services'] as const,
    list: (params?: Record<string, unknown>) => ['services', 'list', params] as const,
    detail: (slug: string) => ['services', 'detail', slug] as const,
  },
  projects: {
    all: ['projects'] as const,
    list: (params?: Record<string, unknown>) => ['projects', 'list', params] as const,
    detail: (slug: string) => ['projects', 'detail', slug] as const,
  },
  blog: {
    all: ['blog'] as const,
    list: (params?: Record<string, unknown>) => ['blog', 'list', params] as const,
    detail: (slug: string) => ['blog', 'detail', slug] as const,
  },
  career: {
    all: ['career'] as const,
    list: (params?: Record<string, unknown>) => ['career', 'list', params] as const,
    detail: (slug: string) => ['career', 'detail', slug] as const,
  },
  testimonials: ['testimonials'] as const,
  team: ['team'] as const,
  clients: ['clients'] as const,
  gallery: {
    all: ['gallery'] as const,
    list: (params?: Record<string, unknown>) => ['gallery', 'list', params] as const,
  },
  faq: ['faq'] as const,
  settings: ['settings'] as const,

  // Admin
  admin: {
    dashboard: ['admin', 'dashboard'] as const,
    services: {
      all: ['admin', 'services'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'services', 'list', params] as const,
      detail: (id: number) => ['admin', 'services', 'detail', id] as const,
    },
    projects: {
      all: ['admin', 'projects'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'projects', 'list', params] as const,
      detail: (id: number) => ['admin', 'projects', 'detail', id] as const,
    },
    blog: {
      all: ['admin', 'blog'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'blog', 'list', params] as const,
      detail: (id: number) => ['admin', 'blog', 'detail', id] as const,
    },
    career: {
      all: ['admin', 'career'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'career', 'list', params] as const,
      detail: (id: number) => ['admin', 'career', 'detail', id] as const,
    },
    testimonials: {
      all: ['admin', 'testimonials'] as const,
      list: (params?: Record<string, unknown>) =>
        ['admin', 'testimonials', 'list', params] as const,
      detail: (id: number) => ['admin', 'testimonials', 'detail', id] as const,
    },
    team: {
      all: ['admin', 'team'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'team', 'list', params] as const,
      detail: (id: number) => ['admin', 'team', 'detail', id] as const,
    },
    clients: {
      all: ['admin', 'clients'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'clients', 'list', params] as const,
      detail: (id: number) => ['admin', 'clients', 'detail', id] as const,
    },
    gallery: {
      all: ['admin', 'gallery'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'gallery', 'list', params] as const,
    },
    messages: {
      all: ['admin', 'messages'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'messages', 'list', params] as const,
      detail: (id: number) => ['admin', 'messages', 'detail', id] as const,
    },
    users: {
      all: ['admin', 'users'] as const,
      list: (params?: Record<string, unknown>) => ['admin', 'users', 'list', params] as const,
      detail: (id: number) => ['admin', 'users', 'detail', id] as const,
    },
    settings: ['admin', 'settings'] as const,
  },
} as const;
