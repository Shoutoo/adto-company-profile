'use client';

/**
 * Theme provider component using next-themes.
 * Forced to 'light' for this enterprise design — no dark mode toggle.
 * @module lib/providers/theme-provider
 */

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Wraps the app with theme context.
 * Forced light mode for consistent enterprise appearance.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      storageKey="adto-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
