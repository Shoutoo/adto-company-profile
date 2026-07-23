'use client';

/**
 * Hook to detect clicks outside a referenced element.
 * @module hooks/use-click-outside
 */

import { useEffect, useRef } from 'react';

/**
 * Execute a callback when a click occurs outside the referenced element.
 * Useful for closing dropdowns, modals, and popover menus.
 *
 * @param callback - Function to call on outside click
 * @param enabled - Whether the listener is active (default: true)
 * @returns Ref to attach to the target element
 *
 * @example
 * const dropdownRef = useClickOutside(() => setIsOpen(false));
 * return <div ref={dropdownRef}>...</div>;
 */
export function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  callback: () => void,
  enabled: boolean = true
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    // Use mousedown for immediate response (before focus changes)
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, enabled]);

  return ref;
}
