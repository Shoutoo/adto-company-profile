'use client';

/**
 * Authentication context provider.
 * Handles auth state hydration and token expiry checks.
 * @module lib/providers/auth-provider
 */

import { useEffect, useCallback } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import {
  AUTH_ROUTES,
  PROTECTED_ROUTE_PREFIX,
  AUTH_REDIRECT_ROUTES,
} from '@/lib/constants/routes.constants';
import { useAuthStore } from '@/stores/auth.store';

interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * Provides authentication state management and route protection.
 * Redirects unauthenticated users from protected routes.
 * Redirects authenticated users from auth routes.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isHydrated, clearAuth, token } = useAuthStore();

  /**
   * Check if the current auth token has expired.
   * Clears auth state if expired.
   */
  const checkTokenExpiry = useCallback(() => {
    if (!token) {
      return;
    }

    const expiresAt = new Date(token.expires_at);
    if (expiresAt <= new Date()) {
      clearAuth();
    }
  }, [token, clearAuth]);

  /**
   * Handle route protection based on auth state.
   */
  const handleRouteProtection = useCallback(() => {
    if (!isHydrated) {
      return;
    }

    const isProtectedRoute = pathname.startsWith(PROTECTED_ROUTE_PREFIX);
    const isAuthRoute = AUTH_REDIRECT_ROUTES.some((route) => pathname === route);
    const authenticated = isAuthenticated();

    // Redirect to login if not authenticated and on protected route
    if (isProtectedRoute && !authenticated) {
      router.replace(AUTH_ROUTES.LOGIN);
      return;
    }

    // Redirect to dashboard if authenticated and on auth route
    if (isAuthRoute && authenticated) {
      router.replace('/admin/dashboard');
      return;
    }
  }, [isHydrated, isAuthenticated, pathname, router]);

  // Check token expiry on mount and periodically
  useEffect(() => {
    checkTokenExpiry();

    const interval = setInterval(checkTokenExpiry, 60_000); // Check every minute
    return () => {
      clearInterval(interval);
    };
  }, [checkTokenExpiry]);

  // Handle route protection on path change
  useEffect(() => {
    handleRouteProtection();
  }, [handleRouteProtection]);

  return <>{children}</>;
}
