'use client';

/**
 * Hook to reactively match CSS media queries.
 * @module hooks/use-media-query
 */

import { useState, useEffect } from 'react';

/**
 * Returns whether a CSS media query currently matches.
 * Updates automatically when the match state changes.
 *
 * @param query - CSS media query string
 * @returns Whether the media query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
