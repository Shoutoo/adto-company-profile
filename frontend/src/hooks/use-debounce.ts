'use client';

/**
 * Hook to debounce a rapidly changing value.
 * @module hooks/use-debounce
 */

import { useState, useEffect } from 'react';

/**
 * Returns a debounced version of the input value.
 * The returned value only updates after the specified delay.
 *
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds (default: 500)
 * @returns Debounced value
 *
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 300);
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
