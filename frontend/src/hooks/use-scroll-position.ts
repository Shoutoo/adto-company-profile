'use client';

/**
 * Hook to track the current scroll position.
 * @module hooks/use-scroll-position
 */

import { useState, useEffect, useCallback } from 'react';

import { throttle } from '@/lib/utils/throttle';

interface ScrollPosition {
  /** Pixels scrolled from the top */
  x: number;
  /** Pixels scrolled from the left */
  y: number;
  /** Scroll direction */
  direction: 'up' | 'down' | 'idle';
  /** Whether the page has been scrolled past the threshold */
  isScrolled: boolean;
}

/**
 * Track the window scroll position with throttling.
 *
 * @param threshold - Pixel threshold for isScrolled (default: 50)
 * @param throttleMs - Throttle interval in ms (default: 100)
 * @returns Current scroll position state
 *
 * @example
 * const { y, direction, isScrolled } = useScrollPosition();
 */
export function useScrollPosition(
  threshold: number = 50,
  throttleMs: number = 100
): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'idle',
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    setPosition((prev) => {
      const currentY = window.scrollY;
      const currentX = window.scrollX;
      const direction = currentY > prev.y ? 'down' : currentY < prev.y ? 'up' : prev.direction;

      return {
        x: currentX,
        y: currentY,
        direction,
        isScrolled: currentY > threshold,
      };
    });
  }, [threshold]);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, throttleMs);

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      throttledScroll.cancel();
    };
  }, [handleScroll, throttleMs]);

  return position;
}
