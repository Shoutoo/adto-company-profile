/**
 * Text truncation utilities.
 * @module lib/utils/truncate
 */

/**
 * Truncate text to a specified length with ellipsis.
 * @param text - Text to truncate
 * @param maxLength - Maximum character length
 * @param suffix - Suffix to append (default: '...')
 * @returns Truncated text
 *
 * @example
 * truncate('Hello World', 5) // 'Hello...'
 */
export function truncate(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trimEnd() + suffix;
}

/**
 * Truncate text at the nearest word boundary.
 * @param text - Text to truncate
 * @param maxLength - Maximum character length
 * @param suffix - Suffix to append (default: '...')
 * @returns Truncated text at word boundary
 *
 * @example
 * truncateWords('Hello beautiful world', 15) // 'Hello beautiful...'
 */
export function truncateWords(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace === -1) {
    return truncated + suffix;
  }
  return truncated.slice(0, lastSpace).trimEnd() + suffix;
}

/**
 * Strip HTML tags from a string.
 * @param html - HTML string to strip
 * @returns Plain text without HTML tags
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Generate an excerpt from HTML content.
 * Strips HTML and truncates at word boundary.
 */
export function excerpt(html: string, maxLength: number = 160): string {
  return truncateWords(stripHtml(html), maxLength);
}
