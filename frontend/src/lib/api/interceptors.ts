/**
 * Axios request and response interceptors.
 * Handles authentication tokens, error normalization, and token refresh.
 * @module lib/api/interceptors
 */

import { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from 'axios';

import { HTTP_STATUS } from '@/lib/constants/app.constants';

/** Extended request config with retry flag */
interface RetryableConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/**
 * Get the auth token from localStorage (client-side only).
 * Returns null on server or when no token exists.
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem('adto-auth-storage');
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as {
      state?: { token?: { access_token?: string } };
    };
    return parsed.state?.token?.access_token ?? null;
  } catch {
    return null;
  }
}

/**
 * Clear auth data from localStorage and redirect to login.
 */
function handleAuthFailure(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem('adto-auth-storage');
  window.location.href = '/login';
}

/**
 * Setup request and response interceptors on an Axios instance.
 */
export function setupInterceptors(instance: AxiosInstance): void {
  // ── Request Interceptor ─────────────────────────────
  instance.interceptors.request.use(
    (config) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  // ── Response Interceptor ────────────────────────────
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
      const config = error.config as RetryableConfig | undefined;
      const status = error.response?.status;

      // Handle 401 Unauthorized
      if (status === HTTP_STATUS.UNAUTHORIZED && config && !config._retry) {
        config._retry = true;
        handleAuthFailure();
        return Promise.reject(error);
      }

      // Handle 403 Forbidden
      if (status === HTTP_STATUS.FORBIDDEN) {
        console.error('[API] Forbidden:', error.response?.data?.message);
      }

      // Handle 429 Too Many Requests
      if (status === HTTP_STATUS.TOO_MANY_REQUESTS) {
        console.error('[API] Rate limited. Please try again later.');
      }

      // Handle 500+ Server Errors
      if (status && status >= HTTP_STATUS.SERVER_ERROR) {
        console.error('[API] Server error:', error.response?.data?.message);
      }

      // Handle network errors
      if (!error.response) {
        console.error('[API] Network error:', error.message);
      }

      return Promise.reject(error);
    }
  );
}
