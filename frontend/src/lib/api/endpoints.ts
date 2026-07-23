/**
 * API endpoint path constants.
 * All paths are relative to the API base URL.
 * @module lib/api/endpoints
 */

/** Authentication endpoints */
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  PROFILE: '/auth/profile',
  REFRESH: '/auth/refresh',
  PASSWORD_RESET_REQUEST: '/auth/password/request',
  PASSWORD_RESET: '/auth/password/reset',
} as const;

/** Public API endpoints */
export const PUBLIC_ENDPOINTS = {
  HOME: '/public/home',
  ABOUT: '/public/about',
  SERVICES: '/public/services',
  SERVICE_DETAIL: (slug: string) => `/public/services/${slug}` as const,
  PROJECTS: '/public/projects',
  PROJECT_DETAIL: (slug: string) => `/public/projects/${slug}` as const,
  BLOGS: '/public/blogs',
  BLOG_DETAIL: (slug: string) => `/public/blogs/${slug}` as const,
  CAREERS: '/public/careers',
  CAREER_DETAIL: (slug: string) => `/public/careers/${slug}` as const,
  CONTACT: '/public/contact',
  FAQ: '/public/faq',
  TESTIMONIALS: '/public/testimonials',
  TEAM: '/public/team',
  CLIENTS: '/public/clients',
  GALLERY: '/public/gallery',
  SETTINGS: '/public/settings',
} as const;

/** Admin API endpoints */
export const ADMIN_ENDPOINTS = {
  DASHBOARD: '/admin/dashboard',
  SERVICES: '/admin/services',
  SERVICE_DETAIL: (id: number | string) => `/admin/services/${id}` as const,
  PROJECTS: '/admin/projects',
  PROJECT_DETAIL: (id: number | string) => `/admin/projects/${id}` as const,
  BLOGS: '/admin/blogs',
  BLOG_DETAIL: (id: number | string) => `/admin/blogs/${id}` as const,
  CAREERS: '/admin/careers',
  CAREER_DETAIL: (id: number | string) => `/admin/careers/${id}` as const,
  CONTACT_MESSAGES: '/admin/contact-messages',
  CONTACT_MESSAGE_DETAIL: (id: number | string) => `/admin/contact-messages/${id}` as const,
  FAQ: '/admin/faq',
  FAQ_DETAIL: (id: number | string) => `/admin/faq/${id}` as const,
  TESTIMONIALS: '/admin/testimonials',
  TESTIMONIAL_DETAIL: (id: number | string) => `/admin/testimonials/${id}` as const,
  TEAM: '/admin/team',
  TEAM_DETAIL: (id: number | string) => `/admin/team/${id}` as const,
  CLIENTS: '/admin/clients',
  CLIENT_DETAIL: (id: number | string) => `/admin/clients/${id}` as const,
  GALLERY: '/admin/gallery',
  GALLERY_DETAIL: (id: number | string) => `/admin/gallery/${id}` as const,
  PAGES: '/admin/pages',
  PAGE_DETAIL: (id: number | string) => `/admin/pages/${id}` as const,
  SETTINGS: '/admin/settings',
  USERS: '/admin/users',
  USER_DETAIL: (id: number | string) => `/admin/users/${id}` as const,
  MEDIA: '/admin/media',
  MEDIA_UPLOAD: '/admin/media/upload',
  MEDIA_DETAIL: (id: number | string) => `/admin/media/${id}` as const,
} as const;
