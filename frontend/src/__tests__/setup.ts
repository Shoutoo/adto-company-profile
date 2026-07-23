import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Auto cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) =>
    React.createElement('a', { href }, children),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) =>
      React.createElement('div', props, children),
    section: ({ children, ...props }: React.ComponentProps<'section'>) =>
      React.createElement('section', props, children),
    p: ({ children, ...props }: React.ComponentProps<'p'>) =>
      React.createElement('p', props, children),
    h1: ({ children, ...props }: React.ComponentProps<'h1'>) =>
      React.createElement('h1', props, children),
    li: ({ children, ...props }: React.ComponentProps<'li'>) =>
      React.createElement('li', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useInView: () => [null, true],
}));

import React from 'react';
