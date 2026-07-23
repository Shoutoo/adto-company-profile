import { describe, it, expect } from 'vitest';

import { cn } from '@/lib/utils/cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const isFalse = false;
    const isTrue = true;
    expect(cn('foo', isFalse && 'bar', 'baz')).toBe('foo baz');
    expect(cn('foo', isTrue && 'bar')).toBe('foo bar');
  });

  it('should resolve tailwind conflicts', () => {
    // Later class should win
    expect(cn('p-4', 'p-6')).toBe('p-6');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('should handle arrays', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('should handle objects', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should return empty string for no arguments', () => {
    expect(cn()).toBe('');
  });
});
