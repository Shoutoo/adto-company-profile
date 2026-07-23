/**
 * Barrel export for utility modules.
 * @module lib/utils
 */

export { cn } from './cn';
export {
  formatDate,
  formatDateShort,
  formatDateTime,
  formatRelativeTime,
  formatISODate,
} from './format-date';
export {
  formatCurrency,
  formatCompactNumber,
  formatNumber,
  formatFileSize,
} from './format-currency';
export { slugify, uniqueSlug } from './slugify';
export { truncate, truncateWords, stripHtml, excerpt } from './truncate';
export { debounce, type DebouncedFunction } from './debounce';
export { throttle, type ThrottledFunction } from './throttle';
export {
  requiredString,
  optionalString,
  emailSchema,
  passwordSchema,
  phoneSchema,
  slugSchema,
  urlSchema,
  idSchema,
  statusSchema,
  sortOrderSchema,
  paginationSchema,
  imageFileSchema,
  documentFileSchema,
} from './validation';
export { generateMetadata, formatPageTitle, type PageSeoConfig } from './seo';
