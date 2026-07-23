import { describe, it, expect } from 'vitest';

// Simple utility tests that don't require DOM
describe('String utilities', () => {
  it('slugifies correctly', () => {
    const slugify = (str: string) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('PT Adto Cipta Usaha Mandiri')).toBe('pt-adto-cipta-usaha-mandiri');
    expect(slugify('  Leading & Trailing  ')).toBe('leading-trailing');
  });

  it('truncates text correctly', () => {
    const truncate = (str: string, length: number) =>
      str.length > length ? str.slice(0, length) + '...' : str;

    expect(truncate('Hello World', 5)).toBe('Hello...');
    expect(truncate('Hi', 10)).toBe('Hi');
    expect(truncate('Exact', 5)).toBe('Exact');
  });
});

describe('Number utilities', () => {
  it('formats currency correctly', () => {
    const formatIDR = (value: number) =>
      new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(value);

    expect(formatIDR(1000000)).toContain('1.000.000');
    expect(formatIDR(0)).toContain('0');
  });

  it('formats large numbers with abbreviation', () => {
    const abbreviate = (n: number): string => {
      if (n >= 1_000_000_000) {
        return (n / 1_000_000_000).toFixed(1) + 'B';
      }
      if (n >= 1_000_000) {
        return (n / 1_000_000).toFixed(1) + 'M';
      }
      if (n >= 1_000) {
        return (n / 1_000).toFixed(1) + 'K';
      }
      return String(n);
    };

    expect(abbreviate(1500)).toBe('1.5K');
    expect(abbreviate(2500000)).toBe('2.5M');
    expect(abbreviate(500)).toBe('500');
  });
});
