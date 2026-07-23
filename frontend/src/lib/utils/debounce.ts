/**
 * Debounce utility for rate-limiting function calls.
 * @module lib/utils/debounce
 */

/** Debounced function with cancel capability */
export interface DebouncedFunction<T extends (...args: never[]) => unknown> {
  (...args: Parameters<T>): void;
  /** Cancel any pending invocation */
  cancel: () => void;
  /** Immediately invoke any pending call */
  flush: () => void;
}

/**
 * Create a debounced version of a function.
 * The function will only be called after `delay` ms of inactivity.
 *
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function with cancel and flush methods
 *
 * @example
 * const debouncedSearch = debounce((query: string) => search(query), 300);
 */
export function debounce<T extends (...args: never[]) => unknown>(
  fn: T,
  delay: number
): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let latestArgs: Parameters<T> | null = null;

  const debounced = (...args: Parameters<T>): void => {
    latestArgs = args;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      latestArgs = null;
      fn(...args);
    }, delay);
  };

  debounced.cancel = (): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      latestArgs = null;
    }
  };

  debounced.flush = (): void => {
    if (timeoutId && latestArgs) {
      clearTimeout(timeoutId);
      timeoutId = null;
      const args = latestArgs;
      latestArgs = null;
      fn(...args);
    }
  };

  return debounced;
}
