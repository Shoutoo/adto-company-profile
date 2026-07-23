'use client';

/**
 * Hook to copy text to the clipboard.
 * @module hooks/use-copy-to-clipboard
 */

import { useState, useCallback, useRef, useEffect } from 'react';

interface UseCopyToClipboardReturn {
  /** Copy text to clipboard */
  copy: (text: string) => Promise<void>;
  /** Whether the text was recently copied */
  isCopied: boolean;
  /** Error if copy failed */
  error: Error | null;
  /** Reset the copied state */
  reset: () => void;
}

/**
 * Copy text to the clipboard with status tracking.
 * Automatically resets the copied state after a timeout.
 *
 * @param resetDelay - Time in ms before isCopied resets (default: 2000)
 * @returns Copy function, status, and error state
 *
 * @example
 * const { copy, isCopied } = useCopyToClipboard();
 * <button onClick={() => copy('Hello!')}>{isCopied ? 'Copied!' : 'Copy'}</button>
 */
export function useCopyToClipboard(resetDelay: number = 2000): UseCopyToClipboardReturn {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = useCallback(() => {
    setIsCopied(false);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const copy = useCallback(
    async (text: string): Promise<void> => {
      if (!navigator.clipboard) {
        setError(new Error('Clipboard API not supported'));
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setError(null);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
        }, resetDelay);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to copy'));
        setIsCopied(false);
      }
    },
    [resetDelay]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { copy, isCopied, error, reset };
}
