'use client';

/**
 * Hook to observe element visibility via IntersectionObserver.
 * @module hooks/use-intersection-observer
 */

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  /** Margin around the root element */
  rootMargin?: string;
  /** Visibility threshold (0-1) */
  threshold?: number | number[];
  /** Only trigger once */
  triggerOnce?: boolean;
  /** Whether observation is enabled */
  enabled?: boolean;
}

interface UseIntersectionObserverReturn {
  /** Ref to attach to the observed element */
  ref: (node: Element | null) => void;
  /** Whether the element is currently in view */
  isInView: boolean;
  /** The IntersectionObserverEntry */
  entry: IntersectionObserverEntry | null;
}

/**
 * Observe when an element enters or exits the viewport.
 *
 * @param options - Intersection observer configuration
 * @returns Ref callback, visibility state, and observer entry
 *
 * @example
 * const { ref, isInView } = useIntersectionObserver({ triggerOnce: true });
 * return <div ref={ref}>{isInView && <AnimatedContent />}</div>;
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const { rootMargin = '0px', threshold = 0, triggerOnce = false, enabled = true } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<Element | null>(null);
  const frozenRef = useRef(false);

  const ref = useCallback(
    (node: Element | null) => {
      // Clean up previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (frozenRef.current || !enabled || !node) {
        elementRef.current = null;
        return;
      }

      elementRef.current = node;

      observerRef.current = new IntersectionObserver(
        ([observerEntry]) => {
          if (!observerEntry) {
            return;
          }

          setEntry(observerEntry);
          setIsInView(observerEntry.isIntersecting);

          if (triggerOnce && observerEntry.isIntersecting) {
            frozenRef.current = true;
            observerRef.current?.disconnect();
          }
        },
        { rootMargin, threshold }
      );

      observerRef.current.observe(node);
    },
    [rootMargin, threshold, triggerOnce, enabled]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { ref, isInView, entry };
}
