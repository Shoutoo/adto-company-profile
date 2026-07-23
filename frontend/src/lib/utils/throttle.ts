/**
 * Throttle utility for rate-limiting function calls.
 * @module lib/utils/throttle
 */

/** Throttled function with cancel capability */
export interface ThrottledFunction<T extends (...args: never[]) => unknown> {
  (...args: Parameters<T>): void;
  /** Cancel any pending trailing invocation */
  cancel: () => void;
}

/**
 * Create a throttled version of a function.
 * The function will be called at most once per `limit` ms.
 *
 * @param fn - Function to throttle
 * @param limit - Minimum interval in milliseconds
 * @returns Throttled function with cancel method
 *
 * @example
 * const throttledScroll = throttle(() => updatePosition(), 100);
 */
export function throttle<T extends (...args: never[]) => unknown>(
  fn: T,
  limit: number
): ThrottledFunction<T> {
  let inThrottle = false;
  let lastArgs: Parameters<T> | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const throttled = (...args: Parameters<T>): void => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      timeoutId = setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          const pending = lastArgs;
          lastArgs = null;
          throttled(...pending);
        }
      }, limit);
    } else {
      lastArgs = args;
    }
  };

  throttled.cancel = (): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    inThrottle = false;
    lastArgs = null;
  };

  return throttled;
}
