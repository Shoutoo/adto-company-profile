/**
 * Currency formatting utilities for Indonesian Rupiah.
 * @module lib/utils/format-currency
 */

/** Cached Intl formatter for IDR */
const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Cached Intl formatter for compact numbers */
const compactFormatter = new Intl.NumberFormat('id-ID', {
  notation: 'compact',
  compactDisplay: 'short',
  maximumFractionDigits: 1,
});

/** Cached Intl formatter for plain numbers */
const numberFormatter = new Intl.NumberFormat('id-ID');

/**
 * Format a number as Indonesian Rupiah.
 * @example
 * formatCurrency(1500000) // 'Rp1.500.000'
 */
export function formatCurrency(amount: number): string {
  return idrFormatter.format(amount);
}

/**
 * Format a number in compact notation.
 * @example
 * formatCompactNumber(1500000) // '1,5 jt'
 */
export function formatCompactNumber(value: number): string {
  return compactFormatter.format(value);
}

/**
 * Format a number with thousand separators.
 * @example
 * formatNumber(1500000) // '1.500.000'
 */
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/**
 * Format a file size in human-readable format.
 * @example
 * formatFileSize(1536000) // '1.5 MB'
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB'] as const;
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = bytes / Math.pow(k, i);

  return `${size.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}
