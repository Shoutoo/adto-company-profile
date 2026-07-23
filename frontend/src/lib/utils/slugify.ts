/**
 * URL slug generation utility.
 * @module lib/utils/slugify
 */

/**
 * Convert a string into a URL-friendly slug.
 * Handles Indonesian characters and special cases.
 *
 * @param text - Text to slugify
 * @returns URL-friendly slug
 *
 * @example
 * slugify('Hello World!') // 'hello-world'
 * slugify('Jasa Konstruksi & Bangunan') // 'jasa-konstruksi-bangunan'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
}

/**
 * Generate a unique slug by appending a random suffix.
 * @param text - Text to slugify
 * @returns Unique slug with random suffix
 */
export function uniqueSlug(text: string): string {
  const base = slugify(text);
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}
