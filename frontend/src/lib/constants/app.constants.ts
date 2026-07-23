/**
 * Application-wide constants.
 * @module lib/constants/app
 */

/** Supported locales */
export const LOCALES = {
  ID: 'id-ID',
  EN: 'en-US',
} as const;

/** Default pagination settings */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 12,
  MAX_PER_PAGE: 100,
  OPTIONS: [6, 12, 24, 48] as readonly number[],
} as const;

/** Content status values */
export const CONTENT_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
} as const;

/** Contact message status */
export const MESSAGE_STATUS = {
  UNREAD: 'unread',
  READ: 'read',
  REPLIED: 'replied',
  ARCHIVED: 'archived',
} as const;

/** User roles */
export const USER_ROLES = {
  SUPER_ADMIN: 'super-admin',
  ADMIN: 'admin',
  EDITOR: 'editor',
} as const;

/** HTTP status codes */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  TOO_MANY_REQUESTS: 429,
  SERVER_ERROR: 500,
} as const;

/** File upload limits */
export const FILE_LIMITS = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_VIDEO_SIZE: 100 * 1024 * 1024, // 100MB
  ALLOWED_IMAGE_TYPES: [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/svg+xml',
  ] as readonly string[],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ] as readonly string[],
} as const;

/** Animation durations (ms) */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  PAGE_TRANSITION: 400,
} as const;

/** Local storage keys */
export const STORAGE_KEYS = {
  AUTH: 'adto-auth-storage',
  SIDEBAR: 'adto-sidebar-storage',
  THEME: 'adto-theme',
  LOCALE: 'adto-locale',
  COOKIE_CONSENT: 'adto-cookie-consent',
} as const;

/** Breakpoint values (matches Tailwind config) */
export const BREAKPOINTS = {
  XS: 475,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
  '3XL': 1920,
} as const;
