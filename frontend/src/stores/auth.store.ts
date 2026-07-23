'use client';

/**
 * Authentication state management with Zustand.
 * Handles user session, tokens, and auth state.
 * @module stores/auth
 */

import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

import { type AuthUserResponse, type AuthTokens } from '@/types/api.types';

/** Authentication store state */
interface AuthState {
  /** Currently authenticated user */
  user: AuthUserResponse | null;
  /** Auth tokens for API requests */
  token: AuthTokens | null;
  /** Whether auth state has been hydrated from storage */
  isHydrated: boolean;
}

/** Authentication store actions */
interface AuthActions {
  /** Set user data after successful login */
  setUser: (user: AuthUserResponse) => void;
  /** Set auth tokens */
  setToken: (token: AuthTokens) => void;
  /** Set both user and token at once (login) */
  setAuth: (user: AuthUserResponse, token: AuthTokens) => void;
  /** Clear all auth state (logout) */
  clearAuth: () => void;
  /** Update partial user data */
  updateUser: (data: Partial<AuthUserResponse>) => void;
  /** Check if user has a specific permission */
  hasPermission: (permission: string) => boolean;
  /** Check if user has a specific role */
  hasRole: (role: string) => boolean;
  /** Check if user is authenticated */
  isAuthenticated: () => boolean;
  /** Set hydration state */
  setHydrated: (state: boolean) => void;
}

/** Combined auth store type */
type AuthStore = AuthState & AuthActions;

/** Initial auth state */
const initialState: AuthState = {
  user: null,
  token: null,
  isHydrated: false,
};

/**
 * Zustand store for authentication state.
 * Persists user and token to localStorage.
 */
export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        setUser: (user) => {
          set({ user }, false, 'auth/setUser');
        },

        setToken: (token) => {
          set({ token }, false, 'auth/setToken');
        },

        setAuth: (user, token) => {
          set({ user, token }, false, 'auth/setAuth');
        },

        clearAuth: () => {
          set(initialState, false, 'auth/clearAuth');
        },

        updateUser: (data) => {
          const currentUser = get().user;
          if (currentUser) {
            set({ user: { ...currentUser, ...data } }, false, 'auth/updateUser');
          }
        },

        hasPermission: (permission) => {
          const user = get().user;
          if (!user) {
            return false;
          }
          return user.permissions.includes(permission);
        },

        hasRole: (role) => {
          const user = get().user;
          if (!user) {
            return false;
          }
          return user.role === role;
        },

        isAuthenticated: () => {
          const { user, token } = get();
          if (!user || !token) {
            return false;
          }
          return new Date(token.expires_at) > new Date();
        },

        setHydrated: (state) => {
          set({ isHydrated: state }, false, 'auth/setHydrated');
        },
      }),
      {
        name: 'adto-auth-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          user: state.user,
          token: state.token,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHydrated(true);
        },
      }
    ),
    { name: 'AuthStore' }
  )
);
