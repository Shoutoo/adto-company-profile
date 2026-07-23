/**
 * Date formatting utilities using native Intl API.
 * No external date library required.
 * @module lib/utils/format-date
 */

/** Locale for Indonesian date formatting */
const ID_LOCALE = 'id-ID';

/**
 * Safely parse a date string or Date object.
 * Returns null if the date is invalid.
 */
function safeParse(date: string | Date | null | undefined): Date | null {
  if (!date) {
    return null;
  }
  if (date instanceof Date) {
    return isNaN(date.getTime()) ? null : date;
  }
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Format a date to "dd MMMM yyyy" (e.g. "15 Januari 2026").
 */
export function formatDate(date: string | Date | null | undefined, fallback = '-'): string {
  const parsed = safeParse(date);
  if (!parsed) {
    return fallback;
  }
  return parsed.toLocaleDateString(ID_LOCALE, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Format a date to short form: "15 Jan 2026".
 */
export function formatDateShort(date: string | Date | null | undefined, fallback = '-'): string {
  const parsed = safeParse(date);
  if (!parsed) {
    return fallback;
  }
  return parsed.toLocaleDateString(ID_LOCALE, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Format a date and time: "15 Januari 2026, 10:30".
 */
export function formatDateTime(date: string | Date | null | undefined, fallback = '-'): string {
  const parsed = safeParse(date);
  if (!parsed) {
    return fallback;
  }
  return parsed.toLocaleDateString(ID_LOCALE, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format a date as relative time (e.g. "3 hari yang lalu").
 */
export function formatRelativeTime(date: string | Date | null | undefined, fallback = '-'): string {
  const parsed = safeParse(date);
  if (!parsed) {
    return fallback;
  }

  const now = new Date();
  const diffMs = now.getTime() - parsed.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  const rtf = new Intl.RelativeTimeFormat(ID_LOCALE, { numeric: 'auto' });

  if (Math.abs(diffSec) < 60) {
    return rtf.format(-diffSec, 'second');
  }
  if (Math.abs(diffMin) < 60) {
    return rtf.format(-diffMin, 'minute');
  }
  if (Math.abs(diffHour) < 24) {
    return rtf.format(-diffHour, 'hour');
  }
  if (Math.abs(diffDay) < 30) {
    return rtf.format(-diffDay, 'day');
  }
  if (Math.abs(diffMonth) < 12) {
    return rtf.format(-diffMonth, 'month');
  }
  return rtf.format(-diffYear, 'year');
}

/**
 * Format a date to ISO 8601 format for use in datetime attributes.
 */
export function formatISODate(date: string | Date | null | undefined, fallback = ''): string {
  const parsed = safeParse(date);
  if (!parsed) {
    return fallback;
  }
  return parsed.toISOString();
}
