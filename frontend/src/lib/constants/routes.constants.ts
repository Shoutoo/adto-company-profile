/**
 * Application route path constants.
 * @module lib/constants/routes
 */

/** Public page routes */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAIL: (slug: string) => `/services/${slug}` as const,
  PROJECTS: '/projects',
  PROJECT_DETAIL: (slug: string) => `/projects/${slug}` as const,
  BLOG: '/blog',
  BLOG_DETAIL: (slug: string) => `/blog/${slug}` as const,
  CAREER: '/career',
  CAREER_DETAIL: (slug: string) => `/career/${slug}` as const,
  CONTACT: '/contact',
  FAQ: '/knowledge-center#faq',
  MEDIA_GALLERY: '/media-gallery',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
} as const;

/** Authentication routes */
export const AUTH_ROUTES = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const;

/** Admin panel routes */
export const ADMIN_ROUTES = {
  DASHBOARD: '/admin/dashboard',
  PAGES: '/admin/pages',
  PAGE_EDIT: (id: number | string) => `/admin/pages/${id}` as const,
  SERVICES: '/admin/services',
  SERVICE_CREATE: '/admin/services/create',
  SERVICE_EDIT: (id: number | string) => `/admin/services/${id}/edit` as const,
  PROJECTS: '/admin/projects',
  PROJECT_CREATE: '/admin/projects/create',
  PROJECT_EDIT: (id: number | string) => `/admin/projects/${id}/edit` as const,
  BLOG: '/admin/blog',
  BLOG_CREATE: '/admin/blog/create',
  BLOG_EDIT: (id: number | string) => `/admin/blog/${id}/edit` as const,
  CAREER: '/admin/career',
  CAREER_CREATE: '/admin/career/create',
  CAREER_EDIT: (id: number | string) => `/admin/career/${id}/edit` as const,
  TESTIMONIALS: '/admin/testimonials',
  TESTIMONIAL_CREATE: '/admin/testimonials/create',
  TESTIMONIAL_EDIT: (id: number | string) => `/admin/testimonials/${id}/edit` as const,
  TEAM: '/admin/team',
  TEAM_CREATE: '/admin/team/create',
  TEAM_EDIT: (id: number | string) => `/admin/team/${id}/edit` as const,
  CLIENTS: '/admin/clients',
  CLIENT_CREATE: '/admin/clients/create',
  CLIENT_EDIT: (id: number | string) => `/admin/clients/${id}/edit` as const,
  GALLERY: '/admin/gallery',
  GALLERY_UPLOAD: '/admin/gallery/upload',
  MESSAGES: '/admin/messages',
  MESSAGE_DETAIL: (id: number | string) => `/admin/messages/${id}` as const,
  SETTINGS: '/admin/settings',
  SETTINGS_GENERAL: '/admin/settings/general',
  SETTINGS_SEO: '/admin/settings/seo',
  SETTINGS_APPEARANCE: '/admin/settings/appearance',
  USERS: '/admin/users',
  USER_CREATE: '/admin/users/create',
  USER_EDIT: (id: number | string) => `/admin/users/${id}/edit` as const,
} as const;

/** Routes that require authentication */
export const PROTECTED_ROUTE_PREFIX = '/admin';

/** Routes that should redirect if already authenticated */
export const AUTH_REDIRECT_ROUTES = [AUTH_ROUTES.LOGIN] as const;
